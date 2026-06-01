import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icon';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
const ENDPOINT = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : '';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY = { name: '', email: '', subject: '', message: '' };

export function ContactForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const update = (field: keyof typeof EMPTY) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!ENDPOINT) {
      setStatus('error');
      setError(t('contact.form.not_configured'));
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          // Sets the email subject line Formspree delivers to your inbox.
          _subject: values.subject
        })
      });

      if (res.ok) {
        setStatus('success');
        setValues(EMPTY);
        return;
      }

      const data = (await res.json().catch(() => null)) as { errors?: { message: string }[] } | null;
      setError(data?.errors?.map((x) => x.message).join(', ') || t('contact.form.error'));
      setStatus('error');
    } catch {
      setError(t('contact.form.error'));
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form contact-form--done" role="status">
        <p className="contact-form__done-title">{t('contact.form.success_title')}</p>
        <p className="contact-form__done-copy">{t('contact.form.success')}</p>
        <button type="button" className="contact-form__again" onClick={() => setStatus('idle')}>
          {t('contact.form.send_another')}
        </button>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="contact-form__grid">
        <div className="field">
          <label className="field__label" htmlFor="cf-name">{t('contact.form.name')}</label>
          <input
            id="cf-name"
            className="field__input"
            type="text"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={update('name')}
            disabled={submitting}
            placeholder={t('contact.form.name_ph')}
          />
        </div>

        <div className="field">
          <label className="field__label" htmlFor="cf-email">{t('contact.form.email')}</label>
          <input
            id="cf-email"
            className="field__input"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={update('email')}
            disabled={submitting}
            placeholder={t('contact.form.email_ph')}
          />
        </div>
      </div>

      <div className="field">
        <label className="field__label" htmlFor="cf-subject">{t('contact.form.subject')}</label>
        <input
          id="cf-subject"
          className="field__input"
          type="text"
          name="subject"
          required
          value={values.subject}
          onChange={update('subject')}
          disabled={submitting}
          placeholder={t('contact.form.subject_ph')}
        />
      </div>

      <div className="field">
        <label className="field__label" htmlFor="cf-message">{t('contact.form.message')}</label>
        <textarea
          id="cf-message"
          className="field__input field__input--area"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={update('message')}
          disabled={submitting}
          placeholder={t('contact.form.message_ph')}
        />
      </div>

      {/* Honeypot — bots fill this; humans never see it. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="contact-form__honeypot" />

      {status === 'error' && (
        <p className="contact-form__error" role="alert">{error}</p>
      )}

      <button type="submit" className="contact-form__submit" disabled={submitting}>
        {submitting ? t('contact.form.sending') : t('contact.form.send')}
        <Icon name="arrow-up-right" size={16} />
      </button>
    </form>
  );
}

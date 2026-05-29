import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/animations/Reveal';
import { Icon } from '../components/Icon';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <Reveal as="div">
          <h2 className="footer__big">
            {t('contact.title_pre')} <em>{t('contact.title_emph')}</em> {t('contact.title_post')}
          </h2>

          <a className="footer__email" href={`mailto:${t('contact.email')}`}>
            {t('contact.email')}
            <Icon name="arrow-up-right" size={22} />
          </a>
        </Reveal>

        <div className="footer__row">
          <div>{t('contact.rights')}</div>
          <div>{t('contact.built')}</div>
          <ul className="footer__links">
            <li>
              <a className="footer__link" href="https://github.com/luis96raul1" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Icon name="github" />
              </a>
            </li>
            <li>
              <a className="footer__link" href="https://www.linkedin.com/in/luis-talavera-llerena/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" />
              </a>
            </li>
            <li>
              <a className="footer__link" href={`mailto:${t('contact.email')}`} aria-label="Email">
                <Icon name="mail" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

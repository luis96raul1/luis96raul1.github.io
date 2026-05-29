import { Trans, useTranslation } from 'react-i18next';
import { works } from '../data/works';
import { Reveal } from '../components/animations/Reveal';
import { Icon } from '../components/Icon';
import { useLightbox } from '../store/LightboxContext';

export function Work() {
  const { t } = useTranslation();
  const { open } = useLightbox();

  return (
    <section id="work" className="section work">
      <div className="watermark" aria-hidden="true"><span>{t('work.eyebrow')}</span></div>
      <div className="container" style={{ position: 'relative' }}>
        <Reveal as="div" className="section__head">
          <div className="section__index">
            <span>01</span><span>—</span><span>{t('work.eyebrow')}</span>
          </div>
          <div>
            <h2 className="section__title">
              {t('work.title_pre')} <em>{t('work.title_emph')}</em>{t('work.title_post')}
            </h2>
            <p className="lede" style={{ marginTop: '1.5rem' }}>{t('work.lede')}</p>
          </div>
        </Reveal>

        <div className="work__list">
          {works.map((w, i) => (
            <Reveal key={w.id} as="article" className={`case ${i % 2 === 1 ? 'case--reverse' : ''}`}>
              <div className="case__copy-wrap">
                <div className="case__index">{String(i + 1).padStart(2, '0')} / {String(works.length).padStart(2, '0')}</div>

                <div className="case__head">
                  <h3 className="case__name">
                    {w.url ? (
                      <a href={w.url} target="_blank" rel="noreferrer">
                        {t(`works.${w.key}.name`)}
                      </a>
                    ) : (
                      t(`works.${w.key}.name`)
                    )}
                  </h3>
                  <span className="case__type">{t(`works.${w.key}.type`)}</span>
                </div>

                <p className="case__copy">
                  <Trans
                    i18nKey={`works.${w.key}.description`}
                    components={{ strong: <strong />, a: <a target="_blank" rel="noreferrer" /> }}
                  />
                </p>

                <ul className="case__chips" aria-label="Stack">
                  {w.stack.map((s) => (
                    <li key={s} className="case__chip">{s}</li>
                  ))}
                </ul>

                {w.url && (
                  <a
                    className="hero__cta"
                    style={{ marginTop: '2rem', padding: '0.75rem 1.1rem', fontSize: '0.8rem' }}
                    href={w.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('work.view_site')}
                    <Icon name="arrow-up-right" size={14} />
                  </a>
                )}
              </div>

              <div className="case__visuals">
                <button className="case__shot case__shot--back" onClick={() => open(w.shots[1])} aria-label={`Open ${t(`works.${w.key}.name`)} screenshot`}>
                  <img src={w.shots[1]} alt={`${t(`works.${w.key}.name`)} — secondary`} loading="lazy" />
                </button>
                <button className="case__shot case__shot--front" onClick={() => open(w.shots[0])} aria-label={`Open ${t(`works.${w.key}.name`)} screenshot`}>
                  <img src={w.shots[0]} alt={`${t(`works.${w.key}.name`)} — primary`} loading="lazy" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

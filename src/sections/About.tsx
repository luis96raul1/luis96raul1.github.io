import { Trans, useTranslation } from 'react-i18next';
import { Reveal } from '../components/animations/Reveal';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal as="div" className="section__head">
          <div className="section__index">
            <span>03</span><span>—</span><span>{t('about.eyebrow')}</span>
          </div>
          <div>
            <h2 className="section__title">
              {t('about.title_pre')} <em>{t('about.title_emph')}</em> {t('about.title_post')}
            </h2>
          </div>
        </Reveal>

        <Reveal as="div" className="about__grid">
          <p className="about__lede">{t('about.lede')}</p>

          <div>
            <div className="about__copy">
              <p>
                <Trans i18nKey="about.p1" components={{ strong: <strong /> }} />
              </p>
              <p>
                <Trans i18nKey="about.p2" components={{ strong: <strong /> }} />
              </p>
            </div>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-num">04+</span>
                <span className="about__stat-label">{t('about.stat_years')}</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">12</span>
                <span className="about__stat-label">{t('about.stat_projects')}</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">∞</span>
                <span className="about__stat-label">{t('about.stat_coffee')}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

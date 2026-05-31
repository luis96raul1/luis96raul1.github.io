import { Trans, useTranslation } from 'react-i18next';
import { skills } from '../data/skills';
import { Reveal, RevealStagger, StaggerItem } from '../components/animations/Reveal';

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section section--alt skills">
      <div className="container" style={{ position: 'relative' }}>
        <Reveal as="div" className="section__head">
          <div className="section__index">
            <span>02</span><span>—</span><span>{t('skills.eyebrow')}</span>
          </div>
          <div>
            <h2 className="section__title">
              {t('skills.title_pre')} <em>{t('skills.title_emph')}</em>{t('skills.title_post')}
            </h2>
            <p className="lede" style={{ marginTop: '1.5rem' }}>{t('skills.lede')}</p>
          </div>
        </Reveal>

        <RevealStagger className="skills__grid">
          {skills.map((s, i) => (
            <StaggerItem key={s.id}>
              <article className="skillcard">
                <div className="skillcard__head">
                  <div className="skillcard__icon">
                    <img src={s.icon} alt="" aria-hidden="true" loading="lazy" />
                  </div>
                  <span className="skillcard__idx">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="skillcard__name">{t(`skill.${s.key}.name`)}</h3>
                <p className="skillcard__desc">
                  <Trans i18nKey={`skill.${s.key}.description`} components={{ strong: <strong /> }} />
                </p>
                <ul className="skillcard__tags" aria-label="Tools">
                  {s.tags.map((tag) => (
                    <li key={tag} className="skillcard__tag">{tag}</li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

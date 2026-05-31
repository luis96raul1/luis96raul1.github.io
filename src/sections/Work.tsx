import { useLayoutEffect, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { works } from '../data/works';
import { Reveal } from '../components/animations/Reveal';
import { Icon } from '../components/Icon';
import { useLightbox } from '../store/LightboxContext';

gsap.registerPlugin(ScrollTrigger);

export function Work() {
  const { t } = useTranslation();
  const { open } = useLightbox();
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: pin the section and translate the track horizontally as
      // the user scrolls vertically — a scroll-driven carousel.
      mm.add('(min-width: 821px)', () => {
        const panels = gsap.utils.toArray<HTMLElement>('.case', track);
        const getDistance = () => track.scrollWidth - window.innerWidth;

        const drift = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none'
        });

        ScrollTrigger.create({
          trigger: pin,
          start: 'top top',
          end: () => '+=' + getDistance(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          animation: drift,
          onUpdate: (self) => {
            if (progressRef.current) gsap.set(progressRef.current, { scaleX: self.progress });
          }
        });

        // Reveal each panel as it enters the viewport horizontally.
        panels.forEach((panel) => {
          gsap.from(panel, {
            opacity: 0,
            y: 48,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: drift,
              start: 'left 85%',
              toggleActions: 'play none none reverse'
            }
          });
        });
      });

      // Mobile / tablet: keep the classic vertical stack with fade-ins.
      mm.add('(max-width: 820px)', () => {
        gsap.utils.toArray<HTMLElement>('.case', track).forEach((panel) => {
          gsap.from(panel, {
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: panel, start: 'top 85%' }
          });
        });
      });
    }, pinRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="section work">
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
      </div>

      <div className="work__pin" ref={pinRef}>
        <div className="work__track" ref={trackRef}>
          {works.map((w, i) => (
            <article key={w.id} className={`case ${i % 2 === 1 ? 'case--reverse' : ''}`}>
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
                {w.shots ? (
                  <>
                    <button className="case__shot case__shot--back" onClick={() => open(w.shots![1])} aria-label={`Open ${t(`works.${w.key}.name`)} screenshot`}>
                      <img src={w.shots[1]} alt={`${t(`works.${w.key}.name`)} — secondary`} loading="lazy" />
                    </button>
                    <button className="case__shot case__shot--front" onClick={() => open(w.shots![0])} aria-label={`Open ${t(`works.${w.key}.name`)} screenshot`}>
                      <img src={w.shots[0]} alt={`${t(`works.${w.key}.name`)} — primary`} loading="lazy" />
                    </button>
                  </>
                ) : (
                  <div className="case__placeholder" aria-hidden="true">
                    <span className="case__placeholder-name">{t(`works.${w.key}.name`)}</span>
                    <span className="case__placeholder-note">{t('work.coming_soon')}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="work__progress" aria-hidden="true">
          <span ref={progressRef} className="work__progress-bar" />
        </div>
      </div>
    </section>
  );
}

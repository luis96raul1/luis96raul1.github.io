import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Icon } from '../components/Icon';
import { Typewriter } from '../components/animations/Typewriter';

import jsImg from '../assets/images/JavaScript.jpg';
import cssImg from '../assets/images/Css.jpeg';
import htmlImg from '../assets/images/Html.svg';
import reactImg from '../assets/images/React.jpg';
import ubuntuImg from '../assets/images/Ubuntu.jpg';
import itImg from '../assets/images/It.png';

const cubeFaces: Array<{ cls: string; src: string; alt: string }> = [
  { cls: 'cube__face--front',  src: reactImg,  alt: 'React' },
  { cls: 'cube__face--back',   src: htmlImg,   alt: 'HTML' },
  { cls: 'cube__face--right',  src: jsImg,     alt: 'JavaScript' },
  { cls: 'cube__face--left',   src: cssImg,    alt: 'CSS' },
  { cls: 'cube__face--top',    src: ubuntuImg, alt: 'Ubuntu' },
  { cls: 'cube__face--bottom', src: itImg,     alt: 'Linux' }
];

const wordVariant = {
  hidden: { y: '110%' },
  show:   { y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <motion.div
            className="hero__meta"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero__meta-dot" />
            <span className="hero__meta-label">{t('hero.status')}</span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
          >
            <span className="word"><motion.span style={{ display: 'inline-block' }} variants={wordVariant}>{t('hero.title_pre')}</motion.span></span>{' '}
            <span className="word"><motion.span style={{ display: 'inline-block' }} variants={wordVariant}><em>{t('hero.title_emph')}</em></motion.span></span>{' '}
            <span className="word"><motion.span style={{ display: 'inline-block' }} variants={wordVariant}>{t('hero.title_post')}</motion.span></span>
          </motion.h1>

          <motion.p
            className="hero__lede"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <Typewriter text={t('hero.lede')} startDelay={1100} speed={14} />
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <a className="hero__cta" href="#work">
              {t('hero.cta_primary')}
              <Icon name="arrow-right" size={16} />
            </a>
            <div className="hero__socials">
              <a className="hero__social" href="https://github.com/luis96raul1" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Icon name="github" size={18} />
              </a>
              <a className="hero__social" href="https://www.linkedin.com/in/luis-talavera-llerena/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={18} />
              </a>
              <a className="hero__social" href="#contact" aria-label="Contact">
                <Icon name="mail" size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cube">
            <span className="cube__halo" aria-hidden="true" />
            <div className="cube__stage">
              {cubeFaces.map((f) => (
                <div key={f.cls} className={`cube__face ${f.cls}`}>
                  <img src={f.src} alt={f.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="container hero__foot"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <div>
          <span>{t('hero.stack_label')}</span>
          <strong>{t('hero.stack_value')}</strong>
        </div>
        <a href="#work" className="hero__scroll" aria-label="Scroll to work">
          {t('hero.scroll')}
          <span className="hero__scroll-line" />
        </a>
        <div>
          <span>{t('hero.location_label')}</span>
          <strong>{t('hero.location_value')}</strong>
        </div>
      </motion.div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/images/logo.jpg';
import { navItems, sectionIds } from '../data/nav';
import { useScrolled } from '../hooks/useScrolled';
import { useActiveSection } from '../hooks/useActiveSection';
import { Icon } from './Icon';

export function Header() {
  const { t, i18n } = useTranslation();
  const scrolled = useScrolled(24);
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  const otherLang = i18n.language === 'es' ? 'en' : 'es';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header__shell" aria-hidden="true" />
      <div className="header__inner">
        <a className="header__brand" href="#home" aria-label="Home">
          <img className="header__mark" src={logo} alt="" />
          <span className="header__name">
            <strong>Luis Talavera</strong>
            <span>Developer</span>
          </span>
        </a>

        <nav className="header__nav" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navlink ${active === item.id ? 'is-active' : ''}`}
            >
              <span className="navlink__index">{item.index}</span>
              <span>{t(item.key)}</span>
            </a>
          ))}
        </nav>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 2 }}>
          <button
            className="header__lang"
            onClick={() => i18n.changeLanguage(otherLang)}
            aria-label={`Switch to ${otherLang.toUpperCase()}`}
          >
            {t('header.lang_toggle')}
          </button>
          <a className="header__cta" href="#contact">
            {t('header.cta')}
            <Icon name="arrow-up-right" size={14} />
          </a>
          <button
            className={`hamburger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            className="drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
          >
            <motion.ul
              className="drawer__list"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } } }}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  <a className="drawer__link" href={`#${item.id}`} onClick={() => setOpen(false)}>
                    <span className="drawer__link-num">{item.index}</span>
                    <span>
                      {t(item.key)}{active === item.id && <em>.</em>}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="drawer__foot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
            >
              <button className="header__lang" onClick={() => i18n.changeLanguage(otherLang)}>
                {t('header.lang_toggle')}
              </button>
              <a href="mailto:luis96raul1@gmail.com">luis96raul1@gmail.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

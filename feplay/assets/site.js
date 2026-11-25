'use strict';
const selected = new URL(location.href).searchParams.get('lang');
let language = selected === 'es' ? 'es' : 'en';
function applyLanguage(next) {
  language = next;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-label-en][data-label-es]').forEach(element => element.setAttribute('aria-label', element.dataset[language === 'es' ? 'labelEs' : 'labelEn']));
  document.querySelectorAll('nav[aria-label="Language"],nav[aria-label="Idioma"]').forEach(nav => nav.setAttribute('aria-label', language === 'es' ? 'Idioma' : 'Language'));
  document.querySelectorAll('[data-en][data-es]').forEach(element => { element.textContent = element.dataset[language]; });
  document.querySelectorAll('[data-local-link]').forEach(element => {
    const url = new URL(element.href, location.href); url.searchParams.set('lang', language); element.href = url.href;
  });
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  const url = new URL(location.href); url.searchParams.set('lang', language); history.replaceState(null, '', url);
}
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
applyLanguage(language);

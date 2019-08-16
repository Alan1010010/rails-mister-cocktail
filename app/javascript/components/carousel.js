import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Like cocktails? ^500", "Love tailCock ^4000"],
    typeSpeed: 80,
    smartBackspace: true
  });
}

export { loadDynamicBannerText };



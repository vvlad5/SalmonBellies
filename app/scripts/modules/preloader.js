export default class Preloader {
  static disablingPreloader() {
    const preloader = document.querySelector('.preloader');
    const handler = () => {
      preloader.removeEventListener('animationend', handler);

      preloader.style.display = 'none';
      preloader.classList.remove('hide');

      const event = new CustomEvent('showScroll');
      document.dispatchEvent(event);
    };

    preloader.addEventListener('animationend', handler);

    setTimeout(() => {
      preloader.classList.add('hide');
    }, 1000);
  }

  static init() {
    const event = new CustomEvent('hideScroll');
    document.dispatchEvent(event);

    window.addEventListener('load', Preloader.disablingPreloader);
  }
};

export default class Scrollbar {
  static show() {
    document.body.classList.remove('hide-scroll');
    document.body.style.paddingRight = ``;
  }

  static hide() {
    document.body.classList.add('hide-scroll');
    document.body.style.paddingRight = Scrollbar.calcScrollbarWidth();
  }

  static calcScrollbarWidth() {
    const scrollbarMeasure = document.createElement('div');
    scrollbarMeasure.className = 'scroll-measure';

    document.body.appendChild(scrollbarMeasure);

    const offsetWidth = scrollbarMeasure.offsetWidth;
    const clientWidth = scrollbarMeasure.clientWidth;
    const scrollbarWidth = `${offsetWidth - clientWidth}px`;

    document.body.removeChild(scrollbarMeasure);

    return scrollbarWidth;
  }
};

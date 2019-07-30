export default class Slogans {
  constructor(elems) {
    this._elems = elems;
    this._curr = 0;
    this._total = elems.length;
    this._showTime = 5000;

    this._setActive();
    this._run();
  }

  _run() {
    setInterval(() => {
      this._changeActiveItem();
    }, this._showTime);
  }

  _changeActiveItem() {
    this._removeActive();

    if (this._curr + 1 > this._total - 1) {
      this._curr = 0;
    } else {
      this._curr++;
    }
  }

  _setActive() {
    const newActive = this._elems[this._curr];
    newActive.style.display = 'block';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        newActive.classList.add('active');
      });
    });
  }

  _removeActive() {
    const currActive = this._elems[this._curr];
    const handler = () => {
      currActive.removeEventListener('transitionend', handler);
      currActive.style.display = '';
      this._setActive();
    };
    currActive.addEventListener('transitionend', handler);
    currActive.classList.remove('active');
  }

  static init() {
    const container = document.querySelector('.js-slogans');
    const elems = container.children;

    return new Slogans(elems);
  }
}

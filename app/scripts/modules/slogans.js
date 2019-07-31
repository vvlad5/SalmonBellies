export default class Slogans {
  constructor(elems) {
    this._elems = elems;
    this._curr = 0;
    this._total = elems.length;
    this._showTime = 5000;
    this._timerId = null;

    this._setActive();
    this._addEvents();
  }

  _setTimeout() {
    this._clearTimerId();
    this._timerId = setTimeout(() => {
      this._removeActive();
    }, this._showTime);
  }

  _clearTimerId() {
    clearTimeout(this._timerId);
  }

  _changeActiveItem() {
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
      this._changeActiveItem();
      this._setActive();
      this._setTimeout();
    };
    currActive.addEventListener('transitionend', handler);
    currActive.classList.remove('active');
  }

  _addEvents() {
    window.addEventListener('focus', () => {
      this._setTimeout();
    });

    window.addEventListener('blur', () => {
      this._clearTimerId();
    });
  }

  static init() {
    const container = document.querySelector('.js-slogans');
    const elems = container.children;

    return new Slogans(elems);
  }
}

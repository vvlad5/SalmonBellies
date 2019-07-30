export default class MobileMenu {
  constructor(menu, toggle) {
    this._menu = menu;
    this._toggle = toggle;

    this._addEvents();
  }

  _addEvents() {
    this._toggle.addEventListener('click', () => {
      this._toggleEvent();
    });
  }

  _toggleEvent() {
    if (this._menu.classList.contains('active')) {
      this._deactivateMenu();
      MobileMenu._scrollControl('show');
    } else {
      MobileMenu._scrollControl('hide');
      this._activateMenu();
    }
  }

  _activateMenu() {
    this._menu.classList.add('active');
  }

  _deactivateMenu() {
    this._menu.classList.remove('active');
  }

  static _scrollControl(action) {
    let event = null;

    if (action === 'show') {
      event = new CustomEvent('showScroll');
    } else {
      event = new CustomEvent('hideScroll');
    }

    document.dispatchEvent(event)
  }

  static init() {
    const menu = document.querySelector('.js-mb-menu');
    const toggle = menu.querySelector('.mb-menu__toggle');

    return new MobileMenu(menu, toggle);
  }
}

import Scrollbar from './modules/scrollbar';
import Preloader from './modules/preloader';
import MobileMenu from './modules/mobile-menu';
import Slogans from './modules/slogans';

class Facade {
  constructor() {
    this._addEvents();
  }

  _addEvents() {
    document.addEventListener('hideScroll', () => {
      Scrollbar.hide();
    });

    document.addEventListener('showScroll', () => {
      Scrollbar.show();
    });
  }

  static init() {
    return new Facade();
  }
}
const facade = Facade.init();

Preloader.init();
MobileMenu.init();
Slogans.init();

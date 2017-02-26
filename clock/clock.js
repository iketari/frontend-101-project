'use strict';

/** 
 * @class Clock
 */
class Clock {

  /**
   * @constructor
   */
  constructor () {
    this.precision = 1000;
  }

  /**
   * Создаем HTML
   */
  render () {
    let date = new Date();
    let hh = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let fronts, backs, meridiem = 'am';

    fronts = document.querySelectorAll('.front');
    backs = document.querySelectorAll('.back');

    if (hh >= 12) {
      meridiem = 'pm'; 
    }

    if (hh > 12) {
      hh -= 12;
    }
    if (hh < 10) {
      hh = '0' + hh;
    }
    
    if (min < 10) {
      min = '0' + min;
    }
    
    if (sec < 10) {
      sec = '0' + sec;
    }

    fronts[0].innerHTML = hh;

    fronts[1].innerHTML = hh + '<div class="meridiem">' + meridiem +'</div>';
    backs[0].innerHTML = hh + 1;

    fronts[2].innerHTML = min;
    fronts[3].innerHTML = min;
    backs[1].innerHTML = min + 1

    fronts[4].innerHTML = sec;
    fronts[5].innerHTML = sec;
    backs[2].innerHTML = sec + 1; 
  };

  /**
   * Запускаем часики
   */
  start () {
    this.render();
    this._timer = setInterval(this.render.bind(this), this.precision);
  };

  /**
   * Останавливаем часики
   */
  stop () {
    clearTimeout(this._timer);
  };
}


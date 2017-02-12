'use strict';

/** 
 * @constructor
 * @param {number} precision
 */
function Clock (precision) {
	this.precision = precision;
}

Clock.prototype._render = function () {
  let date = new Date();
  let hh = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let display;

  if (hh < 10) {
    hh = '0' + hh;
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }

  display = hh + ':' + min + ':' + sec;
  document.body.innerHTML = display;
};

Clock.prototype.start = function() {
  this._render();
  this._timer = setInterval(this._render.bind(this), this.precision);
};


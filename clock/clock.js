'use strict';

/** 
 * @constructor
 * @param {number} precision
 */
function Clock (precision) {
	this.precision = precision||1000;
}

Clock.prototype._render = function () {
  let date = new Date();
  let hh = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  
  if (hh < 10) {
    hh = '0' + hh;
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }
  
  document.body.innerHTML = "<span id='hh'>" + hh + "</span>:<span id='min'>" + min + "</span>:<span id='sec'>" + sec + "</span>";  
};

Clock.prototype.start = function() {
  this._render();
  this._timer = setInterval(this._render.bind(this), this.precision);
};



export default class SafeTimer {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback;
    this.timeLeft = this._get();
    callback(this.timeLeft);
    if (this.timeLeft > 0) {
      this._startCount();
    }
  }

  _set(time) {
    localStorage.setItem(this.name, time);
  }

  _get() {
    let time = localStorage.getItem(this.name);
    time = parseInt(time);
    if (!isFinite(time)) {
      time = 0;
    }
    return time;
  }

  _startCount() {
    const timer = setInterval(() => {
      this.timeLeft = this.timeLeft - 1;
      this._set(this.timeLeft);
      this.callback(this.timeLeft);
      if (this.timeLeft <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  setTimeLeft(timeLeft) {
    this.timeLeft = timeLeft;
    this._set(this.timeLeft);
    this.callback(this.timeLeft);
    if (this.timeLeft > 0) {
      this._startCount();
    }
  }
}

export default {
  formatSecondTime(interval) {
    interval = interval | 0;
    const m = (interval / 60) | 0;
    const s = interval % 60;
    return `${this.formatZero(m, 2)}:${this.formatZero(s, 2)}`;
  },
};

const setTimeoutRequestAnimationFrame = (cb) => {
  setTimeout(cb, 1000 / 60);
};

let requestAnimationFrame;

if (typeof window === 'undefined') {
  requestAnimationFrame = setTimeoutRequestAnimationFrame;
} else {
  requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    setTimeoutRequestAnimationFrame;
}

export default requestAnimationFrame;

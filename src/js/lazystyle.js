// This function will load css/style.css asynchronously
var cb = function() {
  var l = document.createElement('link'); l.rel = 'stylesheet';
  l.href = 'css/style.css';
  var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
};
var raf = requestAnimationFrame || mozRequestAnimationFrame ||
    webkitRequestAnimationFrame || msRequestAnimationFrame;
// Wait five seconds, then call the above function
setTimeout(cb, 5000);

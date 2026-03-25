(function () {
  // Nur auf Desktop (nicht auf Touch-Geräten)
  if (window.matchMedia('(pointer: coarse)').matches) return;

  // Dot erstellen
  var dot = document.createElement('div');
  dot.id = 'cursor-dot';
  document.body.appendChild(dot);

  // Ring erstellen
  var ring = document.createElement('div');
  ring.id = 'cursor-ring';
  document.body.appendChild(ring);

  var mouseX = 0, mouseY = 0;
  var ringX = 0, ringY = 0;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Ring folgt mit leichtem Verzug (weicher Effekt)
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover-Effekt auf Links und Buttons
  document.addEventListener('mouseover', function (e) {
    if (e.target.closest('a, button, .btn, label')) {
      dot.classList.add('cursor-hover');
      ring.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest('a, button, .btn, label')) {
      dot.classList.remove('cursor-hover');
      ring.classList.remove('cursor-hover');
    }
  });
})();

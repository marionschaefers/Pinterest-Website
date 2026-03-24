// Cookie-Banner – DSGVO-konform
(function() {
  if (localStorage.getItem('cookieOk')) return;

  var banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = [
    '<p>Diese Website nutzt <strong>Google Fonts</strong> (Schriftarten von Google) und <strong>Ablefy</strong> (Kauffunktionen). ',
    'Durch die Nutzung dieser Seite werden Daten an externe Server übertragen. ',
    '<a href="datenschutz.html">Mehr in der Datenschutzerklärung</a>.</p>',
    '<button id="cookie-ok">Verstanden &amp; akzeptieren</button>',
    '<button id="cookie-close">Nur notwendige</button>'
  ].join('');

  Object.assign(banner.style, {
    position:   'fixed',
    bottom:     '0',
    left:       '0',
    right:      '0',
    background: '#EBE8E1',
    borderTop:  '3px solid #FF751F',
    padding:    '1rem 1.5rem',
    display:    'flex',
    alignItems: 'center',
    gap:        '1rem',
    flexWrap:   'wrap',
    zIndex:     '9999',
    fontSize:   '.88rem',
    color:      '#2A1F18',
    boxShadow:  '0 -2px 12px rgba(0,0,0,.08)'
  });

  document.body.appendChild(banner);

  function styleBtn(btn, primary) {
    Object.assign(btn.style, {
      padding:      '.5rem 1.2rem',
      border:       'none',
      cursor:       'pointer',
      fontWeight:   '700',
      fontSize:     '.82rem',
      whiteSpace:   'nowrap',
      background:   primary ? '#FF751F' : 'transparent',
      color:        primary ? '#FEFEFE' : '#6B5F57',
      borderBottom: primary ? 'none' : '1px solid #6B5F57'
    });
  }

  styleBtn(document.getElementById('cookie-ok'), true);
  styleBtn(document.getElementById('cookie-close'), false);

  document.getElementById('cookie-ok').onclick = function() {
    localStorage.setItem('cookieOk', '1');
    banner.remove();
  };
  document.getElementById('cookie-close').onclick = function() {
    localStorage.setItem('cookieOk', 'minimal');
    banner.remove();
  };
})();

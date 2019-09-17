import React from 'react';

function Footer() {
  return (
    <footer className="footer text-center">
      <p>
        Feito com
        <span role="img" aria-label="Coração">️ ❤️ </span>
        por:&nbsp;
        <a
          className="linked"
          href="https://guilherme.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guilherme Paiva
        </a>
      </p>
    </footer>
  );
}

export default React.memo(Footer);

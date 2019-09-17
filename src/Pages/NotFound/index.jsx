import React from 'react';

function NotFound() {
  return (
    <h3 className="text-center">
      Página não encontrada
      <span role="img" aria-label="Neutral Face">
        😐
      </span>
    </h3>
  );
}

export default React.memo(NotFound);

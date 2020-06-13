import React from 'react';

// HOCs
import withDisplay from 'HOCs/withDisplay';

// Styles
import 'styles/components/Loader.css';

const Loader = () => (
  <>
    <div className="Loader">
      <div className="loader-child">
        <div className="loader">
          <span>L</span>
          <span>O</span>
          <span>V</span>
          <span>E</span>
          <span>&nbsp;</span>
          <span>B</span>
          <span>E</span>
          <span>E</span>
          <span>R</span>
          <span>S</span>
        </div>
      </div>
    </div>
  </>
);

Loader.displayName = 'Loader';

export default withDisplay(Loader);

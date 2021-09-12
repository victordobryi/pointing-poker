import { Fragment } from 'react';

import './modal.scss';
export const Modal = ({ active, setActive, children }) => {
  return (
    <Fragment>
      <div
        className={active ? 'modal active' : 'modal'}
        onClick={() => {
          setActive(false);
          document.body.style.overflowY = 'visible';
        }}
      >
        <div
          className={active ? 'modal__content active' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Fragment>
  );
};

import type { CSSProperties } from 'react';

export const PopUpBtn: CSSProperties = {
  position: 'absolute',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'calc(100% - 3rem)',
  textAlign: 'center',
  borderRadius: '10px',
  cursor: 'pointer',
};

export const PopUpBox: CSSProperties = {
  position: 'absolute',
  bottom: '6rem',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'calc(100% - 3rem)',
  textAlign: 'center',
  borderRadius: '10px',
};

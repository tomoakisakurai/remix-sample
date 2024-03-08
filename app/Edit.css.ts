import { style, globalStyle } from '@vanilla-extract/css';

// #contact-form に対する基本スタイル
export const contactForm = style({
  display: 'flex',
  maxWidth: '40rem',
  flexDirection: 'column',
  gap: '1rem',
});

// #contact-form > p:first-child に対するスタイル
globalStyle(`${contactForm} > p:first-child`, {
  margin: 0,
  padding: 0,
});

// #contact-form > p:first-child > :nth-child(2) に対するスタイル
globalStyle(`${contactForm} > p:first-child > :nth-child(2)`, {
  marginRight: '1rem',
});

// #contact-form > p:first-child と #contact-form label に共通するスタイル
globalStyle(`${contactForm} > p:first-child, ${contactForm} label`, {
  display: 'flex',
});

// #contact-form p:first-child span と #contact-form label span に対するスタイル
globalStyle(`${contactForm} p:first-child span, ${contactForm} label span`, {
  width: '8rem',
});

// input と textarea に対するスタイル
globalStyle(
  `${contactForm} p:first-child input, ${contactForm} label input, ${contactForm} label textarea`,
  {
    flexGrow: 2,
  }
);

// #contact-form-avatar とその内部の img に対するスタイル
export const contactFormAvatar = style({
  marginRight: '2rem',
});

globalStyle(`${contactFormAvatar} img`, {
  width: '12rem',
  height: '12rem',
  background: 'hsla(0, 0%, 0%, 0.2)',
  borderRadius: '1rem',
});

// #contact-form-avatar 内の input に対するスタイル
globalStyle(`${contactFormAvatar} input`, {
  boxSizing: 'border-box',
  width: '100%',
});

// #contact-form の最後の p に対するスタイル
globalStyle(`${contactForm} p:last-child`, {
  display: 'flex',
  gap: '0.5rem',
  margin: '0 0 0 8rem',
});

// 最後の p 内の button[type="button"] に対するスタイル
globalStyle(`${contactForm} p:last-child button[type="button"]`, {
  color: 'inherit',
});

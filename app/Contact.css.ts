import { globalStyle, style } from '@vanilla-extract/css';

// #contact に対する基本スタイル
export const contact = style({
  maxWidth: '40rem',
  display: 'flex',
});

// #contact h1 に対するスタイル
export const contactH1 = style({
  fontSize: '2rem',
  fontWeight: 700,
  margin: 0,
  lineHeight: 1.2,
});

// 隣接セレクタや属性セレクタを含むスタイルはglobalStyleを使用
globalStyle(`${contact} h1 + p`, {
  margin: 0,
});

globalStyle(`${contact} h1 + p + p`, {
  whiteSpace: 'break-spaces',
});

globalStyle(`${contact} h1:focus`, {
  outline: 'none',
  color: 'hsl(224, 98%, 58%)',
});

globalStyle(`${contact} a[href*="twitter"]`, {
  display: 'flex',
  fontSize: '1.5rem',
  color: '#3992ff',
  textDecoration: 'none',
});

globalStyle(`${contact} a[href*="twitter"]:hover`, {
  textDecoration: 'underline',
});

export const contactImg = style({
  width: '12rem',
  height: '12rem',
  background: '#c8c8c8',
  marginRight: '2rem',
  borderRadius: '1.5rem',
  objectFit: 'cover',
});

globalStyle(`${contact} h1 ~ div`, {
  display: 'flex',
  gap: '0.5rem',
  margin: '1rem 0',
});

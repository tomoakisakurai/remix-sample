import { globalStyle, keyframes, style } from '@vanilla-extract/css';

// #detail に対するスタイルを定義
export const detail = style({
  flex: 1,
  padding: '2rem 4rem',
  width: '100%',
});

// 既に存在する detail スタイルを基にして
export const detailLoading = style({
  opacity: 0.25,
  transition: 'opacity 200ms',
  transitionDelay: '200ms',
});

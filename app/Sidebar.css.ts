import { globalStyle, keyframes, style } from '@vanilla-extract/css';

export const sidebar = style({
  width: '22rem',
  backgroundColor: '#f7f7f7',
  borderRight: 'solid 1px #e3e3e3',
  display: 'flex',
  flexDirection: 'column',
});

globalStyle(`${sidebar} > *`, {
  paddingLeft: '2rem',
  paddingRight: '2rem',
});

export const sidebarHeading = style({
  fontSize: '1rem',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  padding: '1rem 2rem',
  borderTop: '1px solid #e3e3e3',
  order: 1,
  lineHeight: 1,
});

export const sidebarDiv = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid #e3e3e3',
});

globalStyle(`${sidebarDiv} form`, {
  position: 'relative',
});

globalStyle(`${sidebarDiv} form input[type="search"]`, {
  boxSizing: 'border-box',
  width: '100%',
  paddingLeft: '2rem',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0.625rem 0.75rem',
  backgroundSize: '1rem',
  position: 'relative',
});

// globalStyle('@keyframes spin', {
//   from: {
//     transform: 'rotate(0deg)',
//   },
//   to: {
//     transform: 'rotate(360deg)',
//   },
// });

globalStyle(`#search-spinner`, {
  width: '1rem',
  height: '1rem',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 4v5h-.582m0 0a8.001 8.001 0 00-15.356 2m15.356-2H15M4 20v-5h.581m0 0a8.003 8.003 0 0015.357-2M4.581 15H9' /%3E%3C/svg%3E")`,
  animation: 'spin 1s infinite linear',
  position: 'absolute',
  left: '0.625rem',
  top: '0.75rem',
});

export const sidebarNav = style({
  flex: 1,
  overflow: 'auto',
  paddingTop: '1rem',
});

globalStyle(`${sidebarNav} a span`, {
  float: 'right',
  color: '#eeb004',
});

globalStyle(`${sidebarNav} a.active span`, {
  // color: 'inherit', // 親要素から色を継承
});

globalStyle('i', {
  color: '#818181', // 色を灰色に設定
});

globalStyle(`${sidebarNav} .active i`, {
  color: 'inherit', // 親要素の色を継承
});

globalStyle(`${sidebar} ul`, {
  padding: 0,
  margin: 0,
  listStyle: 'none',
});

// #sidebar li に対するスタイルを定義
globalStyle(`${sidebar} li`, {
  margin: '0.25rem 0',
});

// #sidebar nav a に対するスタイルを定義
export const sidebarNavLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden',
  whiteSpace: 'pre',
  padding: '0.5rem',
  borderRadius: '8px',
  color: 'inherit',
  textDecoration: 'none',
  gap: '1rem',
  transition: 'background-color 100ms',
});

// ホバー状態のスタイル
globalStyle(`${sidebarNavLink}:hover`, {
  background: '#e3e3e3',
});

// アクティブ状態のスタイル
globalStyle(`${sidebarNavLink}.active`, {
  background: '#e3e3e3',
  color: 'white',
});

// アニメーションのキーフレームを定義
const progress = keyframes({
  '0%': { background: '#e3e3e3' },
  '50%': { background: 'hsla(224, 98%, 58%, 0.5)' },
  '100%': { background: '#e3e3e3' },
});

// pending状態のスタイル
globalStyle(`${sidebarNavLink}.pending`, {
  animation: `${progress} 2s infinite ease-in-out`,
  animationDelay: '200ms',
});

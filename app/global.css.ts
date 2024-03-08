import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
  boxSizing: 'border-box',
});

globalStyle('*, *:before, *:after', {
  boxSizing: 'inherit',
});

globalStyle('body', {
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  display: 'flex',
  height: '100%',
  width: '100%',
  lineHeight: 1.5,
  color: '#121212',
  margin: 0,
});

globalStyle('code', {
  fontFamily: `source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace`,
});

globalStyle('html, body', {
  height: '100%',
  margin: 0,
  lineHeight: 1.5,
  color: '#121212',
});

globalStyle('textarea, input, button', {
  fontSize: '1rem',
  fontFamily: 'inherit',
  border: 'none',
  borderRadius: '8px',
  padding: '0.5rem 0.75rem',
  boxShadow: '0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2)',
  backgroundColor: 'white',
  lineHeight: 1.5,
  margin: 0,
});

globalStyle('button', {
  color: '#3992ff',
  fontWeight: 500,
});

// Continue defining global styles as needed following the above patterns

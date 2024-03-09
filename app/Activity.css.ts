import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'grid',
  // 横最大3列
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  maxWidth: '900px',
});

export const item = style({
  border: '1px solid #e3e3e3',
  borderRadius: '8px',
  margin: '0.5rem',
  backgroundColor: 'white',
});

export const image = style({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px 8px 0 0',
});

export const content = style({
  padding: '1rem',
});

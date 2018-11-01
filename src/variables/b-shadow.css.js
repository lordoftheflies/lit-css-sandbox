import { css } from 'lit-css';
import { addCustomStyle } from '../helpers/custom-style/b-custom-style.js';

const shadow = css`
  html {
    --shadow-default: 0 2px 3px var(--black-10), 0 0 0 1px var(--black-10);
  }
`;

addCustomStyle(shadow);

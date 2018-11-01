import { css } from 'lit-css';
import { addCustomStyle } from '../helpers/custom-style/b-custom-style.js';

const color = css`
  html {
    --black: #0a0a0a;
    --black-10: rgba(10, 10, 10, 0.1);
    --grey-dark: #4a4a4a;
    --grey-darker: #363636;
    --white: #fff;
    --text-color: var(--grey-dark);
    --text-strong: var(--grey-darker);
  }
`;

addCustomStyle(color);

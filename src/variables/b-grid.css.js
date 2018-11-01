import { css } from 'lit-css';
import { addCustomStyle } from '../helpers/custom-style/b-custom-style.js';


const grid = css`
  html {
    --column-gap: 0.75rem;
  }
`;

addCustomStyle(grid);

import { css } from 'lit-css';

export default css`
  :host {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: var(--b-column-gap, var(--column-gap));
  }
`;

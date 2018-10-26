import { css } from 'lit-css';

export default css`
  :host {
    display: block;
    margin-bottom: 1.5rem;
    padding: var(--b-box-padding, 1.25rem);
    background-color: var(--b-box-background-color, var(--white));
    color: var(--b-box-color, var(--text-color));
    border-radius: var(--b-box-radius, var(--radius-large));
    box-shadow: var(--b-box-shadow, var(--shadow-default));
  }

  :host(:last-child) {
    margin-bottom: 0;
  }

  :host([hidden]) {
    display: none !important;
  }
`;

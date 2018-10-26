import { css } from 'lit-css';

export default css`
  :host {
    display: block;
    max-width: 100%;
    position: relative;
    background-color: var(--b-card-background-color, var(--white));
    color: var(--b-card-color, var(--text-color));
    box-shadow: var(--b-card-shadow, var(--shadow-default));
  }

  .header {
    display: flex;
    align-items: stretch;
    background-color: var(--b-card-header-background-color, transparent);
    box-shadow: var(--b-card-header-shadow, 0 1px 2px var(--shadow-black));
  }

  .title {
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding: 0.75rem;
    font-weight: 700;
    color: var(--b-card-header-color, var(--text-strong));
  }

  .content {
    padding: 1.5rem;
    background-color: var(--b-card-content-background-color, transparent);
  }

  :host([hidden]) {
    display: none !important;
  }
`;

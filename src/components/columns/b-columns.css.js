import { css } from 'lit-css';

export default css`
  :host {
    margin-left: calc(-1 * var(--b-column-gap, var(--column-gap)));
    margin-right: calc(-1 * var(--b-column-gap, var(--column-gap)));
    margin-top:  calc(-1 * var(--b-column-gap, var(--column-gap)));
  }

  :host(:last-child) {
    margin-bottom: calc(-1 * var(--b-column-gap, 0.75rem));
  }

  :host(:not(:last-child)) {
    margin-bottom: calc(1.5rem - var(--b-column-gap, var(--column-gap)));
  }

  :host([is-centered]) {
    justify-content: center;
  }

  :host([is-gapless]) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }

  :host([is-gapless]) ::slotted(b-column) {
    margin: 0;
    padding: 0 !important;
  }

  :host([is-gapless]:not(:last-child)) {
    margin-bottom: 1.5rem;
  }

  :host([is-gapless]:last-child) {
    margin-bottom: 0;
  }

  :host([is-mobile]) {
    display: flex;
  }

  :host([is-multiline]) {
    flex-wrap: wrap;
  }

  :host([is-vcentered]) {
    align-items: center;
  }

  @media screen and (min-width: 769px), print {
    :host(:not([is-desktop])) {
      display: flex;
    }
  }

  @media screen and (min-width: 1088px) {
    :host([is-desktop]) {
      display: flex;
    }
  }
`;

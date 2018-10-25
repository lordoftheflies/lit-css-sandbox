import { css } from 'lit-css';

export default css`
  :host {
    display: block;
    /*
      @type size
      @name --b-box-padding
      @default 1.25rem
    */
    padding: var(--b-box-padding, 1.25rem);
    /*
      @type color
      @name --b-box-background-color
      @default --white
    */
    background-color: var(--b-box-background-color, var(--white));
    /*
      @type color
      @name --b-box-color
      @default --text-color
    */
    color: var(--b-box-color, var(--text-color));
    /*
      @type size
      @name --b-box-radius
      @default --radius-large
    */
    border-radius: var(--b-box-radius, var(--radius-large));
    /*
      @type size
      @name --b-box-shadow
      @default --shadow-default
    */
    box-shadow: var(--b-box-shadow, var(--shadow-default));
  }

  :host([hidden]) {
    display: none !important;
  }
`;


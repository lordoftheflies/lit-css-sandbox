import { css } from 'lit-css';

export default css`
  :host {
    display: block;
    max-width: 100%;
    position: relative;
    /*
      @type color
      @name --b-card-background-color
      @default var(--white)
    */
    background-color: var(--b-card-background-color, var(--white));
    /*
      @type color
      @name --b-card-color
      @default --text-color
    */
    color: var(--b-card-color, var(--text-color));
    /*
      @type size
      @name --b-card-shadow
      @default var(--shadow-default)
    */
    box-shadow: var(--b-card-shadow, var(--shadow-default));
  }

  .header {
    display: flex;
    align-items: stretch;
    /*
      @type color
      @name --b-card-header-background-color
      @default transparent
    */
    background-color: var(--b-card-header-background-color, transparent);
    /*
      @type size
      @name --b-card-header-shadow
      @default 0 1px 2px var(--shadow-black)
    */
    box-shadow: var(--b-card-header-shadow, 0 1px 2px var(--shadow-black));
  }

  .title {
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding: 0.75rem;
    font-weight: 700;
    /*
      @type color
      @name --b-card-header-color
      @default var(--text-strong)
    */
    color: var(--b-card-header-color, var(--text-strong));
  }

  .content {
    padding: 1.5rem;
    /*
      @type color
      @name --b-card-content-background-color
      @default transparent
    */
    background-color: var(--b-card-content-background-color, transparent);
  }

  :host([hidden]) {
    display: none !important;
  }
`;

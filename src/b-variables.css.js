import { css } from 'lit-css';

const colors = css`
  :host {
    --black: #0a0a0a;
    --grey-dark: #4a4a4a;
    --grey-darker: #363636;
    --white: #fff;
    --text-color: var(--grey-dark);
    --text-strong: var(--grey-darker);
  }
`;

const shadow = css`
  :host {
    --shadow-black: rgba(10, 10, 10, 0.1);
    --shadow-default: 0 2px 3px var(--shadow-black),
      0 0 0 1px var(--shadow-black);
  }
`;

const radius = css`
  :host {
    --radius-large: 6px;
  }
`;

export { colors, shadow, radius };

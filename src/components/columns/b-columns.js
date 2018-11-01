import { LitElement, html } from '@polymer/lit-element';
import { css } from 'lit-css';
import '../../variables/b-grid.css.js';
import columns from './b-columns.css.js';
import mobile from './b-columns-mobile.css.js';

class Columns extends LitElement {
  static get style() {
    return css`
      ${columns}
      ${mobile}
    `;
  }

  render() {
    return html`
      <style>
        ${this.constructor.style}
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('b-columns', Columns);

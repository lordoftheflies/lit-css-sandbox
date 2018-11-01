import { LitElement, html } from '@polymer/lit-element';
import { css } from 'lit-css';
import '../../variables/b-grid.css.js';
import column from './b-column.css.js';
import mobile from './b-column-mobile.css.js';
import tablet from './b-column-tablet.css.js';
import touch from './b-column-touch.css.js';
import desktop from './b-column-desktop.css.js';
import widescreen from './b-column-widescreen.css.js';

class Column extends LitElement {
  static get style() {
    return css`
      ${column}
      ${mobile}
      ${tablet}
      ${touch}
      ${desktop}
      ${widescreen}
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

customElements.define('b-column', Column);

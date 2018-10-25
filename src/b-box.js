import { LitElement, html } from '@polymer/lit-element';
import { css } from 'lit-css';
import boxStyle from './b-box-style.js';

class Box extends LitElement {
  static get style() {
    return css`
      ${boxStyle}
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

customElements.define('b-box', Box);

import { LitElement, html } from '@polymer/lit-element';
import { css } from 'lit-css';
import { colors, shadow, radius } from '../../variables/b-variables.css.js';
import boxCss from './b-box.css.js';

class Box extends LitElement {
  static get style() {
    return css`
      ${colors}
      ${shadow}
      ${radius}
      ${boxCss}
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

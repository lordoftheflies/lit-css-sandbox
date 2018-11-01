import '@webcomponents/shadycss/entrypoints/custom-style-interface.js';

const CustomStyleInterface = window.ShadyCSS.CustomStyleInterface;

class CustomStyle extends HTMLElement {
  constructor() {
    super();
    this._style = null;
    CustomStyleInterface.addCustomStyle(this);
  }
  getStyle() {
    if (!this._style) {
      this._style = this.querySelector('style');
    }
    return this._style;
  }
}

window.CustomStyle = CustomStyle;
window.customElements.define('b-custom-style', CustomStyle);

const addCustomStyle = css => {
  const customStyle = new CustomStyle();
  const style = document.createElement('style');
  style.textContent = css;
  customStyle.appendChild(style);
  document.head.appendChild(customStyle);
};

export { addCustomStyle };

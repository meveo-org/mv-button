import { LitElement, html, css } from "lit-element";
import "./mv-button.js";

export class MvButtonDemo extends LitElement {
  static get properties() {
    return {
      value: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
    `;
  }

  render() {
    return html`
    <mv-button>Test</mv-button>
    `;
  }
}

customElements.define("mv-button-demo", MvButtonDemo);

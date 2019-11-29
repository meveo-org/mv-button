import { LitElement, html, css } from "lit-element";
import "./mv-button.js";

export class MvButtonDemo extends LitElement {
  static get properties() {
    return {
      value: { type: Number, attribute: false, reflect: false }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      mv-button {
        --mv-button-padding: 10px 12px;
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;        
      }

      .label {
        font-size: 20px;
      }

      .value {
        font-size: 30px;
      }
    `;
  }

  constructor() {
    super();
    this.value = 0;
  }

  render() {
    return html`
    <div class="container">
      <mv-button
        @button-clicked="${this.changeValue(-1)}"
        ?disabled="${this.value < 1}"
      >
        <div class="label">-</div>
      </mv-button>
      <div class="value">Current value: ${this.value}</div>
      <mv-button @button-clicked="${this.changeValue(1)}">
        <div class="label">+</div>
      </mv-button>
    </div>
    `;
  }

  changeValue(increment) {
    return () => {
      this.value = this.value + increment;
    };
  }
}

customElements.define("mv-button-demo", MvButtonDemo);

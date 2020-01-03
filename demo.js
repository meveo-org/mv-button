import { LitElement, html, css } from "lit-element";
import "mv-container";
import "mv-fa";
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

      .click-demo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
      }

      .click-demo * {
        padding: 5px;
      }

      .click-demo-label {
        margin-top: 50px;
        margin-bottom: 0;
      }

      .small-button {
        --mv-button-min-width: 20px;
        --mv-button-padding: 10px;
      }

      .value {
        font-size: 20px;
      }
    `;
  }

  constructor() {
    super();
    this.value = 0;
  }

  render() {
    return html`
    <mv-container>
      <div>
        <h3>Button Types</h3>
        <h4>Default</h4>
        <mv-button>Success</mv-button>
        <mv-button button-style="error">Error</mv-button>
        <mv-button button-style="info">Info</mv-button>
        <mv-button button-style="cancel">Cancel</mv-button>

        <h4>Circle</h4>
        <mv-button type="circle"><mv-fa icon="plus"></mv-fa></mv-button>
        
        <h4>Rounded</h4>
        <mv-button type="rounded">Success</mv-button>
        <mv-button type="rounded" button-style="error">Error</mv-button>
        <mv-button type="rounded" button-style="info">Info</mv-button>
        <mv-button type="rounded" button-style="cancel">Cancel</mv-button>

        <h4>Outline</h4>
        <mv-button type="outline">Success</mv-button>
        <mv-button type="outline" button-style="error">Error</mv-button>
        <mv-button type="outline" button-style="info">Info</mv-button>
        <mv-button type="outline" button-style="cancel">Cancel</mv-button>
      </div>

      <h3 class="click-demo-label">Click event handling</h3>
      <div class="click-demo">
        <mv-button
          class="small-button"
          @button-clicked="${this.changeValue(-1)}"
          ?disabled="${this.value < 1}"
        >
          <mv-fa icon="minus"></mv-fa>
        </mv-button>
        <div class="value">Current value: ${this.value}</div>
        <mv-button
          class="small-button"
          @button-clicked="${this.changeValue(1)}"
        >
          <mv-fa icon="plus"></mv-fa>
        </mv-button>      
        <p>
          <mv-button
            class="small-button"
            @button-clicked="${this.resetValue}"
            button-style="error"
          ><mv-fa icon="undo"></mv-fa></mv-button>
        </p>
      </div>
    </mv-container>
    `;
  }

  changeValue = increment => {
    return () => {
      this.value = this.value + increment;
    };
  };

  resetValue = () => {
    this.value = 0;
  };
}

customElements.define("mv-button-demo", MvButtonDemo);

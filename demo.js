import { LitElement, html, css } from "lit-element";
import "mv-container";
import "mv-font-awesome";
import "./mv-button.js";

export class MvButtonDemo extends LitElement {
  static get properties() {
    return {
      value: { type: Number, attribute: false, reflect: false },
      open: { type: Boolean, attribute: true },
      theme: { type: String, attribute: true }
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
      
      mv-fa[icon="lightbulb"] {
        font-size: 50px;
        cursor: pointer;
        margin: 20px;
      }
      
      .theme {
        display: flex;
        justify-content: flex-start;
      }
    `;
  }

  constructor() {
    super();
    this.value = 0;
    this.open = true;
    this.theme = "light";
  }

  render() {
    return html`
    <div class="theme">
      <mv-fa icon="lightbulb" style="color: ${this.open ? "yellow" : ""}" @click=${this.toggleLightBulb}></mv-fa>
    </div>
    <mv-container>
      <div>
        <h3>Button Types</h3>
        <h4>Default</h4>
        <mv-button .theme="${this.theme}">Success</mv-button>
        <mv-button button-style="error" .theme="${this.theme}">Error</mv-button>
        <mv-button button-style="info" .theme="${this.theme}">Info</mv-button>
        <mv-button button-style="cancel" .theme="${this.theme}">Cancel</mv-button>

        <h4>Circle</h4>
        <mv-button type="circle" .theme="${this.theme}"><mv-fa icon="plus"></mv-fa></mv-button>
        
        <h4>Rounded</h4>
        <mv-button type="rounded" .theme="${this.theme}">Success</mv-button>
        <mv-button type="rounded" button-style="error" .theme="${this.theme}">Error</mv-button>
        <mv-button type="rounded" button-style="info" .theme="${this.theme}">Info</mv-button>
        <mv-button type="rounded" button-style="cancel" .theme="${this.theme}">Cancel</mv-button>

        <h4>Outline</h4>
        <mv-button type="outline" .theme="${this.theme}">Success</mv-button>
        <mv-button type="outline" button-style="error" .theme="${this.theme}">Error</mv-button>
        <mv-button type="outline" button-style="info" .theme="${this.theme}">Info</mv-button>
        <mv-button type="outline" button-style="cancel" .theme="${this.theme}">Cancel</mv-button>
      </div>

      <h3 class="click-demo-label">Click event handling</h3>
      <div class="click-demo">
        <mv-button
          class="small-button"
          @button-clicked="${this.changeValue(-1)}"
          ?disabled="${this.value < 1}"
          .theme="${this.theme}"
        >
          <mv-fa icon="minus"></mv-fa>
        </mv-button>
        <div class="value">Current value: ${this.value}</div>
        <mv-button
          class="small-button"
          @button-clicked="${this.changeValue(1)}"
          .theme="${this.theme}"
        >
          <mv-fa icon="plus"></mv-fa>
        </mv-button>      
        <p>
          <mv-button
            class="small-button"
            @button-clicked="${this.resetValue}"
            button-style="error"
            .theme="${this.theme}"
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

  toggleLightBulb = () => {
    this.open = !this.open;
    if (this.open) {
      this.theme = "light";
    } else {
      this.theme = "dark";
    }
  };
}

customElements.define("mv-button-demo", MvButtonDemo);

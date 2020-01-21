import { LitElement, html, css } from "lit-element";
import "mv-container";
import "mv-font-awesome";
import "./mv-button.js";

export class MvButtonDemo extends LitElement {
  static get properties() {
    return {
      value: { type: Number, attribute: false, reflect: false },
      hue: { type: Number, attribute: false, reflect: false },
      saturation: { type: Number, attribute: false, reflect: false },
      lightness: { type: Number, attribute: false, reflect: false }
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
      
      .slidecontainer {
        width: 100%;
      }
      
      .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
      }
      
      .slider:hover {
        opacity: 1;
      }
      
      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
      }
      
      .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
      }
    `;
  }

  constructor() {
    super();
    this.value = 0;
    this.hue = 153;
    this.saturation = 53;
    this.lightness = 56;
  }

  render() {
    const color =
        `--mv-button-background-color: hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%);
        --mv-button-hover-background-color: hsl(${this.hue}, ${this.saturation}%, ${this.lightness - 15}%);`;
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
      <h3>Customize the theme with HSL colors</h3>
      Hue: ${this.hue}
      <div class="slidecontainer">
        <input type="range" min="1" max="360" value="${this.hue}" class="slider" @input="${this.changeHue}">
      </div>
      Saturation: ${this.saturation}%
      <div class="slidecontainer">
        <input type="range" min="1" max="100" value="${this.saturation}" class="slider" @input="${this.changeSaturation}">
      </div>
      Lightness: ${this.lightness}%
      <div class="slidecontainer">
        <input type="range" min="1" max="100" value="${this.lightness}" class="slider" @input="${this.changeLightness}">
      </div>
      <mv-button style="${color}">Success</mv-button>
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

  changeHue = event => {
    this.hue = event.currentTarget.value;
  };

  changeSaturation = event => {
    this.saturation = event.currentTarget.value;
  };

  changeLightness = event => {
    this.lightness = event.currentTarget.value;
  };
}

customElements.define("mv-button-demo", MvButtonDemo);

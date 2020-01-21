import { LitElement, html, css } from "lit-element";

export class MvButton extends LitElement {
  static get properties() {
    return {
      visible: { type: Boolean, attribute: true },
      selected: { type: Boolean, attribute: true },
      disabled: { type: Boolean, attribute: true },

      //  valid type values are: "default", "circle", "rounded", or "outline"
      type: { type: String, attribute: true },

      //  valid button-style values are: "success", "error", "info", or "cancel"
      //  default: "success"
      "button-style": { type: String, attribute: true },

      //  TODO - not yet implemented
      //  valid fill values are: "solid", "transparent", "gradient"
      //  default: "solid"
      fill: { type: String, attribute: true }
    };
  }

  static get styles() {
    return css`
	  :host {
		font-family: var(--font-family, Arial);
	    --font-size: var(--font-size-m, 16px);
        --circle-button-size: var(--mv-button-circle-button-size, 55px);
        --button-margin: var(--mv-button-margin, 5px);
        --button-padding: var(--mv-button-padding, 10px 30px);
        --button-min-width: var(--mv-button-min-width, 120px);
        --rounded-radius: var(--mv-button-rounded-radius, 50px);
        --background-color: var(--mv-button-background-color, #54CA95);
        --hover-background-color: var(--mv-button-hover-background-color, #0CA361);
        --color: var(--mv-button-color, #FFFFFF);
        --circle-background-color: var(--mv-button-circle-background-color);
      }

      button {
        min-width: var(--button-min-width);
        font-size: var(--font-size);
        margin: var(--button-margin);
      }

      button:focus {
        outline: none;
      }

      button:hover:not([disabled]) {
        cursor: pointer;
      }

      button.circle {
        min-width: var(--circle-button-size);
        height: var(--circle-button-size);
        background-color: #EAEBF0;
        color: #80828C;
        border-radius: 50%;
        box-shadow: unset;
        border: none;
      }

      button.circle:hover:not([disabled]) {
        cursor: pointer;
        color: var(--circle-background-color, #1D9BC9);
        border: 1px solid var(--circle-background-color, #1D9BC9);
        background-color: #FFFFFF;
        box-shadow: inset 0px 0px 9px 0px rgba(29, 155, 201, 0.3);
      }

      button.circle.selected, button.circle.selected:disabled {
        color: #FFFFFF;
        background-color: var(--circle-background-color, #008FC3);
        box-shadow: 0px 0px 10px 0px rgba(0, 143, 195, 0.6);
        z-index: 100;
      }

      button.circle:disabled {
        background-color: #EAEBF0;
        color: #CACBD2;
        z-index: 100;
      }

      button.default {
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
      }

      button.default.success {
        color: var(--color);
        border-color: var(--background-color);
        background-color: var(--background-color);
      }

      button.default.success:hover:not([disabled]) {
        border-color: var(--hover-background-color);
        background-color: var(--hover-background-color);
      }

      button.default.error {
        color: #FFFFFF;
        border-color: #DD5C55;
        background-color: #DD5C55;
      }

      button.default.error:hover:not([disabled]) {
        border-color: #E71919;
        background-color: #E71919;
      }

      button.default.info {
        color: #FFFFFF;
        border-color: #3999C1;
        background-color: #3999C1;
      }

      button.default.info:hover:not([disabled]) {
        border-color: #007FAD;
        background-color: #007FAD;
      }

      button.default.cancel {
        color: #FFFFFF;
        border-color: #BBBFCE;
        background-color: #BBBFCE;
      }

      button.default.cancel:hover:not([disabled]) {
        border-color: #9297A6;
        background-color: #9297A6;
      }

      button.outline {
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
        background: transparent;
      }

      button.outline.success {
        color: #54CA95;
        border-color: #54CA95;
      }

      button.outline.success:hover:not([disabled]) {
        color: #FFFFFF;
        border-color: #0CA361;
        background-color: #0CA361;
      }

      button.outline.error {
        color: #DD5C55;
        border-color: #DD5C55;
      }

      button.outline.error:hover:not([disabled]) {
        color: #FFFFFF;
        border-color: #E71919;
        background-color: #E71919;
      }

      button.outline.info {
        color: #3999C1;
        border-color: #3999C1;
      }

      button.outline.info:hover:not([disabled]) {
        color: #FFFFFF;
        border-color: #007FAD;
        background-color: #007FAD;
      }

      button.outline.cancel {
        color: #BBBFCE;
        border-color: #BBBFCE;
      }

      button.outline.cancel:hover:not([disabled]) {
        color: #FFFFFF;
        border-color: #9297A6;
        background-color: #9297A6;
      }

      button.rounded {
        border-width: 1px;
        border-style: solid;
        border-radius: var(--rounded-radius);
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
        background: transparent;
      }

      button.rounded.success {
        color: #54CA95;
        border-color: #54CA95;
      }

      button.rounded.success:hover:not([disabled]) {
        color: #FFFFFF;
        border-color: #0CA361;
        background-color: #0CA361;
      }

      button.rounded.error {
        color: #DD5C55;
        border-color: #DD5C55;
      }

      button.rounded.error:hover:not([disabled]) {
        color: #FFFFFF;
        border-color: #E71919;
        background-color: #E71919;
      }

      button.rounded.info {
        color: #3999C1;
        border-color: #3999C1;
      }

      button.rounded.info:hover:not([disabled]) {
        color: #FFFFFF;
        border-color: #007FAD;
        background-color: #007FAD;
      }

      button.rounded.cancel {
        color: #BBBFCE;
        border-color: #BBBFCE;
      }

      button.rounded.cancel:hover:not([disabled]) {
        color: #FFFFFF;
        border-color: #9297A6;
        background-color: #9297A6;
      }

		`;
  }

  constructor() {
    super();
    this.visible = true;
    this.selected = false;
    this.disabled = false;
    this.type = "default";
    this["button-style"] = "success";
  }

  render() {
    const buttonStyle = this.type !== "round" ? ` ${this["button-style"]}` : "";
    const selectedClass = this.selected ? " selected" : "";
    const buttonClass = `${this.type}${buttonStyle}${selectedClass}`;
    return !!this.visible
      ? html`
          <button
            class="${buttonClass}"
            @click="${this.handleClick}"
            ?disabled="${this.disabled}"
          >
            <slot> </slot>
          </button>
        `
      : html``;
  }

  handleClick = event => {
    event && event.stopImmediatePropagation();
    this.dispatchEvent(new CustomEvent("button-clicked"));
  };
}

customElements.define("mv-button", MvButton);

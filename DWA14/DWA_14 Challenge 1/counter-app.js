import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class CounterApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 20px;
    }

    button {
      padding: 8px 16px;
      font-size: 16px;
      cursor: pointer;
    }

    #counter {
      font-size: 24px;
      margin-bottom: 20px;
    }

    .disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    .min-reached::before {
      content: "Minimum Reached";
      display: block;
      color: red; /* Example styling for minimum reached state */
    }

    .max-reached::before {
      content: "Maximum Reached";
      display: block;
      color: blue; /* Example styling for maximum reached state */
    }
  `;

  static properties = {
    number: { type: Number },
    minNumber: { type: Number },
    maxNumber: { type: Number },
  };

  constructor() {
    super();
    this.number = 0;
    this.minNumber = -10;
    this.maxNumber = 10;
  }

  subtract() {
    if (this.number > this.minNumber) {
      this.number -= 1;
      this.requestUpdate();
    }
    this.checkLimits();
  }

  add() {
    if (this.number < this.maxNumber) {
      this.number += 1;
      this.requestUpdate();
    }
    this.checkLimits();
  }

  reset() {
    this.number = 0;
    this.requestUpdate();
    this.checkLimits();
    alert('The counter has been reset.');
  }

  checkLimits() {
    const subtractButton = this.shadowRoot.getElementById('subtract');
    const addButton = this.shadowRoot.getElementById('add');
    const counter = this.shadowRoot.getElementById('counter');

    if (this.number === this.minNumber) {
      subtractButton.classList.add('disabled');
      counter.classList.remove('max-reached');
      counter.classList.add('min-reached');
    } else {
      subtractButton.classList.remove('disabled');
      counter.classList.remove('min-reached');
    }

    if (this.number === this.maxNumber) {
      addButton.classList.add('disabled');
      counter.classList.remove('min-reached');
      counter.classList.add('max-reached');
    } else {
      addButton.classList.remove('disabled');
      counter.classList.remove('max-reached');
    }

    if (this.number !== this.minNumber && this.number !== this.maxNumber) {
      counter.classList.remove('min-reached');
      counter.classList.remove('max-reached');
    }
  }

  render() {
    return html`
      <div id="counter">${this.number}</div>
      <button id="subtract" @click=${this.subtract} class="button">Subtract</button>
      <button id="add" @click=${this.add} class="button">Add</button>
      <button id="reset" @click=${this.reset} class="button">Reset</button>
    `;
  }
}

customElements.define('counter-app', CounterApp);

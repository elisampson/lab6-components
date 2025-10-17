import { getBotResponse } from "../eliza.js";

class SimpleChat extends HTMLElement {
  constructor() {
    super();
  }

  // Select internal elements
  connectedCallback() {
    this.messages = this.querySelector(".messages");
    this.form = this.querySelector("form");
    this.input = this.querySelector("input");

    this.setupEventListeners();
  }

  // Handle form submission (prevents page reload)
  setupEventListeners() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const text = this.input.value.trim();
      if (!text) return;

      this.addMessage(text, "user");
      this.input.value = "";

      const reply = getBotResponse(text);
      setTimeout(() => this.addMessage(reply, "bot"), 400);
    });
  }

  addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.className = `message ${sender}`;
    msg.textContent = text;
    this.messages.appendChild(msg);
    this.messages.scrollTop = this.messages.scrollHeight;
  }
}

customElements.define("simple-chat", SimpleChat);

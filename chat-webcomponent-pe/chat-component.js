import { getBotResponse } from "../eliza.js";

class SimpleChat extends HTMLElement {
  connectedCallback() {
    this.chatWindow = this.querySelector("#chatWindow");
    this.form = this.querySelector("#chatForm");
    this.input = this.querySelector("#messageBox");
    this.sendBtn = this.querySelector("#sendBtn");
    this.setupListeners();
  }

  // --- Events ---
  setupListeners() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSend();
    });

    this.sendBtn.addEventListener("click", () => this.handleSend());

    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.handleSend();
      }
    });
  }

  // --- Send + Bot reply ---
  handleSend() {
    const message = this.input.value.trim();
    if (!message) return;

    this.addMessage(message, "User");
    this.input.value = "";

    const reply = getBotResponse(message);
    setTimeout(() => this.addMessage(reply, "Bot"), 400);
  }

  // --- Add message to chat ---
  addMessage(text, speaker) {
    const msg = document.createElement("p");
    msg.className = speaker;
    msg.textContent = text; 
    this.chatWindow.appendChild(msg);
    this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
  }
}

customElements.define("simple-chat", SimpleChat);

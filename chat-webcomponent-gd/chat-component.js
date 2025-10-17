import { getBotResponse } from "../eliza.js";

class ChatInterface extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --bot-bg: #eeeeee;
          --user-bg: #4a90e2;
          --main-bg: #ffffff;
          --chat-bg: #f9f9f9;
          --header-bg: #4a90e2;
          --text-light: #ffffff;
          --text-dark: #222222;
          position: fixed;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(160deg, #6a5acd, #836fff, #9370db);
          font-family: "Segoe UI", Arial, sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .chat-container {
          display: flex;
          flex-direction: column;
          width: 420px;
          height: 620px;
          background: var(--main-bg);
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }

        header {
          background: var(--header-bg);
          color: var(--text-light);
          padding: 1rem;
          text-align: center;
        }

        .messages {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: var(--chat-bg);
        }

        .message {
          max-width: 75%;
          padding: 0.6rem 0.9rem;
          border-radius: 14px;
          line-height: 1.4;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .bot {
          align-self: flex-start;
          background: var(--bot-bg);
          color: var(--text-dark);
        }

        .user {
          align-self: flex-end;
          background: var(--user-bg);
          color: var(--text-light);
        }

        form {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem;
          background: #f6f6f6;
          border-top: 1px solid #ddd;
        }

        input[type="text"] {
          flex: 1;
          padding: 0.7rem;
          border-radius: 20px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }

        button {
          background: var(--user-bg);
          color: white;
          border: none;
          border-radius: 20px;
          padding: 0.7rem 1.4rem;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.2s ease;
        }

        button:hover {
          background: #357ab8;
        }
      </style>

      <div class="chat-container">
        <header><h1>Eliza Chat</h1></header>
        <div class="messages">
          <div class="message bot">Hello! How can I help you?</div>
        </div>
        <form>
          <input type="text" placeholder="Type a message..." />
          <button type="submit">Send</button>
        </form>
      </div>
    `;

    // Select internal elements
    this.messages = this.shadowRoot.querySelector(".messages");
    this.form = this.shadowRoot.querySelector("form");
    this.input = this.shadowRoot.querySelector("input");
    this.setupListeners();
  }

  setupListeners() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSend();
    });
  }

  handleSend() {
    const text = this.input.value.trim();
    if (!text) return;
    this.addMessage(text, "user");
    this.input.value = "";
    const reply = getBotResponse(text);
    setTimeout(() => this.addMessage(reply, "bot"), 400);
  }

  addMessage(text, type) {
    const msg = document.createElement("div");
    msg.className = `message ${type}`;
    msg.textContent = text;
    this.messages.appendChild(msg);
    this.messages.scrollTop = this.messages.scrollHeight;
  }
}

customElements.define("chat-interface", ChatInterface);

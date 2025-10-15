import { getBotResponse } from '../eliza.js';

class Chat extends HTMLElement {
  connectedCallback() {

    this.messages = this.querySelector('.messages');
    this.form = this.querySelector('form');
    this.input = this.querySelector('input');

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const userText = this.input.value.trim();
      if (userText === "") return;

      this.addMessage(userText, 'user');

      const botReply = getBotResponse(userText);
      this.addMessage(botReply, 'bot');

      this.input.value = "";
    });
  }

  addMessage(text, sender) {
    const div = document.createElement('div');
    div.classList.add('message', sender);
    div.textContent = text;

    this.messages.appendChild(div);
    this.messages.scrollTop = this.messages.scrollHeight;
  }
}

customElements.define('simple-chat', Chat);

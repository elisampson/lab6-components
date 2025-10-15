import { getBotResponse } from './eliza.js';

const chatHistory = document.getElementById('chat-history');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

/**
 * Add a message to the chat window
 * @param {string} text - The message text
 * @param {"user"|"bot"} sender - Who sent the message
 */

function addMessage(text, sender) {
  const message = document.createElement('article');
  message.classList.add('message', sender);

  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  message.appendChild(paragraph);

  const time = document.createElement('time');
  const now = new Date();
  time.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  message.appendChild(time);

  chatHistory.appendChild(message);
  chatHistory.scrollTop = chatHistory.scrollHeight; 
}


function handleSubmit(event) {
  event.preventDefault();
  const userText = userInput.value.trim();
  if (userText === '') return;

  addMessage(userText, 'user');

  const botResponse = getBotResponse(userText);
  setTimeout(() => addMessage(botResponse, 'bot'), 400); 

  userInput.value = '';
}

chatForm.addEventListener('submit', handleSubmit);

userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    handleSubmit(event);
  }
});

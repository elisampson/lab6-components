import { getBotResponse } from "../eliza.js";

const chatWindow = document.getElementById("chatWindow");
const form = document.getElementById("chatForm");
const input = document.getElementById("messageBox");

// Add a message to the chat window
function addToChatWindow(message, speaker) {
  const p = document.createElement("p");
  p.className = speaker;
  p.textContent = message;
  chatWindow.appendChild(p);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Handle sending the user's message and bot reply
function send() {
  const message = input.value.trim();
  if (!message) return;

  addToChatWindow(message, "User");
  input.value = "";
  input.focus();

  const response = getBotResponse(message);
  setTimeout(() => addToChatWindow(response, "Bot"), 400);
}

// Initialize event listeners
function init() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    send();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      send();
    }
  });
}

window.addEventListener("DOMContentLoaded", init);

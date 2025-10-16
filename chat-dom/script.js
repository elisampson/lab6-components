import { getBotResponse } from "../eliza.js";

const chatWindow = document.getElementById("chatWindow");
const form = document.getElementById("chatForm");
const input = document.getElementById("messageBox");
const sendBtn = document.getElementById("sendBtn");

// --- Add message bubbles ---
function addToChatWindow(message, speaker) {
  const p = document.createElement("p");
  p.className = speaker;
  p.textContent = message;
  chatWindow.appendChild(p);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// --- Send + bot reply ---
function send() {
  const message = input.value.trim();
  if (!message) return;

  addToChatWindow(message, "User");
  input.value = "";
  input.focus();

  const response = getBotResponse(message);
  setTimeout(() => addToChatWindow(response, "Bot"), 400);
}

// --- Event listeners ---
function init() {
  sendBtn.addEventListener("click", send);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      send();
    }
  });
}

window.addEventListener("DOMContentLoaded", init);

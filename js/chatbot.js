/* ================================
   TOGGLE CHATBOT (OPEN / CLOSE)
   ================================ */
function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");

  if (!chatbot) {
    console.log("Chatbot element not found");
    return;
  }

  if (chatbot.style.display === "block") {
    chatbot.style.display = "none";
  } else {
    chatbot.style.display = "block";
  }
}

/* ================================
   SEND MESSAGE FUNCTION
   ================================ */
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");

  if (!input || !chatbox) {
    console.log("Chatbot input or chatbox not found");
    return;
  }

  if (input.value.trim() === "") return;

  const userText = input.value.toLowerCase();
  let botReply = "Please contact us via WhatsApp for more details.";

  /* ===== KEYWORD BASED RESPONSES ===== */
  if (userText.includes("class")) {
    botReply = "We offer Theory, Revision, and Paper classes for A/L Accounting.";
  }

  if (userText.includes("timetable")) {
    botReply = "The timetable is available inside the app.";
  }

  if (userText.includes("register") || userText.includes("join")) {
    botReply = "Click the Register Now button and fill the Google Form.";
  }

  if (userText.includes("login")) {
    botReply = "Registered students can log in using the username and password provided by admin.";
  }

  if (userText.includes("contact")) {
    botReply = "Contact details are available in the Contact Us section.";
  }

  /* ===== SHOW MESSAGES ===== */
  chatbox.innerHTML += `
    <p><strong>You:</strong> ${input.value}</p>
    <p><strong>Bot:</strong> ${botReply}</p>
  `;

  chatbox.scrollTop = chatbox.scrollHeight;
  input.value = "";
}

/* ================================
   SEND MESSAGE WITH ENTER KEY
   ================================ */
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("userInput");

  if (input) {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }
});

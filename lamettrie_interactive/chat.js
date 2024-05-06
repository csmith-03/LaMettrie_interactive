// Hardcoded responses
const responses = {
    "Hello!": "Hello! I am Julien Offray de La Mettrie. How can I assist you today?",
    "What is your philosophy?": "I advocate for materialism and believe that humans are complex machines.",
    "Tell me about man a machine.": "Man a Machine argues that humans and animals are complex machines, and there is no divine spiritual essence.",
    "How did you die?" : "I unfortunately passed away in 1751 while still in Prussia, and Frederick the Great delivered my eulogy."
};

function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() === '') return; // Ignore empty input

    displayMessage(userInput, "userMessage");
    document.getElementById("userInput").value = ""; // Reset input

    // Get bot response based on user input
    var botResponse = responses[userInput] || "I'm sorry, I don't have an answer to that question. Can you try asking something else?";
    displayMessage(botResponse, "botMessage");
}

function displayMessage(text, className) {
    var message = document.createElement("p");
    message.className = className;
    message.innerText = text;
    var chatbox = document.getElementById("chatbox");
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the latest message
}

function setInput(question) {
    document.getElementById('userInput').value = question;
    sendMessage();  // Optionally trigger sendMessage to send the question immediately
}

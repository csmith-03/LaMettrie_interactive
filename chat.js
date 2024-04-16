function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() === '') return; // Ignore empty input

    displayMessage(userInput, "userMessage");
    document.getElementById("userInput").value = ""; // Reset input

    fetch('http://localhost:3000/getresponse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({input: userInput})
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Server responded with a non-200 status: ' + response.status);
        }
    })
    .then(data => {
        displayMessage(data.message, "botMessage");
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage("Sorry, I can't respond at the moment. Please try again later.", "botMessage");
    });
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

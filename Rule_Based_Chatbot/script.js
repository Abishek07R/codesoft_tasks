const chatbox = document.getElementById("chatbox");

function sendMessage() {

    let input = document.getElementById("userInput");

    let message = input.value.trim();

    if (message === "") return;

    addMessage(message, "user-message");

    let reply = getBotResponse(message.toLowerCase());

    setTimeout(() => {
        addMessage(reply, "bot-message");
    }, 500);

    input.value = "";
}

function addMessage(text, className) {

    let div = document.createElement("div");

    div.className = className;

    div.innerText = text;

    chatbox.appendChild(div);

    chatbox.scrollTop = chatbox.scrollHeight;
}

function handleKey(event) {

    if (event.key === "Enter")
        sendMessage();
}

function getBotResponse(msg) {

    if (msg.includes("hello") || msg.includes("hi"))
        return "Hello! 👋 How can I help you?";

    else if (msg.includes("how are you"))
        return "I'm doing great 😊";

    else if (msg.includes("name"))
        return "My name is RuleBot.";

    else if (msg.includes("time"))
        return "Current Time: " + new Date().toLocaleTimeString();

    else if (msg.includes("date"))
        return "Today's Date: " + new Date().toLocaleDateString();

    else if (msg.includes("thanks"))
        return "You're Welcome ❤️";

    else if (msg.includes("bye"))
        return "Goodbye 👋 Have a Nice Day.";

    else if (msg.includes("college"))
        return "I can help with your college questions.";

    else if (msg.includes("python"))
        return "Python is a powerful programming language.";

    else
        return "Sorry 😔 I don't understand. Please try another question.";
}
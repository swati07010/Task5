let chartSize = { width: 600, height: 400 };
document
  .getElementById("toggleButton")
  .addEventListener("click", toggleChartSize);
function toggleChartSize() {
  const chartContainer = document.getElementById("chartContainer");
  if (chartSize.width === 600 && chartSize.height === 400) {
    // Decrease size
    chartContainer.style.width = "400px";
    chartContainer.style.height = "300px";
    chartSize = { width: 400, height: 300 };
  } else {
    // Increase size
    chartContainer.style.width = "600px";
    chartContainer.style.height = "400px";
    chartSize = { width: 600, height: 400 };
  }
}

function displayCurrentTime() {
  const currentTimeContainer = document.getElementById("current-time");
  if (currentTimeContainer) {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-IN", {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
    });
    let time = formattedTime.toUpperCase();
    currentTimeContainer.textContent = `${time}`;
  }
}
displayCurrentTime();

setInterval(displayCurrentTime, 1000);

function toggleChatBox() {
  var chatBox = document.getElementById("chatBox");
  if (chatBox.style.display === "none" || chatBox.style.display === "") {
    chatBox.style.display = "block";
  } else {
    chatBox.style.display = "none";
  }
}

function sendMessage() {
  const userInput = document.getElementById("userInput").value.trim();

  if (userInput !== "") {
    displayMessage(userInput, "user");

    const botResponse = getBotResponse(userInput);

    setTimeout(() => {
      displayMessage(botResponse, "bot");
    }, 1000);

    document.getElementById("userInput").value = "";
  }
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    sendMessage();
  }
}
document
  .getElementById("userInput")
  .addEventListener("keypress", handleKeyPress);

function displayMessage(message, sender) {
  const chatBox = document.getElementById("chatBox");

  const messageElement = document.createElement("div");
  messageElement.className = `chat-message ${sender}-message`;
  messageElement.innerHTML = `<span class="message-content">${message}</span>`;

  chatBox.appendChild(messageElement);

  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  let botResponse;

  switch (input.toLowerCase()) {
    case "i need help":
      botResponse = "How can I assist you?";
      break;
    case "credit card":
      botResponse =
        "Please email us at infoneedcreditcard@bank.com for assistance with credit cards.";
      break;
    case "address":
      botResponse = "Our office address is 72/10, Ville Parle, Mumbai, India.";
      break;
    case "hello":
      botResponse = "Hi! How can I help you?";
      break;
    case "goodbye":
      botResponse = "Goodbye! Have a great day!";
      break;
    case "services":
      botResponse =
        "We offer a range of services including banking, loans, investments, and more.";
      break;
    case "hours":
      botResponse =
        "Our business hours are from 9:00 AM to 5:00 PM, Monday to Friday.";
      break;
    case "contact":
      botResponse =
        "You can reach us at +91-1234567890 or email us at info@bank.com.";
      break;
    case "website":
      botResponse = "Visit our website at www.bank.com for more information.";
      break;
    case "net banking":
      botResponse = "You can access net banking services through our website.";
      break;
    case "banking":
      botResponse = "You can access net banking services through our website.";
      break;
    case "banking":
      botResponse = "You can access net banking services through our website.";
      break;
    case "loan application":
      botResponse =
        "To apply for a loan, please visit our nearest branch or apply online on our website.";
      break;
    case "loan":
      botResponse =
        "To apply for a loan, please visit our nearest branch or apply online on our website.";
      break;
    case "application":
      botResponse =
        "To apply for a loan, please visit our nearest branch or apply online on our website.";
      break;
    case "investment options":
      botResponse =
        "We offer various investment options including mutual funds, fixed deposits, and more. Visit our website for details.";
      break;
    case "investment":
      botResponse =
        "We offer various investment options including mutual funds, fixed deposits, and more. Visit our website for details.";
      break;
    case "options":
      botResponse =
        "We offer various investment options including mutual funds, fixed deposits, and more. Visit our website for details.";
      break;
    case "balance inquiry":
      botResponse =
        "You can check your account balance through our mobile app or by visiting an ATM.";
      break;
    case "balance":
      botResponse =
        "You can check your account balance through our mobile app or by visiting an ATM.";
      break;
    case "inquiry":
      botResponse =
        "You can check your account balance through our mobile app or by visiting an ATM.";
      break;

    case "mortgage":
      botResponse =
        "For mortgage inquiries, please contact our mortgage department at mortgageteam@bank.com.";
      break;
    default:
      botResponse =
        "I'm sorry, I didn't quite catch that. Could you please ask something else?";
      break;
  }

  return botResponse;
}

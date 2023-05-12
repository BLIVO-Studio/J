import { getDatabase, ref, push, onChildAdded } from "firebase/database";

const database = getDatabase();
const messagesRef = ref(database, "messages");

const messageForm = document.getElementById("message-form");
messageForm.addEventListener("submit", sendMessage);

function sendMessage(event) {
  event.preventDefault();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;
  if (message) {
    // push a new node onto the messages list with the message value
    push(messagesRef, message);
    // clear the input field
    messageInput.value = "";
  }
}

const messageList = document.getElementById("message-list");

onChildAdded(messagesRef, (snapshot) => {
  // get the message value from the snapshot
  const message = snapshot.val();
  // create a new list item element with the message value
  const li = document.createElement("li");
  li.textContent = message;
  // append the list item to the message list
  messageList.appendChild(li);
});

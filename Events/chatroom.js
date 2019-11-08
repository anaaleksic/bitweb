function send() {
  var element = document.createElement("p");
  var message = document.getElementById("input").value;
  var chat = document.getElementById("chatbar");

  element.textContent = message;
  chat.appendChild(element);
  var message = message.removeAttribute("input").value;
}

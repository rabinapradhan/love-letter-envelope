const envelope = document.getElementById("envelope");
let heartCreated = false;
envelope.addEventListener("click", function () {
  this.classList.toggle("open");
  if (!heartCreated) {
    createHearts();
    heartCreated = true;
  } else {
    removeHearts();
    heartCreated = false;
  }

  const messageDiv = document.getElementById("message");
  if (!messageDiv) {
    // Create message div
    const message = document.createElement("div");
    message.id = "message";
    message.classList.add("message");
    message.innerHTML = `
      <h2>I Love You!</h2>
      <p>You're my sunshine on a rainy day.</p>
    `;

    const envelopeBody = document.getElementById("envelope-body");
    envelopeBody.appendChild(message);
  } else {
    messageDiv.remove();
  }
});
function createHearts() {
  const body = document.body;
  const heart = document.createElement("div");
  heart.classList.add("heart");
  body.appendChild(heart);
  // Add event listener for animation end
  heart.addEventListener("animationend", function () {
    heart.remove(); // Remove the heart element after animation ends
  });
}

function removeHearts() {
  const heart = document.querySelector(".heart");
  if (heart) {
    heart.remove();
  }
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

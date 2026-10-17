const form = document.querySelector("#studentForm");
const studentIdInput = document.querySelector("#studentId");
const errorMessage = document.querySelector("#studentIdError");
const loginScreen = document.querySelector("#loginScreen");
const welcomeScreen = document.querySelector("#welcomeScreen");
const displayStudentId = document.querySelector("#displayStudentId");
const studentCardImage = document.querySelector("#studentCardImage");
const unknownIdMessage = document.querySelector("#unknownIdMessage");
const backButton = document.querySelector("#backButton");

const studentCards = {
  "62031196": "62031196.jpg",
  "62031197": "62031197.png",
  "62031198": "62031198.png",
  "63016979": "63016979.jpg",
  "63041001": "63041001.png",
  "63041541": "63041541.png",
};

function showError() {
  studentIdInput.setAttribute("aria-invalid", "true");
  errorMessage.hidden = false;
  studentIdInput.focus();
}

function clearError() {
  studentIdInput.removeAttribute("aria-invalid");
  errorMessage.hidden = true;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const studentId = studentIdInput.value.trim();

  if (!studentId) {
    showError();
    return;
  }

  clearError();
  displayStudentId.textContent = studentId;
  const cardImagePath = studentCards[studentId];
  studentCardImage.src = cardImagePath || "";
  studentCardImage.hidden = !cardImagePath;
  unknownIdMessage.hidden = Boolean(cardImagePath);
  loginScreen.hidden = true;
  welcomeScreen.hidden = false;
  welcomeScreen.querySelector("h1").focus();
});

studentIdInput.addEventListener("input", clearError);

backButton.addEventListener("click", () => {
  welcomeScreen.hidden = true;
  loginScreen.hidden = false;
  studentIdInput.focus();
});

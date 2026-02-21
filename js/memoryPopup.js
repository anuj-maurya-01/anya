const questions = [
  { q: "Where did we go on our first date? 💕", a: "Jyoti" },
  { q: "Which month did we first talk? 🌸", a: "December" },
  { q: "What do I call you the most? 😌", a: "Madam jii" },
  { q: "Which cafe we love to go? ❤️", a: "Malta" }
  { q: "On which date it all started(dd/mm/yyyy)? ❤️", a: "25/12/2022" }
  { q: "On which date we became couples(dd/mm/yyyy)? ❤️", a: "21/11/2023" }
  { q: "Who confessed the love first? ❤️", a: "Riya" }
  { q: "On which mela we also became part of history? ❤️", a: "Kumbh Mela" }
];

let currentQ = null;

function createPopup() {
  const popup = document.createElement("div");
  popup.id = "memoryPopup";
  popup.innerHTML = `
    <div class="popup-card">
      <h3 id="question"></h3>
      <input type="text" id="answer" placeholder="Your answer..." />
      <button id="submitAnswer">Submit</button>
      <p class="popup-msg" id="popupMsg"></p>
    </div>
  `;
  document.body.appendChild(popup);

  document.getElementById("submitAnswer").onclick = checkAnswer;
}

function showPopup() {
  currentQ = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").innerText = currentQ.q;
  document.getElementById("answer").value = "";
  document.getElementById("popupMsg").innerText = "";
  document.getElementById("memoryPopup").style.display = "flex";
}

function checkAnswer() {
  const ans = document.getElementById("answer").value.trim().toLowerCase();
  const msg = document.getElementById("popupMsg");

  if (ans === currentQ.a) {
    msg.style.color = "green";
    msg.innerText = "Correct 💖 You remember us!";
    setTimeout(() => {
      document.getElementById("memoryPopup").style.display = "none";
    }, 1200);
  } else {
    msg.style.color = "red";
    msg.innerText = "Oops 😅 Try again!";
  }
}

window.addEventListener("load", () => {
  createPopup();
  setTimeout(showPopup, Math.random() * 8000 + 5000);
});

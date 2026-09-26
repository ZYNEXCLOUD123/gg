const gate = document.getElementById("gate");
const page = document.getElementById("profile");
const audio = document.getElementById("audio");
const enterBtn = document.getElementById("enterBtn");
const soundBtn = document.getElementById("soundBtn");
const playBtn = document.getElementById("playBtn");
const video = document.getElementById("bgVideo");

let playing = false;

async function startExperience() {
  gate.classList.add("hide");
  page.classList.remove("hidden");
  video.play().catch(() => {});
  try {
    await audio.play();
    playing = true;
    playBtn.textContent = "Ⅱ";
  } catch {
    playing = false;
    playBtn.textContent = "▶";
  }
}
enterBtn.addEventListener("click", startExperience);
gate.addEventListener("click", e => {
  if (e.target === gate) startExperience();
});

async function toggleAudio() {
  if (audio.paused) {
    await audio.play();
    playing = true;
    playBtn.textContent = "Ⅱ";
  } else {
    audio.pause();
    playing = false;
    playBtn.textContent = "▶";
  }
}
soundBtn.addEventListener("click", toggleAudio);
playBtn.addEventListener("click", toggleAudio);

document.addEventListener("keydown", e => {
  if (e.code === "Space") {
    e.preventDefault();
    if (gate.classList.contains("hide")) toggleAudio();
    else startExperience();
  }
});

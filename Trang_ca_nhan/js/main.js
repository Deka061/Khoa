let music;
let btn;
let playing = false;

document.addEventListener("DOMContentLoaded", () => {

    music = document.getElementById("bgm");
    btn = document.querySelector(".music-btn");

    // TẮT LOADING
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.querySelector(".card").classList.remove("hidden");
    }, 1200);
});

// DARK MODE
function toggleMode(){
    document.body.classList.toggle("dark");

    const modeBtn = document.querySelector(".mode-btn");
    modeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

// MUSIC (AN TOÀN MOBILE)
function toggleMusic(){
    if (!music || !btn) return;

    if (playing) {
        music.pause();
        btn.classList.remove("playing");
        playing = false;
    } else {
        music.volume = 0.5;
        music.play().then(() => {
            btn.classList.add("playing");
            playing = true;
        }).catch(() => {
            alert("👉 Hãy chạm lại để bật nhạc");
        });
    }
}

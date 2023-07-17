const music = document.querySelector("#Music");
const img = document.getElementById("imagen");
const play = document.getElementById("play");

let isPlaying = false;

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.style.backgroundImage = "url(stop.svg)";
    img.style.animationPlayState="running";
};

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.style.backgroundImage = "url(play.svg)";
    img.style.animationPlayState="paused";
};

play.addEventListener("click", () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});

document.addEventListener("keydown", keyPressed);

function keyPressed(event) {
  const keyUsed = event.key;
  if (keyUsed === " ") {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }
}









const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const title = document.getElementById("title");

const songs = [
  { name: "Simple", file: "songs/track1.mp3" },
  { name: "Rock", file: "songs/track2.mp3" },
  { name: "Melody", file: "songs/track3.mp3" }
];

let songIndex = 0;

function loadSong(index) {
  const song = songs[index];
  audio.src = song.file;
  title.textContent = song.name;
}

function playPause() {
  if (!audio.src || audio.src === window.location.href) {
    loadSong(songIndex);
    audio.play();
  } else if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function stopSong() {
  audio.pause();
  audio.currentTime = 0;
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  audio.play();
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  audio.play();
}

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.value = percent;
  }
});

function setProgress(value) {
  audio.currentTime = (value / 100) * audio.duration;
}

function setVolume(value) {
  audio.volume = value;
}

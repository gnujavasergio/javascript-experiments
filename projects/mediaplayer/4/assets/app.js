import MediaPlayer from "./media-player.js";
import AutoPlayer from "../plugins/auto-player.js";

const video = document.querySelector('video');
const player = new MediaPlayer({el: video, plugins: [new AutoPlayer()]});

const btnPlayAndPause = document.getElementById('btnPlayAndPause');
btnPlayAndPause.onclick = () => player.togglePlay();

const btnMute = document.getElementById('bntMute');
btnMute.onclick = () => player.toogleMute();
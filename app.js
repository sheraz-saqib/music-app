// get sound reference==========//
const sound_img = document.querySelector(".img-area img"),
 imgArea = document.querySelector(".img-area "),
  soung_text = document.querySelector(".soung-text p"),
  play_li = document.querySelector(".play_li"),
  currentTime = document.querySelector(".currentTime"),
  totalTime = document.querySelector(".totalTime"),
  gif = document.querySelector(".gif"),
  song_bar = document.querySelector("#song_bar");
//============================//
// get Icon==================//
const likeIcon = document.querySelector(".bx-heart"),
  previous = document.querySelector(".bx-skip-previous"),
  next = document.querySelector(".bx-skip-next"),
  play = document.querySelector(".bx-play"),
  pauseSong = document.querySelector(".bx-pause"),
  bookMark = document.querySelector(".bx-bookmark");
//============================//
// songs collection===========//

const animation = ()=>{
  setTimeout(() => {
    imgArea.classList.remove('skeleon')
    sound_img.style.zIndex = 999
  }, 2000);
  imgArea.classList.add('skeleon')
  sound_img.style.zIndex = -1

}
const songsCollection = [
  {
    sondName: "jana e safer",
    songPath: new Audio("./song/1.mp3"),
    songCover: "./covers/1.jpg",
  },
  {
    sondName: "sad song",
    songPath: new Audio("./song/2.mp3"),
    songCover: "./covers/2.jpg",
  },
  {
    sondName: "echo song",
    songPath: new Audio("./song/3.mp3"),
    songCover: "./covers/3.jpg",
  },
  {
    sondName: "text transform",
    songPath: new Audio("./song/4.mp3"),
    songCover: "./covers/4.jpg",
  },
  {
    sondName: "life is dead",
    songPath: new Audio("./song/5.mp3"),
    songCover: "./covers/5.jpg",
  },
  {
    sondName: "story of dead body",
    songPath: new Audio("./song/6.mp3"),
    songCover: "./covers/6.jpg",
  },
  {
    sondName: "legend never die",
    songPath: new Audio("./song/7.mp3"),
    songCover: "./covers/7.jpg",
  },
  {
    sondName: "ncs song",
    songPath: new Audio("./song/8.mp3"),
    songCover: "./covers/8.jpg",
  },
];
let getSound;
getSound = songsCollection[Math.floor(Math.random() * songsCollection.length)];

getSound.songPath.addEventListener("timeupdate", () => {
  findtotalTime();
  let songTime = parseInt(
    (getSound.songPath.currentTime / getSound.songPath.duration) * 100
  );
  song_bar.value = songTime;
  updateTime();
  if (getSound.songPath.currentTime == getSound.songPath.duration) {
    getSound.songPath.play();
  }
});

play.addEventListener("click", () => {
  // animation()
  sound_img.src = getSound.songCover;
  soung_text.innerText = getSound.sondName;
  getSound.songPath.play();
  play.style.display = "none";
  pauseSong.style.display = "block";
});

pauseSong.addEventListener("click", () => {
  play.style.display = "block";
  pauseSong.style.display = "none";
  getSound.songPath.pause();
});
previous.onclick = () => {
  play.style.display = "none";
  pauseSong.style.display = "block";
  getSound.songPath.pause();
  getSound.songPath.currentTime = 0;
  getSound =
    songsCollection[Math.floor(Math.random() * songsCollection.length)];
  sound_img.src = getSound.songCover;
  soung_text.innerText = getSound.sondName;
  getSound.songPath.play();
  
  getSound.songPath.addEventListener("timeupdate", () => {
    findtotalTime();
   
    let songTime = parseInt(
      (getSound.songPath.currentTime / getSound.songPath.duration) * 100
    );
    song_bar.value = songTime;
    updateTime();
    
  });
};
next.onclick = () => {
  play.style.display = "none";
  pauseSong.style.display = "block";
  getSound.songPath.pause();
  
  getSound.songPath.currentTime = 0;
  getSound =
    songsCollection[Math.floor(Math.random() * songsCollection.length)];
  sound_img.src = getSound.songCover;
  soung_text.innerText = getSound.sondName;
  getSound.songPath.play();
  
  getSound.songPath.addEventListener("timeupdate", () => {
    findtotalTime();
    let songTime = parseInt(
      (getSound.songPath.currentTime / getSound.songPath.duration) * 100
    );
    song_bar.value = songTime;
    updateTime();
  });
};
function updateTime() {
  let mint = Math.floor(getSound.songPath.currentTime / 60);
  let sec = Math.floor(getSound.songPath.currentTime % 60);

  if (sec <= 9) {
    currentTime.textContent = `${mint}:0${sec}`;
  } else {
    currentTime.textContent = `${mint}:${sec}`;
  }
}
function findtotalTime() {
  let mint = Math.floor(getSound.songPath.duration / 60);
  let sec = Math.floor(getSound.songPath.duration % 60);

  if (sec <= 9) {
    totalTime.textContent = `${mint}:0${sec}`;
  } else {
    totalTime.textContent = `${mint}:${sec}`;
  }
}

song_bar.addEventListener("change", () => {
  let updateSeek = (song_bar.value * getSound.songPath.duration) / 100;
  getSound.songPath.currentTime = updateSeek;
    findtotalTime();
});
likeIcon.onclick = () => {
  likeIcon.classList.toggle("bxs-heart");
};
bookMark.onclick = () => {
  bookMark.classList.toggle("bxs-bookmark");
};

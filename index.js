var audio = document.querySelector("audio"),
    playButton = document.querySelector("#audio-play"),
    progress = document.querySelector("#audio-playbar"),
    volumeRange = document.querySelector("#volume-range");

const play = () =>{
  if(audio.paused){
    console.log("play");
    playButton.classList.add("paused");
    audio.play();
  }else{
    console.log("pause");
    playButton.classList.remove("paused");
    audio.pause();
  }
};

const bwd = () =>{
  console.log("bwd");
  audio.currentTime -= 5;
};

const fwd = () =>{
  console.log("fwd");
  audio.currentTime += 5;
};


volumeRange.addEventListener("change",(event)=>{
  audio.volume = event.target.value / 100;
});

audio.addEventListener("timeupdate",(e)=>{
progress.value = (e.target.currentTime / e.target.duration) * 100;
if(e.target.currentTime/e.target.duration === 1){
  play();
  audio.currentTime = 0;
}
});

document.querySelector("#audio-mute").addEventListener("mouseenter",(event)=>{
  document.querySelector("#volume-control")
    .style = "display: none";
});

document.querySelector("#volume-control").addEventListener("mouseleave",(event)=>{
  document.querySelector("#volume-control")
    .style = "display: block;";
});


playButton.addEventListener("click",play);

document.querySelector("#audio-fwd")
  .addEventListener("click",fwd);

document.querySelector("#audio-bwd")
  .addEventListener("click",bwd);
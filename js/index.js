const playAndPause = document.querySelector('.play-pause');
const volDown = document.querySelector('.vol-down');
const volUp = document.querySelector('.vol-up');
const music = new Audio("http://radio.radioclandestina.cl:8001/;stream.nsv");
playAndPause.addEventListener('click', function (e) {
    music.play()
    playAndPause.addEventListener('click', function (e) {
        //   music.paused ? music.play() : music.pause();
          if(music.paused){
              music.play()
          }else {
            music.pause()
          }
    });
});
 let controlsVol = music.volume;
 volUp.addEventListener('click',()=> {
    
    if (controlsVol < 1){
        let newControlsVol = controlsVol + 0.10;
        controlsVol = newControlsVol
        music.volume = controlsVol;
        console.log(controlsVol);
    }

})
volDown.addEventListener('click',()=> {
    if (controlsVol <= 1) {
      let newControlsVol = controlsVol - 0.1;
      controlsVol = newControlsVol;
      music.volume = controlsVol;
      console.log(controlsVol);
    }
})
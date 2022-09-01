// add slider
var seeker = document.getElementById('slider');
noUiSlider.create(slider, {
  start: [0],
  tooltips: [true],
  connect: [true, true],
  step: 0.01,
  range: {
    'min': 0,
    'max': 100
  },
});


//get longest duration
var duration = 0;
var longestplayer;

// set slider current time
function attachtimeupdate(longestplayer) {
  longestplayer.on('timeupdate', (event) => {
    seeker.noUiSlider.setHandle(0, longestplayer.currentTime(), false, false);
  })
}

for (var i = 0; i < player.length; i++) {
  if (!player[i]) continue;
  player[i].on('loadeddata', (event) => {
    // get slider for player
    if (event.target.id === "player1") {
      plr= player[1];
    }
    if (event.target.id === "player2") {
      plr= player[2];
    }
    if (event.target.id === "player3") {
      plr= player[3];
    }
    if (event.target.id === "player4") {
      plr= player[4];
    }
    if (event.target.id === "player5") {
      plr= player[5];
    }
    if (event.target.id === "player6") {
      plr= player[6];
    }

    //set slider duration
    if (plr.duration() > duration) {
      duration = plr.duration()
      longestplayer = plr
    }
    attachtimeupdate(longestplayer)
    seeker.noUiSlider.updateOptions({
      range: {
        'min': 0,
        'max': duration
      }
    })
    seeker.noUiSlider.setHandle(0, 0, false, false);
  })
}

//seeker event
seeker.noUiSlider.on('slide', function (values, handle) {
  if (player[1]) player[1].currentTime(values[handle]);
})
seeker.noUiSlider.on('slide', function (values, handle) {
  if (player[2]) player[2].currentTime(values[handle]);
})
seeker.noUiSlider.on('slide', function (values, handle) {
  if (player[3]) player[3].currentTime(values[handle]);
})
seeker.noUiSlider.on('slide', function (values, handle) {
  if (player[4]) player[4].currentTime(values[handle]);
})
seeker.noUiSlider.on('slide', function (values, handle) {
  if (player[5]) player[5].currentTime(values[handle]);
})
seeker.noUiSlider.on('slide', function (values, handle) {
  if (player[6]) player[6].currentTime(values[handle]);
})

//attach events to the player
function attachPlayerEvents(player){
  var slider;

  // on video ready
  player.on('loadeddata', (event) => {

    // get slider for player
    if (event.target.id === "player1") {
      slider = slider1;
      player = player1
    }
    if (event.target.id === "player2") {
      slider = slider2;
      player = player2
    }
    if (event.target.id === "player3") {
      slider = slider3;
      player = player3
    }
    if (event.target.id === "player4") {
      slider = slider4;
      player = player4
    }
    if (event.target.id === "player5") {
      slider = slider5;
      player = player5
    }
    if (event.target.id === "player6") {
      slider = slider6;
      player = player6
    }


    //set ended to false
    player.videoElement.dataset.ended = false;

    // set slider duration
    duration = parseInt(player.duration())
    slider.noUiSlider.updateOptions({
      range: {
        'min': 0,
        'max': duration
      }
    })

    // set slider handles
    slider.noUiSlider.setHandle(0, 0, false, false);
    slider.noUiSlider.setHandle(1, duration, false, false);
    slider.noUiSlider.setHandle(2, duration, false, false);
    slider = null
  })

  // on video time update (playing)
  player.on('timeupdate', (event) => {

    // get slider for player
    if (event.target.id === "player1") {
      slider = slider1;
      player = player1
    }
    if (event.target.id === "player2") {
      slider = slider2;
      player = player2
    }
    if (event.target.id === "player3") {
      slider = slider3;
      player = player3
    }
    if (event.target.id === "player4") {
      slider = slider4;
      player = player4
    }
    if (event.target.id === "player5") {
      slider = slider5;
      player = player5
    }
    if (event.target.id === "player6") {
      slider = slider6;
      player = player6
    }


    // slider seeker handle
    var currentTime = parseFloat(player.currentTime())
    slider.noUiSlider.setHandle(1, currentTime, false, false);

    // stoppin time handle
    var stoppingpoint = slider.noUiSlider.get(true)[2]
    if (currentTime >= stoppingpoint) {
      player.pause()
      var startingpoint = slider.noUiSlider.get(true)[0]
      player.videoElement.dataset.startingPoint = startingpoint
    }
  })

  player.on('ended', (event) => {
    if (event.target.id === "player1") {
      slider = slider1;
      player = player1
    }
    if (event.target.id === "player2") {
      slider = slider2;
      player = player2
    }
    if (event.target.id === "player3") {
      slider = slider3;
      player = player3
    }
    if (event.target.id === "player4") {
      slider = slider4;
      player = player4
    }
    if (event.target.id === "player5") {
      slider = slider5;
      player = player5
    }
    if (event.target.id === "player6") {
      slider = slider6;
      player = player6
    }


    // set next starting point
    player.videoElement.dataset.ended = true

    var nextstartingpoint = slider.noUiSlider.get(true)[0]
    player.videoElement.dataset.startingPoint = nextstartingpoint
  });

  player.on("play", (event) => {
    if (event.target.id === "player1") {
      slider = slider1;
      player = player1
    }
    if (event.target.id === "player2") {
      slider = slider2;
      player = player2
    }
    if (event.target.id === "player3") {
      slider = slider3;
      player = player3
    }
    if (event.target.id === "player4") {
      slider = slider4;
      player = player4
    }
    if (event.target.id === "player5") {
      slider = slider5;
      player = player5
    }
    if (event.target.id === "player6") {
      slider = slider6;
      player = player6
    }

    if (player.videoElement.dataset.ended == 'true') {
      ended = false;
      var startingpoint = player.videoElement.dataset.startingPoint
      slider.noUiSlider.setHandle(1, startingpoint);
      player.currentTime(startingpoint)
    }
  })
}


// add player events to all players
for (var i = 0; i < players.length; i++) {
  attachPlayerEvents(players[i])
}

function attachSliderEvents(slider) {
  // add event listener to slider (seeking)
  slider.noUiSlider.on('slide', function (values, handle) {
    // get the player
    if (this.target.id === "slider1") {
      player = player1
    }
    if (this.target.id === "slider2") {
      player = player2
    }
    if (this.target.id === "slider3") {
      player = player3
    }
    if (this.target.id === "slider4") {
      player = player4
    }
    if (this.target.id === "slider5") {
      player = player5
    }
    if (this.target.id === "slider6") {
      player = player6
    }

    if (handle === 0) {
      if (player.videoElement.dataset.ended == 'true') {
        player.videoElement.dataset.StartingPoint = slider.noUiSlider.get(true)[0]
      }
      var nextstartingpoint = slider.noUiSlider.get(true)[1]
      player.videoElement.dataset.nextStartingPoint = nextstartingpoint
    }
    if (handle === 1) {
      // set the current time
      var startingpoint = slider.noUiSlider.get(true)[1]
      player.videoElement.dataset.startingPoint = startingpoint
      player.currentTime(values[handle]);
      player.pause()
    }
  });


  slider.noUiSlider.on('set', function (values, handle) {
    // get the player
    if (this.target.id === "slider1") {
      player = player1
    }
    if (this.target.id === "slider2") {
      player = player2
    }
    if (this.target.id === "slider3") {
      player = player3
    }
    if (this.target.id === "slider4") {
      player = player4
    }
    if (this.target.id === "slider5") {
      player = player5
    }
    if (this.target.id === "slider6") {
      player = player6
    }

    if (handle === 0) {
      if (player.videoElement.dataset.ended == 'true') {
        player.videoElement.dataset.StartingPoint = slider.noUiSlider.get(true)[0]
      }
      var nextstartingpoint = slider.noUiSlider.get(true)[1]
      player.videoElement.dataset.nextStartingPoint = nextstartingpoint
    }
    if (handle === 1) {
      // set the current time
      var startingpoint = slider.noUiSlider.get(true)[1]
      player.videoElement.dataset.startingPoint = startingpoint
      player.currentTime(values[handle]);
      player.pause()
    }
  });
}



// add slider events to all sliders
for (var i = 0; i < sliders.length; i++) {
  attachSliderEvents(sliders[i])
}

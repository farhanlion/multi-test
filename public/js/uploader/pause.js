document.querySelectorAll('.fa-pause').forEach(element => {
  element.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.id === "pause1") {
      player = player1
      slider = slider1

    }
    if (e.target.id === "pause2") {
      player = player2
      slider = slider2
    }
    if (e.target.id === "pause3") {
      player = player3
      slider = slider3
    }
    if (e.target.id === "pause4") {
      player = player4
      slider = slider4
    }
    if (e.target.id === "pause5") {
      player = player5
      slider = slider5
    }
    if (e.target.id === "pause6") {
      player = player6
      slider = slider6
    }
    player.pause();

  })
})

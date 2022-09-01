document.querySelectorAll('.fa-backward').forEach(element => {
  element.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.id === "skipback1") {
      player = player1
      slider = slider1

    }
    if (e.target.id === "skipback2") {
      player = player2
      slider = slider2
    }
    if (e.target.id === "skipback3") {
      player = player3
      slider = slider3
    }
    if (e.target.id === "skipback4") {
      player = player4
      slider = slider4
    }
    if (e.target.id === "skipback5") {
      player = player5
      slider = slider5
    }
    if (e.target.id === "skipback6") {
      player = player6
      slider = slider6
    }
    currtime = slider.noUiSlider.get(true)[1]
    slider.noUiSlider.setHandle(1, currtime - 0.1, true, false);

  })
})



document.querySelectorAll('.fa-forward').forEach(element => {
  element.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.id === "skipforward1") {
      player = player1
      slider = slider1

    }
    if (e.target.id === "skipforward2") {
      player = player2
      slider = slider2
    }
    if (e.target.id === "skipforward3") {
      player = player3
      slider = slider3
    }
    if (e.target.id === "skipforward4") {
      player = player4
      slider = slider4
    }
    if (e.target.id === "skipforward5") {
      player = player5
      slider = slider5
    }
    if (e.target.id === "skipforward6") {
      player = player6
      slider = slider6
    }
    currtime = slider.noUiSlider.get(true)[1]
    slider.noUiSlider.setHandle(1, currtime + 0.1, true, false);

  })
})

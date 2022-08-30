// mute button
document.querySelectorAll(".muteToggleImg").forEach(element => {
  var player;
  var button;
  let muteOn = true
  element.addEventListener("click", function (e) {
    e.preventDefault()

    // get the player
    if (e.target.id === "mutebtn1") {
      button = e.target;
      player = player1
    }
    if (e.target.id === "mutebtn2") {
      button = e.target;
      player = player2
    }
    if (e.target.id === "mutebtn3") {
      button = e.target;
      player = player3
    }
    if (e.target.id === "mutebtn4") {
      button = e.target;
      player = player4
    }
    if (e.target.id === "mutebtn5") {
      button = e.target;
      player = player5
    }
    if (e.target.id === "mutebtn6") {
      button = e.target;
      player = player6
    }


    // toggle mute
    if (muteOn) {
      button.src = './mute.svg'
      player.unmute()
    } else {
      button.src = './unmute.svg'
      player.mute()
    }
    muteOn = !muteOn
  })

});

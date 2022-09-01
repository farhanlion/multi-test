document.querySelectorAll(".muteToggleImg").forEach(element => {
  var button;
  let muteOn = false
  element.addEventListener("click", function (e) {
    e.preventDefault()
    button = e.target;
    // get the player
    if (e.target.id === "mutebtn1") {
      plr= player[1];
    }
    if (e.target.id === "mutebtn2") {
      plr= player[2];
    }
    if (e.target.id === "mutebtn3") {
      plr= player[3];
    }
    if (e.target.id === "mutebtn4") {
      plr= player[4];
    }
    if (e.target.id === "mutebtn5") {
      plr= player[5];
    }
    if (e.target.id === "mutebtn6") {
      plr= player[6];
    }


    // toggle mute
    if (muteOn) {
      button.src = './mute.svg'
      plr.unmute()
    } else {
      button.src = './unmute.svg'
      plr.mute()
    }
    muteOn = !muteOn
  })

});

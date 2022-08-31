//remove btn events
document.querySelectorAll('.remove').forEach(element => {
  element.addEventListener('click', function (e) {
    debugger;
    if (e.target.id === "removebtn1") {
      player = player1
      num = 0
    }
    if (e.target.id === "removebtn2") {
      player = player2;
      num = 1
    }
    if (e.target.id === "removebtn3") {
      player = player3;
      num = 2
    }
    if (e.target.id === "removebtn4") {
      player = player4;
      num = 3
    }
    if (e.target.id === "removebtn5") {
      player = player5;
      num = 4
    }
    if (e.target.id === "removebtn6") {
      player = player6;
      num = 5
    }

    // delete video player
    player.dispose();

    // create video tag
    playerdiv = document.getElementsByClassName('player')[num]
    videoelement = document.createElement('video')
    id = num + 1
    videoelement.setAttribute('id', 'player' + id)
    videoelement.classList.add('cld-video-player')
    playerdiv.appendChild(videoelement)

    if (num === 0) {
      player1 = cld.videoPlayer('player1', {
        "controls": false,
        "muted": true,
        "autoplay": true,
        "fluid": true,
      });
      player = player1
    }
    if (num === 1) {
      player2 = cld.videoPlayer('player2', {
        "controls": false,
        "muted": true,
        "autoplay": true,
        "fluid": true,
      });
      player = player2
    }
    if (num === 2) {
      player3 = cld.videoPlayer('player3', {
        "controls": false,
        "muted": true,
        "autoplay": true,
        "fluid": true,
      })
      player = player3
    };
    if (num === 3) {
      player4 = cld.videoPlayer('player4', {
        "controls": false,
        "muted": true,
        "autoplay": true,
        "fluid": true,
      })
      player = player4
    };
    if (num === 4) {
      player5 = cld.videoPlayer('player5', {
        "controls": false,
        "muted": true,
        "autoplay": true,
        "fluid": true,
      })
      player = player5
    };
    if (num === 5) {
      player6 = cld.videoPlayer('player6', {
        "controls": false,
        "muted": true,
        "autoplay": true,
        "fluid": true,
      })
      player = player6;
    }
    players[num] = player
    attachPlayerEvents(player);
  })
})

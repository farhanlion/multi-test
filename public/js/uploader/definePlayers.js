var currentplayer;
var player1 = cld.videoPlayer('player1', {
  "controls": false,
  "muted": true,
  "autoplay": true
});

var player2 = cld.videoPlayer('player2', {
  "controls": false,
  "muted": true,
  "autoplay": true
});

var player3 = cld.videoPlayer('player3', {
  "controls": false,
  "muted": true,
  "autoplay": true
});

var player4 = cld.videoPlayer('player4', {
  "controls": false,
  "muted": true,
  "autoplay": true
});

var player5 = cld.videoPlayer('player5', {
  "controls": false,
  "muted": true,
  "autoplay": true
});

var player6 = cld.videoPlayer('player6', {
  "controls": false,
  "muted": true,
  "autoplay": true
});


// fill players with existing vids if on edit page
if (mode === 'edit') {
  for (var i = 0; i < videolinks.length; i++) {
    if (i === 0) {
      player1.videoElement.dataset.id = videoids[i]
      player1.source(videolinks[i]);
    } else if (i === 1) {
      player2.videoElement.dataset.id = videoids[i]
      player2.source(videolinks[i]);
    } else if (i === 2) {
      player3.videoElement.dataset.id = videoids[i]
      player3.source(videolinks[i]);
    } else if (i === 3) {
      player4.videoElement.dataset.id = videoids[i]
      player4.source(videolinks[i]);
    } else if (i === 4) {
      player5.videoElement.dataset.id = videoids[i]
      player5.source(videolinks[i]);
    } else if (i === 5) {
      player6.videoElement.dataset.id = videoids[i]
      player6.source(videolinks[i]);
    }
  }
}

// players array
var players = [player1, player2, player3, player4, player5, player6];

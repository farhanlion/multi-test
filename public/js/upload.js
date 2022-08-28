var currentplayer;
var player1 = cld.videoPlayer('player1',
{
  "controls": false,
  "muted": true,
  "autoplay": true
});

var player2 = cld.videoPlayer('player2',
{
  "controls": false,
  "muted": true,
  "autoplay": true
});

var player3 = cld.videoPlayer('player3',
{
  "controls": false,
  "muted": true,
  "autoplay": true
});

var player4 = cld.videoPlayer('player4',
{
  "controls": false,
  "muted": true,
  "autoplay": true
});

var player5 = cld.videoPlayer('player5',
{
  "controls": false,
  "muted": true,
  "autoplay": true
});

// get players
var players = [player1, player2, player3, player4, player5];

// get sliders
var slider1 = document.getElementById('slider1');
var slider2 = document.getElementById('slider2');
var slider3 = document.getElementById('slider3');
var slider4 = document.getElementById('slider4');
var slider5 = document.getElementById('slider5');
var sliders = [slider1, slider2, slider3, slider4, slider5];

// slider events
for (var i = 0; i < sliders.length; i++) {
  var slider = sliders[i]
  var palyer;

  // create new slider
  noUiSlider.create(slider, {
    start: [0, 0, 100],
    connect: [false, true, true, false],
    step: 0.0001,
    range: {
        'min': 0,
        'max': 100
    }
  });

  // add event listener to slider (seeking)
  slider.noUiSlider.on('slide', function (values, handle) {
    if (handle === 1) {

      // get the player
      if(this.target.id === "slider1") {player = player1}
      if(this.target.id === "slider2") {player = player2}
      if(this.target.id === "slider3") {player = player3}
      if(this.target.id === "slider4") {player = player4}
      if(this.target.id === "slider5") {player = player5}

      // set the current time
      player.currentTime(values[handle]);
      player.pause()

      player = null
    }
  });

}

// player events
for (var i = 0; i < players.length; i++) {
  var player = players[i]
  var slider;

  // on video ready
  player.on('loadeddata', (event) => {

    // get slider for player
    if(event.target.id === "player1") {slider = slider1; player = player1}
    if(event.target.id === "player2") {slider = slider2; player = player2}
    if(event.target.id === "player3") {slider = slider3; player = player3}
    if(event.target.id === "player4") {slider = slider4; player = player4}
    if(event.target.id === "player5") {slider = slider5; player = player5}

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
    if(event.target.id === "player1") {slider = slider1; player = player1}
    if(event.target.id === "player2") {slider = slider2; player = player2}
    if(event.target.id === "player3") {slider = slider3; player = player3}
    if(event.target.id === "player4") {slider = slider4; player = player4}
    if(event.target.id === "player5") {slider = slider5; player = player5}

    // slider seeker handle
    var currentTime = parseFloat(player.currentTime())
    slider.noUiSlider.setHandle(1, currentTime, false, false);
  })
}

// mute button
document.querySelectorAll(".muteToggleImg").forEach(element => {
  var player;
  var button;
  let muteOn = true
  element.addEventListener("click", function(e) {
    e.preventDefault()

    // get the player
    if (e.target.id === "mutebtn1") {button = e.target; player = player1}
    if (e.target.id === "mutebtn2") {button = e.target; player = player2}
    if (e.target.id === "mutebtn3") {button = e.target; player = player3}
    if (e.target.id === "mutebtn4") {button = e.target; player = player4}
    if (e.target.id === "mutebtn5") {button = e.target; player = player5}

    // toggle mute
    if(muteOn) {
        button.src='./mute.svg'
        player.unmute()
    }
    else {
        button.src='./unmute.svg'
        player.mute()
    }
    muteOn = !muteOn
    })

});



$(document).ready(function() {

  $.cloudinary.config({ cloud_name: 'dvapwslkg', secure: true});

  //upload video
  if($.fn.cloudinary_fileupload !== undefined) {
    $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
  }

  //upload completed
  $('.cloudinary-fileupload').on('cloudinarydone', function(e, data) {
    var currentplayer;
    for (var i = 0; i < players.length; i++) {
      if (players[i].videoElement.dataset.vidnum){
        continue;
      }
      players[i].videoElement.dataset.vidnum = i
      currentplayer = players[i]
      break
    }
    currentplayer.source("https://res.cloudinary.com/dvapwslkg/video/upload/v1661423766/"+data.result.public_id+"."+data.result.format);
    currentplayer.play();
    });


    // upload progress
    $('.cloudinary-fileupload').on('cloudinaryprogress', function(e, data) {
      $('.progress_bar').css('width', Math.round((data.loaded * 100.0) / data.total) + '%');});

    $('#uploadform').on('submit', function(e) {

      e.preventDefault();

      // update match info
      matchinfo.title = e.currentTarget.title.value
      matchinfo.description = e.currentTarget.description.value

      // create data to send
      data = {
        matchinfo: matchinfo,
        videos: []
      }

      // get video positions
      if(player1.source()){
        for (var i = 0; i < players.length; i++) {
          var player = {
            link: players[i].currentPublicId(),
            vidstart: sliders[i].noUiSlider.get(true)[0],
            vidstop: sliders[i].noUiSlider.get(true)[2]
          }

          //push player into videos
          if (players[i].videoElement.dataset.vidnum) {
            data.videos.push(player)
          }
        }
      }

      console.log(data)
      $.ajax({
        type: "POST",
        url: '/creatematch',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function(returneddata) {
          console.log(returneddata)
        }
      });
      return true;
    })

})

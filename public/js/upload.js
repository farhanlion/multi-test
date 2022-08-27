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

var players = [player1, player2, player3, player4, player5];

// attach sliders to players
var sliders = document.getElementsByClassName('slider')

for (var i = 0; i < sliders.length; i++) {
  var slider = sliders[i]
  var palyer = players[i]

  noUiSlider.create(slider, {
    start: [0, 0, 100],
    connect: [false, true, true, false],
    step: 0.0001,
    range: {
        'min': 0,
        'max': 100
    }
  });

  slider.noUiSlider.on('slide', function (values, handle) {
    if (handle === 1) {
      player.currentTime(values[handle]);
      player.pause()
    }
  });

}

// player events

for (var i = 0; i < players.length; i++) {
  var player = players[i]
  var slider = sliders[i]

  player.on('loadeddata', (event) => {
    duration = parseInt(player1.duration())
    slider.noUiSlider.updateOptions({
      range: {
        'min': 0,
        'max': duration
      }
    })
    slider.noUiSlider.setHandle(0, 0, false, false);
    slider.noUiSlider.setHandle(1, duration, false, false);
    slider.noUiSlider.setHandle(2, duration, false, false);
  })

  // slider (seeker)
  player.on('timeupdate', (event) => {
    var currentTime = parseFloat(player.currentTime())
    slider.noUiSlider.setHandle(1, currentTime, false, false);
  })

}

let muteToggleBtns = document.getElementsByClassName("muteToggleImg")

for (var i = 0; i < muteToggleBtns.length; i++) {
  var muteToggleBtn = muteToggleBtns[i]

  let muteOn = true

  muteToggleBtn.addEventListener("click",(e)=> {
      e.preventDefault()
      if(muteOn) {
          muteToggleBtn.src='./mute.svg'
          players[i].unmute()
      }
      else {
          muteToggleBtn.src='./unmute.svg'
          players[i].mute()

      }
      muteOn = !muteOn
  } )


}



//upload functionality
$(document).ready(function() {

  $.cloudinary.config({ cloud_name: 'dvapwslkg', secure: true});

  //upload video

  if($.fn.cloudinary_fileupload !== undefined) {
    $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
  }

  //upload completed
  $('.cloudinary-fileupload').bind('cloudinarydone', function(e, data) {

    info = {
      matchinfo: matchinfo,
      videoinfo: data.result
    }
    $.ajax({
      type: "POST",
      url: '/createvideo',
      data: JSON.stringify(info),
      contentType: "application/json; charset=utf-8",
      success: function(returneddata) {

        for (var i = 0; i < players.length; i++) {
          if (players[i].videoElement.dataset.vidnum){
            continue;
          }
          players[i].videoElement.dataset.vidnum = returneddata.video_id
          currentplayer = players[i]
          break
        }
        currentplayer.source("https://res.cloudinary.com/dvapwslkg/video/upload/v1661423766/"+data.result.public_id+"."+data.result.format);
        console.log('connected to match')
        currentplayer.play();
      }
    });
  });

    // upload progress
    $('.cloudinary-fileupload').bind('cloudinaryprogress', function(e, data) {
      $('.progress_bar').css('width', Math.round((data.loaded * 100.0) / data.total) + '%');});

    $('#uploadform').on('submit', function(e) {
      data = {
        matchinfo: matchinfo,
        videos: []
      }
      for (var i = 0; i < players.length; i++) {
        var player = {
          id: players[i].videoElement.dataset.vidnum,
          source: players[i].source(),
          vidstart: slider[i].noUiSlider.get(true)[0],
          vidstop: slider[i].noUiSlider.get(true)[2]
        }

        //push player into videos
        data.videos.push(player)
      }


      $.ajax({
        type: "POST",
        url: '/addmatch',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
      });
      return true;
    })

})

$(document).ready(function () {

  $.cloudinary.config({
    cloud_name: 'dvapwslkg',
    secure: true
  });

  //upload video
  if ($.fn.cloudinary_fileupload !== undefined) {
    $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
  }

  //upload completed
  $('.cloudinary-fileupload').on('cloudinarydone', function (e, data) {
    var replace = false;
    if (e.target.id === "uploadinput1") {
      player = player1;
      replace = true
    }
    if (e.target.id === "uploadinput2") {
      player = player2;
      replace = true
    }
    if (e.target.id === "uploadinput3") {
      player = player3;
      replace = true
    }
    if (e.target.id === "uploadinput4") {
      player = player4;
      replace = true
    }
    if (e.target.id === "uploadinput5") {
      player = player5;
      replace = true
    }
    if (e.target.id === "uploadinput6") {
      player = player6;
      replace = true
    }
    if (replace) {
      player.videoElement.dataset.publicId = data.result.public_id
      currentplayer = players
      var currentplayer = player
    } else {
      for (var i = 0; i < players.length; i++) {
        if (players[i].videoElement.dataset.vidnum) {
          continue;
        }
        players[i].videoElement.dataset.vidnum = i
        players[i].videoElement.dataset.publicId = data.result.public_id
        currentplayer = players[i]
        break
      }
    }
    currentplayer.source("https://res.cloudinary.com/dvapwslkg/video/upload/v1661423766/" + data.result.public_id + "." + data.result.format);

    currentplayer.play();
  });


  // upload progress
  $('.cloudinary-fileupload').on('cloudinaryprogress', function (e, data) {
    //show progressbar
    console.log(data.fileInput[0].id)
    if (data.fileInput[0].id == "uploadinput1") {
      var progressbar = $('#progress_bar1');
      var progressbarholder = $('#progress-bar-holder1');
    }else if (data.fileInput[0].id == "uploadinput2") {
      var progressbar = $('#progress_bar2');
      var progressbarholder = $('#progress-bar-holder2');
    }else if (data.fileInput[0].id == "uploadinput3") {
      var progressbar = $('#progress_bar3');
      var progressbarholder = $('#progress-bar-holder3');
    }else if (data.fileInput[0].id == "uploadinput4") {
      var progressbar = $('#progress_bar4');
      var progressbarholder = $('#progress-bar-holder4');
    }else if (data.fileInput[0].id == "uploadinput5") {
      var progressbar = $('#progress_bar5');
      var progressbarholder = $('#progress-bar-holder5');
    }else if (data.fileInput[0].id == "uploadinput6") {
      var progressbar = $('#progress_bar6');
      var progressbarholder = $('#progress-bar-holder6');
    }
    console.log(e)
    progressbar.css('width', Math.round((data.loaded * 100.0) / data.total) + '%');
    progressbarholder.css('visibility', 'visible');
  });

  $('#uploadform').on('submit', function (e) {
    e.preventDefault()
    if (e.currentTarget.title.value === "") {
      alert('Enter a title!');
      return;
    }
    if (e.currentTarget.description.value === "") {
      alert('Enter a description!');
      return;
    }
    var matchinfo = {
      title: e.currentTarget.title.value,
      description: e.currentTarget.description.value,
      gametag_id: e.currentTarget.gametag.value
    }
    // update match info
    if (mode === 'edit') {
      matchinfo.id = matchid
    }

    // create data to send
    data = {
      matchinfo: matchinfo,
      videos: []
    }

    // get video positions
    for (var i = 0; i < players.length; i++) {
      if (players[i].videoElement.dataset.publicId || players[i].videoElement.dataset.id) {

        // create object to send
        var player = {
          link: players[i].currentPublicId(),
          vidstart: sliders[i].noUiSlider.get(true)[0],
          vidstop: sliders[i].noUiSlider.get(true)[2]
        }

        // if have an id set it
        if (players[i].videoElement.dataset.id) {
          player.id = players[i].videoElement.dataset.id
        } else {
          player.public_id = players[i].videoElement.dataset.publicId
        }

        //push player into videos
        data.videos.push(player)
      }
    }

    console.log(data)
    if (mode === 'edit') {
      $.ajax({
        type: "POST",
        url: '/updatematch',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function (returneddata) {
          console.log(returneddata)
        }
      });
    } else {
      $.ajax({
        type: "POST",
        url: '/creatematch',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function (returneddata) {
          console.log(returneddata)
        }
      });
    }
  })
})

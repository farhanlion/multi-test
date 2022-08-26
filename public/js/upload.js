

player1 = cld.videoPlayer('player1',
        {
            loop: false,
            controls: true,
            autoplay: false,
            q_auto: true
        });

player1.source("https://res.cloudinary.com/dvapwslkg/video/upload/v1661432529/Vids/ttk1kqy6cjo0wkewv7jg.mp4");

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [0, 80],
  connect: true,
  range: {
      'min': 0,
      'max': 100
  }
});
player1.on('loadeddata', (event) => {
  duration = parseInt(player1.duration())
  slider.noUiSlider.updateOptions({
    range: {
      'min': 0,
      'max': duration
    }
  })
})

player1.on('timeupdate', (event) => {
  var currentTime = parseInt(player1.currentTime())
  console.log(currentTime)
  slider.noUiSlider.setHandle(0, currentTime, false, false);
})

slider.noUiSlider.on('slide', function (values, handle) {
  if (handle === 0) {
    player1.currentTime(values[handle]);
  }

});


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
      contentType: "application/json; charset=utf-8" // <- this is what you should add
    });
    console.log('connected to match')
    // player1.source("https://res.cloudinary.com/dvapwslkg/video/upload/v1661423766/"+data.result.public_id+"."+data.result.format);
    // player1.play();
    //   slider.noUiSlider.updateOptions({
    //     range: {
    //         'min': 20,
    //         'max': 30
    //     }
    // });
      });

    // upload progress
    $('.cloudinary-fileupload').bind('cloudinaryprogress', function(e, data) {
      $('.progress_bar').css('width', Math.round((data.loaded * 100.0) / data.total) + '%');});

})

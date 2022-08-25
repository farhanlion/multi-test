

player1 = cld.videoPlayer('player1',
        {
            loop: false,
            controls: false,
            autoplay: false,
            q_auto: true
        });

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [20, 80],
  connect: true,
  range: {
      'min': 0,
      'max': 100
  }
});

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
    // $('.preview').append(
    //    $.cloudinary.videoTag(data.result.public_id, {id:'player1',  class:"cld-video-player",controls: false, secure: true, source_types:['mp4']}).toHtml()
    //    );
    player1.source("https://res.cloudinary.com/dvapwslkg/video/upload/v1661423766/"+data.result.public_id+"."+data.result.format);
    player1.play();
      });

    // upload progress
    $('.cloudinary-fileupload').bind('cloudinaryprogress', function(e, data) {
      $('.progress_bar').css('width', Math.round((data.loaded * 100.0) / data.total) + '%');});

})

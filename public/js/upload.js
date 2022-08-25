

const demoplayer = cld.videoPlayer("player").width(600);



// demoplayer.source(videoSource);
// player.source("Vids/fe8azbpgvm3cgkyvdvdf", {});

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
    $('.preview').append(
       $.cloudinary.videoTag(data.result.public_id, {id:'player1',  class:"cld-video-player",controls: false, secure: true, source_types:['mp4']}).toHtml()
       );


      });

    // upload progress
    $('.cloudinary-fileupload').bind('cloudinaryprogress', function(e, data) {
      $('.progress_bar').css('width', Math.round((data.loaded * 100.0) / data.total) + '%');});

})

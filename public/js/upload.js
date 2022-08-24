
$(document).ready(function() {
  $.cloudinary.config({ cloud_name: 'dvapwslkg', secure: true});
  if($.fn.cloudinary_fileupload !== undefined) {
    $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();
  }
  $('.cloudinary-fileupload').bind('cloudinarydone', function(e, data) {
    $('.preview').html(
       $.cloudinary.imageTag(data.result.public_id,
           { format: data.result.format, version: data.result.version,
             crop: 'scale', width: 200 }).toHtml());
    $('.image_public_id').val(data.result.public_id);
    return true;});

    $('.cloudinary-fileupload').bind('cloudinaryprogress', function(e, data) {
      $('.progress_bar').css('width', Math.round((data.loaded * 100.0) / data.total) + '%');});


})

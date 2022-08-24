

var slideIndex = 0;
carousel();

$(document).ready(function() {
  $.cloudinary.config({ cloud_name: 'dvapwslkg', secure: true});
  $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload();

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



  const input2 = document.getElementById("uploadbutton2")
.onchange = function(event) {
    let file = event.target.files[0];
    let blobURL = URL.createObjectURL(file);
    document.getElementById("video2").src = blobURL;
    document.getElementById('video2').play();

  }
  const input3 = document.getElementById("uploadbutton3")
.onchange = function(event) {
    let file = event.target.files[0];
    let blobURL = URL.createObjectURL(file);
    document.getElementById("video3").src = blobURL;
    document.getElementById('video3').play();

  }
  const input4 = document.getElementById("uploadbutton4")
.onchange = function(event) {
    let file = event.target.files[0];
    let blobURL = URL.createObjectURL(file);
    document.getElementById("video4").src = blobURL;
    document.getElementById('video4').play();

  }
    const input5 = document.getElementById("uploadbutton5")
  .onchange = function(event) {
      let file = event.target.files[0];
      let blobURL = URL.createObjectURL(file);
      document.getElementById("video5").src = blobURL;
      document.getElementById('video5').play();
    }

function allowDrop(event) {
ev.preventDefault();
}

function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementById(data));
}


function carousel() {
var i;
var x = document.getElementsByClassName("slides");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1}
x[slideIndex-1].style.display = "block";
setTimeout(carousel, 2000); // Change image every 2 seconds
}

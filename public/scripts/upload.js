

var slideIndex = 0;
carousel();
$(document).ready(function() {
  $('.cloudinary-fileupload').bind('fileuploadprogress', function(e, data) {
    $('.progress_bar').css('width', Math.round((data.loaded * 100.0) / data.total) + '%');
  });
})

// $('#uploadbutton1').on('change', function(e){
//   e.preventDefault();

//   var file = e.target.files[0]
//   $.ajax({
//     type: 'POST',
//     url: "/createvideo",
//     processData: true,
//     contentType: false,
//     async: false,
//     cache: false,
//     data: {name:'hello'},
//     contentType: "application/json; charset=utf-8",
//     success: function (data) {
//         alert(data)
//     },
//   });
// });



// showing preview of videos
// const input1 = document.getElementById("uploadbutton1")
// .onchange = function(event) {
//     let file = event.target.files[0];
//     let blobURL = URL.createObjectURL(file);
//     document.getElementById("video1").src = blobURL;
//     document.getElementById('video1').play();
//   }
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

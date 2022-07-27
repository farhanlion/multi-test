const input = document.getElementById("upload1");
const video = document.getElementById('video1');
// let inputs = document.querySelectorAll('input');
// for (i of inputs) {
// i.addEventListener('change', function() {
// console.log(i);
// });
// }

const videoSource = document.createElement('source');
input.addEventListener('change', function() {
const files = this.files || [];

if (!files.length) return;

const reader = new FileReader();

reader.onload = function (e) {
    videoSource.setAttribute('src', e.target.result);
    video.appendChild(videoSource);
    video.load();
    video.play();
};

reader.onprogress = function (e) {
    console.log('progress: ', Math.round((e.loaded * 100) / e.total));
};

reader.readAsDataURL(files[0]);
});


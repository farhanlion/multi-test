// global controls
var globalplaybtn = document.getElementById("playbtn");
var globalpausebtn = document.getElementById("pausebtn");
var globalstopbtn = document.getElementById("stopbtn");

//playbtn events
globalplaybtn.addEventListener("click", function () {
  player1.play()
})
globalplaybtn.addEventListener("click", function () {
  player2.play()
})
globalplaybtn.addEventListener("click", function () {
  player3.play()
})
globalplaybtn.addEventListener("click", function () {
  player4.play()
})
globalplaybtn.addEventListener("click", function () {
  player5.play()
})
globalplaybtn.addEventListener("click", function () {
  player6.play()
})

//pausebtn events
globalpausebtn.addEventListener("click", function () {
  player1.pause()
  player1.videoElement.dataset.startingPoint = slider1.noUiSlider.get(true)[1]
  player1.videoElement.dataset.ended = false
})
globalpausebtn.addEventListener("click", function () {
  player2.pause()
  player2.videoElement.dataset.startingPoint = slider2.noUiSlider.get(true)[1]
  player2.videoElement.dataset.ended = false
})
globalpausebtn.addEventListener("click", function () {
  player3.pause()
  player3.videoElement.dataset.startingPoint = slider3.noUiSlider.get(true)[1]
  player3.videoElement.dataset.ended = false
})
globalpausebtn.addEventListener("click", function () {
  player4.pause()
  player4.videoElement.dataset.startingPoint = slider4.noUiSlider.get(true)[1]
  player4.videoElement.dataset.ended = false
})
globalpausebtn.addEventListener("click", function () {
  player5.pause()
  player5.videoElement.dataset.startingPoint = slider5.noUiSlider.get(true)[1]
  player5.videoElement.dataset.ended = false
})
globalpausebtn.addEventListener("click", function () {
  player6.pause()
  player6.videoElement.dataset.startingPoint = slider6.noUiSlider.get(true)[1]
  player6.videoElement.dataset.ended = false
})


//stopbtn events
globalstopbtn.addEventListener("click", function () {
  player1.stop();
  player1.videoElement.dataset.startingPoint = slider1.noUiSlider.get(true)[0]
  player1.videoElement.dataset.ended = true
})
globalstopbtn.addEventListener("click", function () {
  player2.stop();
  player2.videoElement.dataset.startingPoint = slider2.noUiSlider.get(true)[0]
  player2.videoElement.dataset.ended = true
})
globalstopbtn.addEventListener("click", function () {
  player3.stop();
  player3.videoElement.dataset.startingPoint = slider3.noUiSlider.get(true)[0]
  player3.videoElement.dataset.ended = true
})
globalstopbtn.addEventListener("click", function () {
  player4.stop();
  player4.videoElement.dataset.startingPoint = slider4.noUiSlider.get(true)[0]
  player4.videoElement.dataset.ended = true
})
globalstopbtn.addEventListener("click", function () {
  player5.stop();
  player5.videoElement.dataset.startingPoint = slider5.noUiSlider.get(true)[0]
  player5.videoElement.dataset.ended = true
})
globalstopbtn.addEventListener("click", function () {
  player6.stop();
  player6.videoElement.dataset.startingPoint = slider6.noUiSlider.get(true)[0]
  player6.videoElement.dataset.ended = true
})

// get sliders
var slider1 = document.getElementById('slider1');
var slider2 = document.getElementById('slider2');
var slider3 = document.getElementById('slider3');
var slider4 = document.getElementById('slider4');
var slider5 = document.getElementById('slider5');
var slider6 = document.getElementById('slider6');

var sliders = [slider1, slider2, slider3, slider4, slider5, slider6];

// slider events
for (var i = 0; i < sliders.length; i++) {
  var slider = sliders[i]
  var palyer;

  // create new slider
  noUiSlider.create(slider, {
    start: [0, 0, 100],
    connect: [false, true, true, false],
    step: 0.0001,
    range: {
      'min': 0,
      'max': 100
    }
  });
}

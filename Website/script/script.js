
function myFunction() {
  let userInput = document.querySelector("#userInput");
  let message = document.querySelector("#message");

  let message1 = document.querySelector("#message1");

  message.innerHTML = "Hello, " + userInput.value + "!";
  message1.innerHTML = "Hello, " + userInput.value + "!";

}


$(document).ready(function () {
  $('#fullpage').fullpage({ //initialize //set options  
    sectionsColor: ['#8FCADE', '#8FCADE', '#8FCADE'],
    navigation: false,
    anchors: ['section1', 'section2', 'section3'], //name the anchors for each section
    afterLoad: function (origin, destination, direction) {
      if (destination.index == 1) { //section 2
        logo1.play(); //anime.js play method
        card.play();
        start.play();
        p1.play();
        p2.play();
      }
    }
  });

  $.fn.fullpage.setMouseWheelScrolling(false);
  $.fn.fullpage.setAllowScrolling(false);

});


//anime
var logo1 = anime({
  targets: ".logo1",
  rotate: "360deg",
  autoplay: false,
  duration: 3000
});

anime({
  targets: '.WelPage',
  translateX: 100,
  direction: 'alternate',
  easing: 'easeInOutSine'
});

anime({
  targets: '.logo',
  translateY: -10,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate',
  autoplay: true
});

var start = anime({
  targets: '.Start',
  translateX: { value: 250, duration: 100 },
  rotate: { value: 360, duration: 1800, easing: 'easeInOutSine' },
  scale: { value: 2, duration: 1600, easing: 'easeInOutQuart' },
  delay: 200,
  direction: 'alternate',

});

var card = anime({
  targets: '.card',
  translateX: 0,
  rotate: 360,
  opacity: [0, 1], //start and end values
  delay: 500
});

anime({
  targets: '.logo3',
  translateY: 10,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate',
  autoplay: true
});

var p1 = anime({
  targets: '.EnterDaily',
  translateX: 100,
  direction: 'alternate',
  easing: 'easeInOutSine',
  autoplay: true

});


var p2 = anime({
  targets: '.TargetReached',
  translateX: 100,
  direction: 'alternate',
  easing: 'easeInOutSine',
  autoplay: true

});

//tippy
tippy('#wlcT', {
  content: 'Exercise Tracker is an online app that helps users keep track of their weekly exercise regime.',
  placement: 'bottom',
  allowHTML: true, //allow HTML in tippy content
});


tippy('#shareTool', {
  content: 'Share',
  placement: 'right',
  allowHTML: true, //allow HTML in tippy content
});


tippy('.lvl2', {
  content: "Complete level 1 to unlock",
  followCursor: true,
  placement: 'top',
  allowHTML: true

});

tippy('.swimming', {
  content: "Complete level 1 to unlock",
  followCursor: true,
  placement: 'top',
  allowHTML: true

});

tippy('.lvl3', {
  content: "Complete level 1 & 2 to unlock",
  followCursor: true,
  placement: 'top',
  allowHTML: true

});
tippy('.bicycle', {
  content: "Complete level 1 & 2 to unlock",
  followCursor: true,
  placement: 'top',
  allowHTML: true

});


var bar_stacked = {
  tooltips: {
    enabled: true
  },
  scales: {

  },
  legend: {
    display: true
  }
};
// Define chart labels
const labels = ['Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday', 'Sunday'];
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["DAILY TRACKER"],
    datasets: [{
      label: "MONDAY",
      backgroundColor: "rgb(238, 176, 143)",
      data: [0]
    }, {
      data: [0],
      backgroundColor: "rgb(155, 95, 224)",
      label: "TUESDAY"
    }, {
      data: [0],
      backgroundColor: "rgb(236, 77, 96)",
      label: "WEDNESDAY"
    },
    {
      data: [0],
      backgroundColor: "rgb(139, 211, 70)",
      label: "THURSDAY"
    },
    {
      data: [0],
      backgroundColor: "rgb(239, 223, 72)",
      label: "FRIDAY"
    },
    {
      data: [0],
      backgroundColor: "rgb(249, 165, 44)",
      label: "SATURDAY"
    },
    {
      data: [0],
      backgroundColor: "rgb(214, 78, 18)",
      label: "SUNDAY"
    },]
  },
  options: bar_stacked,
});

const data = {
  labels: labels,
};

function add() {
  var v1 = parseInt(document.getElementById("mon").value);
  var v2 = parseInt(document.getElementById("tue").value);
  var v3 = parseInt(document.getElementById("wed").value);
  var v4 = parseInt(document.getElementById("thu").value);
  var v5 = parseInt(document.getElementById("fri").value);
  var v6 = parseInt(document.getElementById("sat").value);
  var v7 = parseInt(document.getElementById("sun").value);

  var result = v1 + v2 + v3 + v4 + v5 + v6 + v7;
  document.getElementById("txtresult").value = result;

  if (result > 70) {
    document.getElementById("totalMins").value = "Proceed to Next Level!";
  } else if (result < 70) {
    document.getElementById("totalMins").value = "Try Again!";
  }
}

//get input values
function graphMe() {

  var v1 = parseInt(document.getElementById("mon").value);
  var v2 = parseInt(document.getElementById("tue").value);
  var v3 = parseInt(document.getElementById("wed").value);
  var v4 = parseInt(document.getElementById("thu").value);
  var v5 = parseInt(document.getElementById("fri").value);
  var v6 = parseInt(document.getElementById("sat").value);
  var v7 = parseInt(document.getElementById("sun").value);

  myChart.data.datasets[0].data[0] = v1
  myChart.data.datasets[1].data[0] = v2
  myChart.data.datasets[2].data[0] = v3
  myChart.data.datasets[3].data[0] = v4
  myChart.data.datasets[4].data[0] = v5
  myChart.data.datasets[5].data[0] = v6
  myChart.data.datasets[6].data[0] = v7



  myChart.update();
}






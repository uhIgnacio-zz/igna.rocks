//Video volume
document.getElementById("vid").volume = 0.6;

//Main Function
mainActive = false;
setTimeout(() => {
  if (document.getElementById("vid").paused) {
    $("#clickToPlay").css("opacity", "1");
  } else {
    main();
  }
}, 1000);
function main() {
  if (mainActive) return;
  mainActive = true;
  $("#clickToPlay").css("opacity", "0");
  $("#main").css("opacity", "1");
  $("#widgetContainer").css("opacity", "1");
  $(".hitCount").css("opacity", "1");
  setTimeout(() => {
    $("#clickToPlay").css("display", "none");
  }, 1050);
  document.getElementById("vid").play();
}

//Start Main Function
$("#clickToPlay").click(() => {
  main();
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
function openVideo(src) {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("global-video-player");
  const source = document.getElementById("video-source");

  source.src = src;       // load the right video
  video.load();
  modal.style.display = "flex";
  video.play();
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("global-video-player");

  video.pause();
  video.currentTime = 0;
  modal.style.display = "none";
}

function closeOnOutside(event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeVideo();
  }
}
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");

    video.addEventListener("animationend", function () {
        video.pause(); 
    });
});

window.onload = function() {
    setTimeout(function() {
        document.getElementById('appear').classList.add('visible');
        document.getElementById('big').classList.add('cloud1');
        document.getElementById('small').classList.add('cloud2');
        document.getElementById('button').classList.add('press');
    }, 8000);
};


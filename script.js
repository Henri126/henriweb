document.addEventListener('DOMContentLoaded', function() {
    var openVideoButton = document.getElementById("openVideoButton");
    var videoModal = document.getElementById("videoModal");
    var closeVideoModal = document.getElementById("closeVideoModal");
    var videoInfoButton = document.getElementById("videoInfoButton");
    var videoInfoCard = document.getElementById("videoInfoCard");

    openVideoButton.addEventListener("click", function() {
        videoModal.style.display = "block";
    });

    closeVideoModal.addEventListener("click", function() {
        videoModal.style.display = "none";
    });

    videoInfoButton.addEventListener("click", function() {
        if (videoInfoCard.style.display === "none" || videoInfoCard.style.display === "") {
            videoInfoCard.style.display = "block";
        } else {
            videoInfoCard.style.display = "none";
        }
    });

    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        var timeString = hours + ":" + minutes + ":" + seconds;
        document.getElementById("clockDisplay").innerHTML = timeString;

        setTimeout(updateClock, 1000);
    }

    updateClock();

    videoInfoCard.style.display = "none";
});
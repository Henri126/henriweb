document.addEventListener('DOMContentLoaded', function() {
    var videoInfoButton = document.getElementById("videoInfoButton");
    var videoInfoCard = document.getElementById("videoInfoCard");

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
        var day = now.getDate();
        var month = now.getMonth() +1;
        var year = now.getFullYear();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        var timeString = hours + ":" + minutes + ":" + seconds;
        var dateString = day + "/" + month + "/" + year;

        document.getElementById("clockDisplay").innerHTML = timeString;
        document.getElementById("dateDisplay").innerHTML = dateString;

        setTimeout(updateClock, 1000);
    }

    updateClock();

    videoInfoCard.style.display = "none";
});
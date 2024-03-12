document.addEventListener('DOMContentLoaded', function() {
    var videoInfoButton = document.getElementById("videoInfoButton");
    var bandInfoButton = document.getElementById("bandInfoButton");
    var bandInfoCard = document.getElementById("bandInfoCard");
    var videoInfoCard = document.getElementById("videoInfoCard");
    var songInfoCard = document.getElementById("songInfoCard");
    var songInfoButton = document.getElementById("songInfoButton");
    var deathGripsCard = document.getElementById("deathGripsCard");
    var deathGrips = document.getElementById("deathGripsButton");

    videoInfoButton.addEventListener("click", function() {
        if (videoInfoCard.style.display === "none" || videoInfoCard.style.display === "") {
            videoInfoCard.style.display = "block";
        } else {
            videoInfoCard.style.display = "none";
        }
    });

    bandInfoButton.addEventListener("click", function() {
        if (bandInfoCard.style.display === "none" || bandInfoCard.style.display === "") {
            bandInfoCard.style.display = "block";
        } else {
           bandInfoCard.style.display = "none";
        }
    });

    songInfoButton.addEventListener("click", function() {
        if (songInfoCard.style.display === "none" || songInfoCard.style.display === "") {
            songInfoCard.style.display = "block";
        } else {
           songInfoCard.style.display = "none";
        }
    });


    deathGripsButton.addEventListener("click", function() {
        if (deathGripsCard.style.display === "none" || deathGripsCard.style.display === "") {
            deathGripsCard.style.display = "block";
        } else {
            deathGripsCard.style.display = "none";
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
    bandInfoCard.style.display = "none";
    songInfoCard.style.display = "none";
    deathGripsCard.style.display = "none";
});
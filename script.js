//your JS code here. If required.
function updateTime() {
            var currentDate = new Date();
            var timeString = currentDate.toLocaleTimeString();
            var dateString = currentDate.toLocaleDateString();

            var timerElement = document.getElementById("timer");
            timerElement.innerHTML =  dateString+","+timeString;
        }

        setInterval(updateTime, 1000); // Update time every second

<script>
        let isRunning = false;
        let startTime = 0;
        let interval;

        function startStop() {
            const button = document.getElementById('startStop');
            if (!isRunning) {
                button.textContent = 'Stop';
                startTimer();
            } else {
                button.textContent = 'Start';
                stopTimer();
            }
            isRunning = !isRunning;
        }

        function startTimer() {
            const circle = document.getElementById('circle');
            startTime = Date.now() - (startTime > 0 ? startTime : 0);
            interval = setInterval(function () {
                const elapsed = Date.now() - startTime;
                const minutes = Math.floor(elapsed / 60000);
                const seconds = Math.floor((elapsed % 60000) / 1000);
                document.getElementById('display').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                const rotation = (elapsed % 60000) / 60000 * 360;
                circle.style.transform = `rotate(${rotation}deg)`;
            }, 1000);
        }

        function stopTimer() {
            clearInterval(interval);
        }

        function reset() {
            stopTimer();
            isRunning = false;
            startTime = 0;
            document.getElementById('display').textContent = '00:00';
            document.getElementById('startStop').textContent = 'Start';
            document.getElementById('circle').style.transform = 'rotate(0deg)';
        }
    </script>

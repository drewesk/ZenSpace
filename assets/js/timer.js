$('#startTimer').click(function() {
  timerStart();
});

let totalSeconds = 5 * 60;
let timerInterval = null;

const endTime = moment().add(5, 'minutes');

function timerStart() {
  timerInterval = setInterval(function(){
    let secondsLeft = totalSeconds - moment().diff(endTime, 'seconds');
    // console.log('seconds-left: ', secondsLeft);

    totalSeconds--

    if(totalSeconds < 1) {
      clearInterval(timerInterval);
      alert('Meditation Complete!');
    }

    if(totalSeconds % 60 > 0) {
      const minutes = Math.floor(totalSeconds/60);
      const seconds = totalSeconds - (minutes * 60);
      $('#minutes').text(minutes);
      $('#seconds').text(seconds);
    }
  }, 1000);
}

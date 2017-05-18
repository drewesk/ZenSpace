// ZenSpace, Andrew Eskenazi
// Copyright (c) 2017 Copyright Holder All Rights Reserved.


// Cache Form

let currentPlayer = null;

if (localStorage.userName) {
  $('#userNameForm').hide();
  $('#cachedName').text(' back ' + localStorage.userName + '!');
}

$('#userNameForm').submit(saveUserName);

function saveUserName(event) {
  event.preventDefault();

  const userName = $('#userName').val();
  localStorage.userName = userName;

  $('#userNameForm').hide(3000);
  location.reload();
}

// Timer

let totalSeconds = 60;
let timerInterval = null;

function timerStart(minutes) {
  let endTime = moment().add(minutes, 'minutes');
  totalSeconds *= minutes;
  timerInterval = setInterval(function() {
    let secondsLeft = totalSeconds - moment().diff(endTime, 'seconds');
    // console.log('seconds-left: ', secondsLeft);

    totalSeconds--

    if (totalSeconds == 0) {
      currentPlayer.pause();
      clearInterval(timerInterval);
      alert('Meditation Complete!');
      $('#meditationOptions').show();

      location.reload();
    }

    if (totalSeconds % 60 > 0) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds - (minutes * 60);
      $('#minutes').text(minutes);
      $('#seconds').text(seconds);
    }
  }, 1000);
}

// Meditation Form

let $submit = $('#submitOptions');


$submit.click(function(event) {
  event.preventDefault();

  startMeditation();

  // for (var i = 0; i < spaceImages.length; i++) {
  //   spaceTimeout(i);
  // }

  for (var i = 1; i < spaceImages.length; i++) {
    (function(count) {
        setTimeout(function() {
          $('body').css('background', 'url(' + spaceImages[count] + ')');
        }, i * 10000);
    })(i);
  }


});

function startMeditation() {
  let $soundOption = $('#soundOptions').find(':selected').val();
  let $timeOption = $('input[type="radio"]:checked').attr('id');
  console.log($soundOption, $timeOption);

  if ($timeOption > 0) {
    switch ($soundOption) {
      case "Focus(guided by Sam Harris)":
        focusSelection();
        timerStart($timeOption);
        $('#meditationOptions').hide(4000);
        $('#inSession').hide(4000);
        break;
      case "Relax":
        relaxSelection();
        timerStart($timeOption);
        $('#meditationOptions').hide(4000);
        $('#inSession').hide(4000);
        break;
      case "Energize":
        energizeSelection();
        timerStart($timeOption);
        $('#meditationOptions').hide(4000);
        $('#inSession').hide(4000);
        break;
      default:
        alert('Not all options selected.');
    }
  } else {
    alert('Not all options selected.');
  }
}

// SoundCloud Config

SC.initialize({
  client_id: '7b9c5b47c81e949b866695aaee59f001'
});

function energizeSelection() {
  SC.stream("tracks/36831648").then(function(player) {
    player.play();
    currentPlayer = player;
  });
}

function relaxSelection() {
  SC.stream('/tracks/149844883').then(function(player) {
    player.play();
    currentPlayer = player;
  });
}

function focusSelection() {
  SC.stream('/tracks/112643452').then(function(player) { //Sam Harris guided meditation.
    player.play();
    currentPlayer = player;
  });
}

// ZenSpace, Andrew Eskenazi
// Copyright (c) 2017 Copyright Holder All Rights Reserved.

// function timeRemaining(endTime) {
//   let totalTime = Date.parse(endTime) - Date.parse(new Date());
//   let seconds = Math.floor((totalTime / 1000) % 60);
//   let minutes = Math.floor((totalTime / 1000 / 60) % 60);
//   return {
//     'total': totalTime,
//     'minutes': minutes,
//     'seconds': seconds
//   }
// }
//
// function initTimer(endTime) {
//   let $minutes = $('.minutes');
//   let $seconds = $('.seconds');
//
//   console.log($minutes, $seconds);
//
//   function refreshTimer() {
//     let totalTime = timeRemaining(endTime);
//     console.log(totalTime);
//
//     $minutes.append(`<label>${(totalTime.minutes)}</label>`);
//     $seconds.append(`<label>${(totalTime.seconds)}</label>`);
//
//     if(totalTime.total < 1) {
//       clearInterval(setInterval(refreshTimer, 1000));
//     }
//   }
//
//   refreshTimer();
//   console.log(refreshTimer())
//
// }
//
// let timerAmount = new Date(Date.parse(new Date()) + 5 * 60 * 1000);
// initTimer(timerAmount);
// console.log(initTimer(timerAmount));

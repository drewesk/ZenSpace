SC.initialize({
  client_id: '7b9c5b47c81e949b866695aaee59f001'
});

let focusButton = document.querySelector('#focusButton');
let relaxButton = document.querySelector('#relaxButton');
let energyButton = document.querySelector('#energyButton');

focusButton.addEventListener('click', focusSelection);

relaxButton.addEventListener('click', relaxSelection);

energyButton.addEventListener('click', energizeSelection);

function energizeSelection() {
  SC.stream("tracks/36831648").then(function(player){
    player.play();
  });
}

function relaxSelection(){
  SC.stream('/tracks/149844883').then(function(player){
    player.play();
  });
}

function focusSelection(){
  SC.stream('/tracks/112643452').then(function(player){//Sam Harris guided meditation.
    player.play();
  });
}

// let NASA_images = [];
// const API_URL = 'https://images-api.nasa.gov/search?q=space';
//
// $.get(API_URL)
// .then(function(NASAdata) {
//   console.log(NASAdata);
// });

spaceImages = [];

var settings = {
  "url": "https://cors-anywhere.herokuapp.com/https://images-api.nasa.gov/search?q=milky",
  "method": "GET",
}

$.ajax(settings).done(function (response) {
  let nasaItemsArray = response.collection.items;

  for (var i = 0; i < nasaItemsArray.length; i++) {
    if ((nasaItemsArray[i].links[0].href.slice(-3)) == 'jpg'){
      spaceImages.push(nasaItemsArray[i].links[0].href);
    }
  }
});

console.log(spaceImages);

// function spaceTimeout(i) {
//   setTimeout(function() {
//     $('#spacePopulate').attr('src', spaceImages[i]);
//  }, 3000);
// }


//
//
// function updateSpaceCard(imageUrl) {
//   $('#spacePopulate').attr('src') = imageUrl;
// }

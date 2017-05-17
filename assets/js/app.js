// ZenSpace, Andrew Eskenazi
// Copyright (c) 2017 Copyright Holder All Rights Reserved.

if(localStorage.userName) {
  $('#userNameForm').hide();
}

$('#userNameForm').submit(saveUserName);

function saveUserName(event){
  event.preventDefault();

  const userName = $('#userName').val();
  localStorage.userName = userName;

  $('#userNameForm').hide();
  location.reload();
}
$('#cachedName').text(localStorage.userName);

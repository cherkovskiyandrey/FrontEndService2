//$(function(){
//  var $phone = $('#phone');
//  var lastPhone = $phone.val();
//  $('body').on('keyup paste', $phone, function(event){
//    if (/^\d*$/.test($phone.val())) {
//      lastPhone = $phone.val();
//    } else {
//      $phone.val(lastPhone);
//    }
//  });
//});
//
//$(function(){
//  function send(){
//    var $form = $('form');
//    $.ajax({url: $form.attr("action"), method: $form.attr("method"), data: $form.serialize() })
//      .then(function(response){ console.log(response); })
//
//  }
//  var $submit = $('#submit');
//  var $password = $('.form-group.password')
//  $('body').on('submit', $submit, function(event){
//      event.preventDefault();
//      $password.toggleClass('has-error', !$('#password').val());
//      if ($('#password').val()){
//        send();
//      }
//  });
//});


// Обработка ввода
$(function(){
  function drawUsers(users){
    var $users = $('<div />')
    var xxx = $.each(users, function(index, user){
     $users.append('<div>'+user.name+'</div>')
    })
    $('#users').html($users.html());
  }

  function updateUsers(){
    var $form = $('form');
    var randDigit = function(){ return Math.floor(Math.random() * 10); }
    $.ajax({url: $form.attr("action"), method: $form.attr("method") })
      //.then(function(users){ drawUsers(users.slice(0, randDigit())); })
      .then(function(users){ drawUsers(users); })
  }
  $('body').on('click', $('#update'), function(event){
      updateUsers();
  });
});





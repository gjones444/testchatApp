$(document).ready(function() {

//shows room names
  $.ajax({
    method: 'GET',
    url: '/api/chatrooms'
  }).then(function(results) {
    var newRow, roomnum, doorRm, user_count, xButton;
    for (var i = 0; i < results.chatrooms.length; i++) {
      newRow = $('<tr class="song-row">')
      joinbtn = $('<button id="joinrm" data-room_name=' + results.chatrooms[i].room_name + '>Join</button>')
      roomnum = $('<td>');
      doorRm = $('<td>');
      user_count = $('<td>');
      xButton = $('<button class="btn btn-danger x-button" data-id=' + results.chatrooms[i].room_name.id + '>');
      xButton.css({
        padding: "0px 4px 0px 4px",
        float: 'right'
      })
      xButton.text("x");

      roomnum.text(i + 1);
      doorRm.text(results.chatrooms[i].room_name);
      user_count.text(results.chatrooms[i].rowCount);
      newRow.append(roomnum).append(doorRm).append(user_count).append(joinbtn).append(xButton);
      $('#tbody').append(newRow)
    }
  })

  $(document).on('click', '#joinrm', function() {
    var roomName = $(this).data('room_name');
    window.location.href = '/chatroom-joined-' + roomName;
  })




  function updateChatRoom() {
    $.ajax({
      method: 'GET',
      url: '/api/chatrooms'
    }).then(function(results) {
      console.log(results);
      var newRow, roomnum, doorRm, user_count, xButton;
      for (var i = 0; i < results.chatrooms.length; i++) {
        newRow = $('<tr class="song-row">')
        joinbtn = $('<button id="joinrm" data-room_name=' + results.chatrooms[i].room_name + '>Join</button>')
        roomnum = $('<td>');
        doorRm = $('<td>');
        user_count = $('<td>');
        xButton = $('<button class="btn btn-danger x-button" data-id=' + results.chatrooms[i].room_name.id + '>');
        xButton.css({
          padding: "0px 0px 0px 4px",
          float: 'right'
        })
        xButton.text("x");

        roomnum.text(i + 1);
        doorRm.text(results.chatrooms[i].room_name);
        user_count.text(results.chatrooms[i].rowCount);
        newRow.append(roomnum).append(doorRm).append(user_count).append(joinbtn).append(xButton);
        $('#tbody').append(newRow)
      }
      $('.container').append(newRow)
    })

    updateChatroom();

    $('#submit-this').on('submit', function() {
      //Adds new row to Table
      $.ajax({
        method: 'POST',
        url: '/api/create-room',
        data: $('#name-input').val()
      }).then(function(yep){
      })
    })

    var Obj = {
      name: $('#name-input').val()
    }

    $.ajax({
      method: 'POST',
      url: '/api/create-room',
      dataType: 'json',
      data: JSON.stringify(Obj),
      contentType: 'application/json'
    }).then(function(res) {
      if (res === "null_message") {
        alert("Please Enter Room Name")
      }
      updateChatroom();
    });
    $('#name-input').val("");
  }
});
// $(document).ready(function() {
//
//   $.ajax({
//     method: 'GET',
//     url: '/api/chatrooms'
//   }).then(function(results) {
//     var newRow, roomnum, doorRm, user_count, xButton;
//     for (var i = 0; i < results.chatrooms.length; i++) {
//       newRow = $('<tr class="song-row">')
//       joinbtn = $('<button id="joinrm" data-room_name=' + results.chatrooms[i].room_name + '>Join</button>')
//       roomnum = $('<td>');
//       doorRm = $('<td>');
//       user_count = $('<td>');
//       xButton = $('<button class="btn btn-danger x-button" data-id=' + results.chatrooms[i].room_name.id + '>');
//       xButton.css({
//         padding: "0px 4px 0px 4px",
//         float: 'right'
//       })
//       xButton.text("x");
//
//       roomnum.text(i + 1);
//       doorRm.text(results.chatrooms[i].room_name);
//       user_count.text(results.chatrooms[i].rowCount);
//       newRow.append(roomnum).append(doorRm).append(user_count).append(joinbtn).append(xButton);
//       $('#tbody').append(newRow)
//     }
//   });
//
//   $(document).on('click', '#joinrm', function() {
//     var roomName = $(this).data('room_name');
//     window.location.href = '/chatroom-joined-' + roomName;
//   });
// })
//
// $(document).on('click', '#joinrm', function() {
//   var roomName = $(this).data('room_name');
//   window.location.href = '/chatroom-joined-' + roomName;
// });
//
// function addRoom(){
//   if (true) {
//
//   }
//   $.ajax({
//   	method: 'POST',
//   	url: '/api/create-room'
//   }).then(function(yep){})
// }
//
// // $('#guestbook-form').on('submit', function(e) {
// //   e.preventDefault();
//
// // var createRoomObj = {
// //   name: $('#name-input').val()
// // }
// //
// // $.ajax({
// // 	method: 'POST',
// // 	url: '/api/message',
// // 	dataType: 'json',
// // 	data: JSON.stringify(createRoomObj),
// // 	contentType: 'application/json'
// // }).then(function(res){
// // 	if(res === "null_message"){
// // 		alert("Please Enter Name")
// // 	}
// // 	// appendGuestbook();
// // });
//
//
//
//
// //   var createBtn, roomInput, roomValue, submitBtn;
// //   createBtn = $('<input type="text" id="createinput" value"Enter Room Name">')
// //   var div = $('<div class="newDiv"> ')
// //   submitBtn = $('<button id=submitBtn type="submit">Submit</button>')
// //   div.append(createBtn).append(submitBtn)
// //   $('.There').append(div)
// //
// //   $(document).on('click', '#submitBtn', function(e) {
// //     var roomName = $(this).data('room_name');
// //     if (this.id == '#submitBtn') {
// //       $.ajax({
// //         data: user_created_room,
// //         method: 'POST',
// //         url: '/api/create-room',
// //         success: function(record) {
// //           alert("Data Save: " + data);
// //         }
// //       });
// //     };
// //   });
// // });
// $.ajax({
// 	method: 'POST',
// 	url: '/api/create-room'
// }).then(function(yep){
// 	var createBtn, roomInput, roomValue;
// 	createBtn = $('<input type="text">')
// 	var div = $('<div class="newDiv"> ')
// 	div.append(createBtn)
// 	$('.There').append(div)
// 	// for(var i = 0; i < yep.chatrooms.length; i++){
// 	// 	newRow = $('<div class="song-row">')
// 	// 	roomInput = $('<input class="createoroom" type="text" name="room_name" value="">')
// 	// 	roomValue = $('.createoroom').val();
// 	// 	createBtn = $('<button id="createBtn" data-room_name=' + roomValue.split(" ").join("+").toLowerCase() +'>Create A Room</button>' )
// 	// 	newRow.append(createBtn).append(roomInput);
// 	// 	$('.There').append(newRow)
// 	// }
// });

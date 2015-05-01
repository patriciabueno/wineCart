angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Breakfast',
    lastText: 'Start your day with energy!',/* <img src="img/Breakfast.jpg"> */
    face: 'img/Breakfast.jpg'/* https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png */
  }, {
    id: 1,
    name: 'Lunch',
    lastText: 'Keep your body & mind going...',
    face: 'Lunch.jpeg'
  }, {
    id: 2,
    name: 'Desserts',
    lastText: 'Yumy...Time for a break!',
    face:  'Desserts.jpg '/* 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg' */
  }, {
    id: 3,
    name: 'Dinner',
    lastText: 'Take it easy...',
    face: 'Dinner.jpg' /* 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg' */
  }]; /* {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg' */
  /* }]; */

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {


    var inbox = 0;
    var updates = 0;

    var rippleChatElem = document.querySelector("#chat-manager-item-instrument-XRP");

     var inboxElem = document.querySelector(".notifications-count-number");

     if(inboxElem != null){
       inbox = parseInt(inboxElem.innerText);
     }


     if(rippleChatElem != null){

       var badgeElem = rippleChatElem.querySelector(".chat-manager-item-avatar-badge");

       if(badgeElem != null){
         updates = parseInt(badgeElem.innerText);
       }
     }


     if(inbox > 0) {
       Franz.setBadge(inbox);
     }
     else{
       Franz.setBadge(0, updates > 0);
     }

  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};

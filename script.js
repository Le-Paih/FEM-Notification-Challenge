unRead = document.querySelectorAll('.unread');
read = document.querySelectorAll('.notif');
markAll = document.querySelector('.mark');
notifNum = document.querySelector('.notif-number');

notifNum.innerText = unRead.length

unRead.forEach((message) => { //the 'message' can be any word, it just has to consisten throughout the rest of the code/function
    message.addEventListener('click', () => {
        message.classList.remove('unread');
        const newUnreadMessages = document.querySelectorAll('.unread'); //this is the new amount of unread messages after clicking the notification 
        notifNum.innerText = newUnreadMessages.length; //self explanatory, shows the amount of unread messages
    })
});

markAll.addEventListener('click', () => {
    unRead.forEach((message) => {
        message.classList.remove('unread');
        const newUnreadMessages = document.querySelectorAll('.unread');
        notifNum.innerText = newUnreadMessages.length;
    })
})
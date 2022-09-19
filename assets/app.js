// VARIABLES
const notificationItems = document.querySelectorAll('li.main_notification--body_item');
const noRead = document.querySelector('span#no_read');
const btnAllRead = document.querySelector('button#all_read');

//EVENT LISTENER
eventListener()

function eventListener() {
    document.addEventListener('DOMContentLoaded', addClassNotifications)
    readNotificationOnClick();
    markAllAsRead();
    setTimeout(() => {
        countNotReadNotifications();
    }, 500)
}

function addClassNotifications() {
    for(let i = 0; i < notificationItems.length; i++) {
        notificationItems[i].classList.add('notification-no-read');
    }
}

function readNotificationOnClick() {
    notificationItems.forEach((noti) => {
        noti.onclick = function() {
            noti.classList.remove('notification-no-read')
            countNotReadNotifications();
        }
    })
}

function markAllAsRead() {
    btnAllRead.onclick = function () {
        const notReadItem = document.querySelectorAll('li.main_notification--body_item')
        
        for(let i = 0; i < notReadItem.length; i++) {
            if(!notReadItem[i].classList.contains('notification-no-read')){
                notReadItem[i].classList.add('notification-no-read')
            }
        }
        countNotReadNotifications();
    }
}

function countNotReadNotifications() {
    const notReadNotifications = document.querySelectorAll('.notification-no-read')
    noRead.textContent = notReadNotifications.length;
}
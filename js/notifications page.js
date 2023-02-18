let notRead = document.querySelectorAll(".notifications .not-read");
let notificationsNumber= document.querySelector(".notifications-number");
let makeAllRead = document.querySelector(".all-read");




notificationsNumber.innerHTML = notRead.length


    makeAllRead.onclick = function(){
        notRead.forEach((e) => {
            e.classList.remove("not-read")
        })
        notificationsNumber.innerHTML = `0`
        makeAllRead.remove()
 }

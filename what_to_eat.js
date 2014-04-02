/**
 * Created by Ruoxi Lu on 3/27/14.
 */


/*
 addDish()
 Let user modify the menu, add new items onto the menu.
 Take user input and set off shuffling at the same time.
 */

function addDish() {
    menu = $('#myMenu').val().split("，");
    var newMenu = [];

    for (i = 0; i < menu.length; i++) {
        if (menu[i] != '') {
            newMenu.push(menu[i]);
        }
    }
    menu = newMenu;
    alert(menu);
    startShuffle();
}


var timer;

/*
 startShuffle()
 Set off suffling.
 */
function startShuffle() {
    clearInterval(timer);
    timer = setInterval('shuffleDisplay()', 80);
}

/*
 confirm to stop shuffling and make a choice
 */
//
function stopShuffle() {
    clearInterval(timer);
}

/*
 start to shuffle
 */

function shuffleDisplay() {
    $('#shuffleArea').html(menu[ parseInt(Math.random() * menu.length)]);
}


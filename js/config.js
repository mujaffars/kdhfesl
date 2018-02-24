var screenHeight = parseInt($(window).height());
var screenWidth = screenHeight * 56.25 / 100;
var btnchw = screenHeight * 10.25 / 100;

if (screenWidth < screenHeight) {
    var fontSize = parseInt(eval(eval(screenWidth * 7) / 100));
    var recordFontSize = parseInt(eval(eval(screenWidth * 4) / 100));
} else {
    var fontSize = parseInt(eval(eval(screenHeight * 7) / 100));
    var recordFontSize = parseInt(eval(eval(screenHeight * 4) / 100));
}

function getSetLocalstorage(getSetFor, lvlId, getSet, psms) {
    if (getSetFor === 'pzlid') {
        pzlid = localStorage.getItem("pzlid");
        if (getSet === 'define') {
            if (localStorage.getItem("pzlid") === null || localStorage.getItem("pzlid") === undefined) {
                localStorage.setItem('pzlid', 1);
            }
        } else if (getSet === 'setnext') {
            localStorage.setItem('pzlid', eval(parseInt(localStorage.getItem("pzlid")) + 1));
            return localStorage.getItem("pzlid");
        } else if (getSet === 'get') {
            return localStorage.getItem("pzlid");
        }
        return parseInt(localStorage.getItem("pzlid"));
    } else if (getSetFor === 'coins') {
        coins = localStorage.getItem("coins");
        if (getSet === 'define') {
            if (localStorage.getItem("coins") === null || localStorage.getItem("coins") === undefined) {
                localStorage.setItem('coins', 50);
            }
        } else if (getSet === 'plus') {
            localStorage.setItem('coins', eval(parseInt(localStorage.getItem("coins")) + psms));
        } else if (getSet === 'minus') {
            if (eval(parseInt(localStorage.getItem("coins")) - psms) <= 0) {
                localStorage.setItem('coins', 0);
            } else {
                localStorage.setItem('coins', eval(parseInt(localStorage.getItem("coins")) - psms));
            }
        } else if (getSet === 'get') {
            return localStorage.getItem("coins");
        }
        $('.icon_coins_no').text(localStorage.getItem("coins"));
        return parseInt(localStorage.getItem("coins"));
    } else if (getSetFor === 'msgid') {
        if (getSet === 'define') {
            if (localStorage.getItem("msgid") === null || localStorage.getItem("msgid") === undefined) {
                localStorage.setItem('msgid', 1);
            }
        } else if (getSet === 'setnext') {
            localStorage.setItem('msgid', eval(parseInt(localStorage.getItem("msgid")) + 1));
            return localStorage.getItem("msgid");
        } else if (getSet === 'get') {
            return localStorage.getItem("msgid");
        }
    }
}
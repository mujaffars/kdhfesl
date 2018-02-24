var dbShell;
var btnActive = true;

(function () {
    getSetLocalstorage('pzlid', '', 'define');

    startpzl();
})();

function startpzl() {
    //$('.pzlcontent').addClass('d-none');
    var pzlId = getSetLocalstorage('pzlid', '', 'get');
    //$('.pzl' + pzlId).removeClass('d-none');

    $('.pzl1').click(function () {
        $('.pzl1').fadeOut('fast');
        getSetLocalstorage('pzlid', '', 'setnext');
        startpzl();
    })

    // 2
    $('.pzl2').find('.p-2').addClass('d-none');
    var cntUnhide = 1;
    $('.pzl2').find('.btn').click(function () {
        $('.pzl2').find('.blk' + cntUnhide).removeClass('d-none').addClass('d-block');
        cntUnhide++;
        if (cntUnhide == 6) {
            $('.pzl2').fadeOut('slow');
            getSetLocalstorage('pzlid', '', 'setnext');
            //startpzl();
        }
    })

    var clickNo = 0;
    $('.pzl3').find('.btn').click(function () {
        var btnno = parseInt($(this).attr('btnno'));

        if (btnno > clickNo) {
            if (btnno == 6) {
                $('.pzl3').find('.btn7').removeClass('d-none');
                $('.pzl3').fadeOut('slow');
                getSetLocalstorage('pzlid', '', 'setnext');
            } else {
                $('.pzl3').find('.btn' + eval(btnno + 1)).removeClass('d-none');
            }
            clickNo++;
        } else {
            for (var i = 2; i <= 7; i++) {
                $('.pzl3').find('.btn' + i).addClass('d-none');
            }
            clickNo = 0;
        }
    })

    // 4
    $(".draggable").draggable();

    // 5
    $("#sortable").sortable({
        revert: true
    });

    var counts = [0, 0, 0];
    $("#draggable").draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid",
        stop: function () {
            var cnt = 1;
            var done = true;
            $('.pzl5').find('#sortable').find('li').each(function () {
                if (cnt < 5 && $(this).hasClass('btn-dark')) {
                    done = false;
                }
                cnt++;
            })

            if (done) {

            }
        },
        drag: function () {
            counts[ 1 ]++;
            console.log(counts[ 1 ]);
        },
    });
    $("ul, li").disableSelection();

    // 6
    var counts = [0, 20, 0];
    $(".pzl6").find("#draggable").draggable({
        revert: "invalid",
        stop: function () {
            if (counts[1] > 110) {
                $(this).attr('style', 'height:' + eval(counts[1] - 10) + "%; width:" + eval(counts[1] - 0) + "%; top:0; left:0;");
            }
        },
        drag: function () {
            counts[1] = eval(counts[1] + 1);
            $(this).attr('style', 'height:' + eval(counts[1] - 10) + "%; width:" + eval(counts[1] - 0) + "%; top:0; left:0;");
            if (counts[1] > 110) {
                console.log('done');
            }
        },
    });

    $("#pzl7Sortable").sortable({
        revert: true,
        stop: function ( ) {
            var cnt = 1;
            var done = true;
            $('#pzl7Sortable').find('li').each(function () {
                if (cnt != $(this).attr('shadeno')) {
                    done = false;
                }
                cnt++;
            })
            if (done) {
                console.log('done');
            }
        }
    });

    $("#resizable").resizable();

    $('.pzl8').find('.d-block').each(function () {
        $(this).draggable({
            axis: "x",
            stop: function () {
                var setAll = true;
                $('.pzl8').find('.d-block').each(function () {
                    console.log(parseInt($(this).css('left')));
                    if (parseInt($(this).css('left')) > 6) {
                        setAll = false;
                    }
                })
                if (setAll) {
                    alert('done')
                }
            }
        });
    });

//    $("#draggable2").draggable({axis: "x"});

    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', deviceMotionHandler);
        //setTimeout(stopJump, 3 * 1000);
    }
}

function deviceMotionHandler(motion) {
    console.log(motion);
}
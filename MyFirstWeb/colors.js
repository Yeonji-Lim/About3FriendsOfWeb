var Links = {
    setColor:function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length) {
        //     alist[i].style.color = color;
        //     i = i+1;
        // }
        $('a').css('color', color); // $('a') : 이 웹페이지의 모든 a 태그를 jQuery로 제어하겠다.
    }
}
// function aSetColor(color) {
//     var alist = document.querySelectorAll('a');
//     var i = 0;
//     while(i < alist.length) {
//         alist[i].style.color = color;
//         i = i+1;
//     }
// }
var Body = {
    setColor:function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
// function bodySetColor(color) {
//     document.querySelector('body').style.color = color;
// }
// function bodyBackgroundSetColor(color) {
//     document.querySelector('body').style.backgroundColor = color;
// }
function night_day_handler(self) {
    if(self.value === 'night') {
        Body.setBackgroundColor('midnightblue');
        Body.setColor('darkgray')
        Links.setColor('plum');
        self.value = 'day';
    } else {
        Body.setBackgroundColor('blanchedalmond');
        Body.setColor('darkslateblue');
        Links.setColor('palevioletred');
        self.value = 'night';
    }
}
// 主页的数据请求
//轮播图的数据渲染
ajax({
    type: 'get',
    url: 'http://192.168.0.137:3000/report/hot',
    success: function (result) {
        let arr1= result.slice(3,7)
        console.log(arr1)
        // let arr2=[...arr1,...arr1]
        var tmpText = doT.template(document.getElementById('li_tmpl0').innerText);
        document.getElementById("list0").innerHTML = tmpText(arr1);
    }
});
// 热门试用
    ajax({
        type: 'get',
        url: 'http://192.168.0.137:3000/report/hot',
        success: function (result) {
            let arr1= result.slice(3,7)
            let arr2=[...arr1,...arr1]
            var tmpText = doT.template(document.getElementById('li_tmpl').innerText);
            document.getElementById("list").innerHTML = tmpText(arr2);
        }
    });
//导购精选
ajax({
    type: 'get',
    url: 'http://192.168.0.137:3000/play/new',
    success: function (result) {
        let arr1= result[1].slice(2,6)
        console.log(arr1);
        var tmpText = doT.template(document.getElementById('li_tmpl2').innerText);
        document.getElementById("list2").innerHTML = tmpText(arr1);
    }
});
// 发现酷玩
ajax({
    type: 'get',
    url: 'http://192.168.0.137:3000/play/new',
    success: function (result) {
        let arr1=result[1].slice(4,8)
        let arr2=[...arr1,...arr1,...arr1,...arr1]
        var tmpText = doT.template(document.getElementById('li_tmpl3').innerText);
        document.getElementById("list3").innerHTML = tmpText(arr2);
    }
});
//导购的数据请求模块
// 最新
ajax(   {
    type: 'get',
    url: 'http://192.168.0.137:3000/play/new',
    success: function (result) {
        let arr1= result[1].slice(2,6)
        let arr2=[...arr1,...arr1,...arr1,...arr1]
        console.log(arr2)
        var tmpText = doT.template(document.getElementById('li_tmpl4').innerText);
        document.getElementById("list4").innerHTML = tmpText(arr2);
    }
});
// 最热
ajax(   {
    type: 'get',
    url: 'http://192.168.0.137:3000/play/new',
    success: function (result) {
        let arr1= result[1].slice(1,5)
        let arr2=[...arr1,...arr1,...arr1,...arr1]
        console.log(arr2)
        var tmpText = doT.template(document.getElementById('li_tmp5').innerText);
        document.getElementById("list5").innerHTML = tmpText(arr2);
    }
});
//试用的数据请求模块
//全部
ajax(   {
    type: 'get',
    url: 'http://192.168.0.137:3000/useing/public',
    success: function (result) {
        var tmpText = doT.template(document.getElementById('li_tmp6').innerHTML);
        document.getElementById("list6").innerHTML = tmpText(result.slice(0,12));
    }
});
//申请
ajax(   {
    type: 'get',
    url: 'http://192.168.0.137:3000/useing/public',
    success: function (result) {
        let array1=result.slice(8,12)
        let array2=[...array1,...array1,...array1]
        var tmpText = doT.template(document.getElementById('li_tmp7').innerHTML);
        document.getElementById("list7").innerHTML = tmpText(array2);
    }
});
// 试用
ajax(   {
    type: 'get',
    url: 'http://192.168.0.137:3000/useing/public',
    success: function (result) {
        let array1=result.slice(5,13)
        let array2=[...array1,...result.slice(6,10)]
        var tmpText = doT.template(document.getElementById('li_tmp8').innerHTML);
        document.getElementById("list8").innerHTML = tmpText(array2);
    }
});
// 已结束
ajax(   {
    type: 'get',
    url: 'http://192.168.0.137:3000/useing/public',
    success: function (result) {
        let array1=result.slice(8,12)
        let array2=[...array1,...array1,...result.slice(6,10)]
        var tmpText = doT.template(document.getElementById('li_tmp9').innerHTML);
        document.getElementById("list9").innerHTML = tmpText(array2);
    }
});
//体验师专享
ajax(   {
    type: 'get',
    url: 'http://192.168.0.137:3000/useing/master',
    success: function (result) {
        let array1=result.slice(8,12)
        let array2=[...array1,...array1,...result.slice(6,10)]
        var tmpText = doT.template(document.getElementById('li_tmp10').innerHTML);
        document.getElementById("list10").innerHTML = tmpText(array2);
    }
});

// 倒计时
function timer() {
    var future = new Date("2021-08-01 00:00:00");
    var now = new Date();
    let tian = document.querySelector('.day')
    let shi = document.querySelector('.hour')
    let fen = document.querySelector('.minute')
    let miao = document.querySelector('.miao')
    // 相差的秒数
    var seconds = (future - now) / 1000;
    // 相差的天数
    var day = parseInt(seconds / 86400);
    // 相差的小时数
    var hour = parseInt(seconds / 3600) % 24;
    // 相差的分钟
    var minute = parseInt(seconds / 60) % 60;
    // 相差的秒数
    var second = parseInt(seconds % 60);
    tian.innerHTML = day
    shi.innerHTML = hour
    fen.innerHTML = minute
    miao.innerHTML = second

}

timer();
setInterval(timer, 1000)
// 轮播图
let uls = document.querySelectorAll('.uls')
let leftbtn = document.querySelector('.leftbtn')
let rightbtn = document.querySelector('.rightbtn')
let div = document.querySelector(".viewpaper")
var imgWidth = uls[0].offsetWidth;

// console.log(uls,length,rightbtn,div)
var focusIndex = 0;
var flag = true;

function play(index) {
    // 滚动的距离 
    var offsetLeft = -index * imgWidth;
    console.log(offsetLeft)
    // 图片滚动
    animate(div, offsetLeft, function() {
        // 判断是否是最后一张图，如果是则不加动画再跳到第一张
        if (index == uls.length - 1) {
            div.style.left = 0;
        }
        flag = true;
    })
}

leftbtn.onclick = function() {
    if (flag) {
        flag = false;
        if (focusIndex == 0) {
            div.style.left = -(uls.length - 1) * imgWidth + "px"
            focusIndex = uls.length - 1;
        }

        focusIndex = focusIndex > 0 ? --focusIndex : imgs.length - 1;

        play(focusIndex);
    }
}

rightbtn.onclick = function() {
    if (flag) {
        flag = false;
        focusIndex = focusIndex < uls.length - 1 ? ++focusIndex : 0;
        play(focusIndex);
    }

}

jsq()

function jsq() {
    js = setInterval(function() {
        rightbtn.click()
    }, 2000)
}
// 鼠标移入播放暂停
// div.onmouseover = function() {
//     clearInterval(js)
// }
// 鼠标移除播放开始
// div.onmouseleave = function() {
//     jsq()
// }


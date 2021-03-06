function animate(obj, option){
    clearInterval(obj.timer);
    obj.timer = setInterval(function (){
        var flag =  true;
        for(var k in option){
            var leader = parseInt(getStyle(obj, k))|| 0;
            var target = option[k];
            var step = (target - leader) / 10;
            step = step > 0? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + 'px';
            if(leader != target){
                flag = false;
            }
        }
            if(flag){
                clearInterval(obj.timer);
            }
        }, 15);
    }
    function getStyle(obj, attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(obj, null)[attr];
        }else{
            return obj.currentStyle[attr];
        }
    }
    var obj = document.getElementById('box');
    obj.onclick = function(){
        var left = parseInt(Math.random()* 400)
        var top = parseInt(Math.random()* 600)
        animate(obj, {'left':left, 'top':top});
    };

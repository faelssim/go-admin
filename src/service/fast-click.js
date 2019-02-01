HTMLElement.prototype.tap=HTMLElement.prototype.tap||function (callBack) {
    var myTapStart=0,
        myTapEnd=0,
        timeTap=300;
    this.addEventListener("touchstart",function (e) {
        //获取touchstart事件的时间戳
        myTapStart=e.timeStamp;
        //changedTouchs是事件对象TouchEvent上面的属性,上面存储了一个当前操作的信息。
        let point=e.changedTouches[0];
       this.strX=point.pageX;
       this.strY=point.pageY;
       this.isMove=false;
    },false);
    this.addEventListener("touchmove",function (e) {
        let point=e.changedTouches[0];
        let changeX=point.pageX-this.strX;
        let changeY=point.pageY-this.strY;
        if(Math.abs(changeX)>10||Math.abs(changeY)>10){
            this.isMove=true;
        }
    },false);
    this.addEventListener("touchend",function (e) {
        //获取touchend事件的时间戳
        myTapEnd=e.timeStamp;
        timeTap=myTapEnd-myTapStart;
        if(!this.isMove&&timeTap<=300){
            callBack();
        }
    },false);
};
/**
 * Created by Administrator on 2016/9/10 0010.
 */
var flag=true;
$(".nav-btnl").click(function(){
    if(flag){
        $(".nav-dots span").css("transform","translate(730px,0)")
        $(".nav-btnl").css("transform","translate(0,0) rotate(540deg)")
        flag=false;
    }else{
        $(".nav-dots span").css("transform","translate(0px,0)")
        $(".nav-btnl").css("transform","translate(0,0) rotate(0deg)")
        flag=true;
    }
})


//$(".demo-1 .deco-skills").mouseover(function() {
//    var x=Math.random()*100+"px";
//    var y=Math.random()*100+"px";
//  for(var i=0; i<9; i++){
//      $(".demo-1 .deco-skills p").css("transform", "translate(x,y)")
//  }
//
//
//})

var span=document.querySelectorAll(".demo-1 .deco-skills p");
setInterval(function(){
    for(var i=0;i<span.length;i++){
        span[i].style.opacity="1"
        span[i].style.transform="translate("+(200*Math.random()-120)+"px,"+(200*Math.random()-120)+"px)";
        span[i].style.color="rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")"
    }
},2000)



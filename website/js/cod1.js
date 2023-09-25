$(function(){


// var home1= $("p").not(".ignore")
// $("p").not(".ignore").css({"color": "red", "border": "2px solid red"});
// $("p").filter(".ignore").css("background-color", "yellow");
// console.log(home1);


$("p:contains('REPLACE_ME')").css("color","red");


$(".special").css("color","blue");

$(":header").css("color","green");

$("li").css("color","gray");

$("button").click(function(){
    $(".mov").animate({
    left: '300px'});
    
});


});



$(function() {



    // var x = 0;
    // var y = 16;
    
    // $(".b1").click(function(){
    //     x++;
    //     y++;
    //     $("p").css("fontSize", y+"px");
    //     $("p").text(x);
    // });

    // $(".b2").click(function(){
    //     x--;
    //     y--;
    //     $("p").css("fontSize", y+"px");
    //     $("p").text(x);
    // });
    
    // $(".b3").click(function(){
    //     x=0
    //     y=16
    //     $("p").css("fontSize", y+"px");
    //     $("p").text(x);
    // }); 
    
})



// var x =0;
// var y =16;
// var p1 =document.querySelector(".plus");
// var p2 =document.querySelector(".manes");
// var p3 =document.querySelector(".rest");

// p1.addEventListener("click",function(){
// document.querySelector("p").innerHTML = ++x;
// document.querySelector("p").style.fontSize = (y++)+("px");
// });
// p2.addEventListener("click",function(){
//     document.querySelector("p").innerHTML = x--;
//     document.querySelector("p").style.fontSize = (y--)+("px");
// });

// p3.addEventListener("click",function(){
//     x=0;
//     y =16;
//     document.querySelector("p").innerHTML = 0;
//     document.querySelector("p").style.fontSize = 16+"px";
    
// });

// var my_number =20223138;
// var my_name ="Mohammed";
// var my_secName ="Tareq";
// var fill_name = my_name +" "+ my_secName;
// var my_age = 19;
// var success = true;
// var my_array =[20223138 , "Mohammed" , 19 , true]
// var my_object = {name: "mohammed", age: 19 , success: true};
// console.log(my_number);
// console.log(fill_name);
// console.log(my_age);
// console.log(success);
// console.log(my_array);
// console.log(my_object);

// say("Mohammed");
// function say(str){
//     for(var i=0; i < 10 ;i++){
//         console.log(str);
// }
// }

// var title = document.querySelector("h1");
// title.innerHTML = "Mohammed";
// title.style.fontSize = "80px";
// title.style.color = "red";

// title.id = "gol";
// title.className = "title";
// title.classList.add("GO");

// var b1 = document.querySelector("button");

// b1.addEventListener("click", function(){
//     title.style.color = "black";
// });

// var b2 = document.querySelector("input");
// var b3 = document.querySelector("button");
// b3.addEventListener("click" , function(){
//     b2.innerHTML = " ";
// }
// );



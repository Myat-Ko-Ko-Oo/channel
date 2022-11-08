menulist =document.querySelector(".menulist")
li = menulist.querySelectorAll("li")
menulisthover = document.querySelectorAll(".navparl")
overlayhover = document.querySelectorAll(".navparll")
hover = document.querySelector(".hover")
line1 = document.querySelector(".line1")
line2 = document.querySelector(".line2")
line3 = document.querySelector(".line3")
menu = document.querySelector(".menu")
ul = document.querySelector(".overlaymenulist")
overlayli = ul.querySelectorAll("li")
overlaytag = document.querySelector(".overlaymenu")
array=[]
arrayoverlay=[]
arrayleft=[]
   
   
menu.addEventListener("click",()=>{
if(!menu.classList.contains("active")){
line2.style.opacity = "0"
line1.classList.add("active")
line3.classList.add("active")
menu.classList.add("active")
overlaytag.classList.add("active")
// overlayli.style.transition = "all 2s";
for(el of overlayli){
    el.classList.add("animate__slideInUp")
}

}else{
    line2.style.opacity = "1"
line1.classList.remove("active")
line3.classList.remove("active")
menu.classList.remove("active")
overlaytag.classList.remove("active")
for(el of overlayli){
    el.classList.remove("animate__slideInUp")
    
}
}

})
   li.forEach(el => {
 array.push(el.offsetWidth)
 arrayleft.push(el.offsetLeft)

el.addEventListener("click",()=>{
        console.log(el.offsetLeft)
        // hover.style.Left = `${el.offsetLeft}+"px"`
        hover.style.transform=`translateX(${el.offsetLeft}px)` 
        hover.style.width =el.offsetWidth +"px"
        console.log(el.offsetWidth)
})


//  el.addEventListener("click",(e)=>{
//     menulist.innerHTML = `<span><span>`
//  })
// el.addEventListener("click",e=>{
//     console.log(e.offsetLeft)
})
// });

// overlayli.forEach(el => {
//     arrayoverlay.push(el.offsetWidth)

//    console.log(el)
   
//    //  el.addEventListener("click",(e)=>{
//    //     menulist.innerHTML = `<span><span>`
//    //  })
//    // el.addEventListener("click",e=>{
//    //     console.log(e.offsetLeft)
//    })

overlayli.forEach(el => {
    arrayoverlay.push(el.offsetWidth)
   
   console.log(el.offsetWidth)
})
s=0
overlayhover.forEach(el => {

    el.style.width= array[s]+"px"
   // el.style.transform=`translateX(${array[x]}px)` 
   //cannot use hover in javascript why do not know javascript what tab in hover
   //cannot use css hover + javascript transform

s++
});


x= 0
menulisthover.forEach(el => {
        console.log(array)
    el.style.width= array[x]+"px"
   // el.style.transform=`translateX(${array[x]}px)` 
   //cannot use hover in javascript why do not know javascript what tab in hover
   //cannot use css hover + javascript transform
   
x++
});



// overlayhover.forEach(el => {
//     el.style.width= arrayoverlay[x]+"px"
//    // el.style.transform=`translateX(${array[x]}px)` 
//    //cannot use hover in javascript why do not know javascript what tab in hover
//    //cannot use css hover + javascript transform

// x++
// });




// active =(x)=>{
//     x.style.width = "47px"
//     x.style.left = "50px"

// }
// inactive = (x)=>{
//     x.style.width = "0"
// }
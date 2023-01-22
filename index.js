let hour=document.querySelector('.hour')
let minut=document.querySelector('.minut')
let second=document.querySelector('.second')
let DigitalClock=document.querySelector('.Digital-clock')

setInterval(function(){
    let time=new Date()
    let hr=time.getHours()
    let min=time.getMinutes()
    let sec=time.getSeconds()

    let hrdeg=hr*30
    let minDeg=min*6
    let secDeg=sec*6

    hour.style.transform=`rotate(${hrdeg+minDeg/12}deg)`
    minut.style.transform=`rotate(${minDeg}deg)`
    second.style.transform=`rotate(${secDeg}deg)`

    showTime(hr,min,sec)
},1000)

function showTime(h,m,s){
    let details='AM'

    if(h<10){
        h='0'+h
    }

    if(m<10){
        m='0'+m
    }
    
    if(s<10){
        s='0'+s
    }

    if(h>12){
        h=h-12
        details='PM'
    }

    if(h==0){
        h=12
    }
    DigitalClock.innerHTML=h+':'+m+':'+s+' '+details
}
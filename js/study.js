const mynavi = [
    {
        d1text : "예약하기",
        d1href : "reservation.html",
        d1sec1 : "only"
    },
    {
        d1text : "오직여기 뭐?",
        d1href : "promotion.html",
        d1sec1 : ""
    },
    {
        d1text : "프로모션",
        d1href : "project.html",
        d1sec1 : ""
    },
    {
        d1text : "브랜드",
        d1href : "brand.html",
        d1sec1 : ""
    },
    {
        d1text : "고객센터",
        d1href : "brand.html",
        d1sec1 : ""
    }

]

//객체를 저장한다.(목적태그 잡음)
const targetul = document.querySelector("#bby_gnb");
let ullist = ""; //태그수집하기



for(x=0;x<mynavi.length;x++){
      ullist += `<li><a href="${mynavi[x].d1href}">${mynavi[x].d1text}</a></li>`;

}

targetul.innerHTML = ullist;

document.querySelector("#sec1").innerHTML = `<h2>${mynavi[0].d1text}</h2>`
document.querySelector("#sec2").innerHTML = `<h2>${mynavi[1].d1text}</h2>`
document.querySelector("#sec3").innerHTML = `<h2>${mynavi[2].d1text}</h2>`















// 변수 x를 사용해서 5회 
//for(x=0;x<5;x++){}

// 변수 x를 사용해서 100회 
//for(x=0;x<100;x++){}






// 변수 x를 사용해서 5회 
//for(초기값;조건;연산을 통해서 조건이 거짓이됨){}




//targetul.innerHTML =""
//targetul.innerHTML +="뒤에 이어서 들어가기"




//document.querySelector("#bby_gnb").innerHTML = "드디어출력"
//document.querySelector("#bby_gnb").innerHTML += "뒤에 이어서 출력"


//document.querySelector("#bby_hd").innerHTML = `나 세치기하겠나${document.querySelector("#bby_gnb").innerHTML}`;

//document.body.innerHTML = ""   드디어와 뒤 문자만 지어짐  html 1234는 그대로
//document.querySelectorAll("a")[0]
//document.querySelectorAll("a").item[0]


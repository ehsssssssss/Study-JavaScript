<<<<<<< HEAD

=======
>>>>>>> c4517683aca28a4e43ebdbdd7315dd1af750292b
const mynavi = [
    {
        d1text : "예약하기",
        d1href : "reservation.html",
<<<<<<< HEAD
        d1cls : "reser",
        d2navi :[
            {
                d1text : "캠핑",
                d1href : "reservation.html",
                d1cls : "reser"               
                
            },
            {
                d1text : "글램핑",
                d1href : "promotion.html",
                d1cls : "only"
            },
            {
                d1text : "카라반",
                d1href : "project.html",
                d1cls : ""
            },
            {
                d1text : "펜션",
                d1href : "brand.html",
                d1cls : ""
            }
        
        ]
        
=======
        d1sec1 : "only"
>>>>>>> c4517683aca28a4e43ebdbdd7315dd1af750292b
    },
    {
        d1text : "오직여기 뭐?",
        d1href : "promotion.html",
<<<<<<< HEAD
        d1cls : "only",
        d2navi :[
            {
                d1text : "소슬만의 스팟",
                d1href : "reservation.html",
                d1cls : "reser"               
                
            }
        
        ]
=======
        d1sec1 : ""
>>>>>>> c4517683aca28a4e43ebdbdd7315dd1af750292b
    },
    {
        d1text : "프로모션",
        d1href : "project.html",
<<<<<<< HEAD
        d1cls : "",
        d2navi :[
            {
                d1text : "이벤트",
                d1href : "reservation.html",
                d1cls : "reser"               
                
            },
            {
                d1text : "신규오픈",
                d1href : "promotion.html",
                d1cls : "only"
            },
            {
                d1text : "마감임박",
                d1href : "project.html",
                d1cls : ""
            }
        
        ]
=======
        d1sec1 : ""
>>>>>>> c4517683aca28a4e43ebdbdd7315dd1af750292b
    },
    {
        d1text : "브랜드",
        d1href : "brand.html",
<<<<<<< HEAD
        d1cls : "",
        d2navi :[   
          
        
        ]
=======
        d1sec1 : ""
>>>>>>> c4517683aca28a4e43ebdbdd7315dd1af750292b
    },
    {
        d1text : "고객센터",
        d1href : "brand.html",
<<<<<<< HEAD
        d1cls : "",
        d2navi :[    
          
        
        ]
=======
        d1sec1 : ""
>>>>>>> c4517683aca28a4e43ebdbdd7315dd1af750292b
    }

]

<<<<<<< HEAD
// 객체를 저장한다.
const targetul = document.querySelector("#bby_gnb");
let   ullist = ""; //태그수집하기

for( x of mynavi){
    ullist += `
    <li>
        <a href="${x.d1href}">${x.d1text}</a>`
    if(x.d2navi.length > 0){
        ullist += `<ul>`;



        for(i of x. d2navi){     
        ullist += `<ul>li사이에 들어가야해요</ul>`; 
        } 
    } 
        ullist += `</ul>`;


    ullist += `</li>`
}




targetul.innerHTML = ullist;

=======
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
>>>>>>> c4517683aca28a4e43ebdbdd7315dd1af750292b




<<<<<<< HEAD
=======











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

>>>>>>> c4517683aca28a4e43ebdbdd7315dd1af750292b


const mynavi = [
    {
        d1text : "예약하기",
        d1href : "reservation.html",
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
        
    },
    {
        d1text : "오직여기 뭐?",
        d1href : "promotion.html",
        d1cls : "only",
        d2navi :[
            {
                d1text : "소슬만의 스팟",
                d1href : "reservation.html",
                d1cls : "reser"               
                
            }
        
        ]
    },
    {
        d1text : "프로모션",
        d1href : "project.html",
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
    },
    {
        d1text : "브랜드",
        d1href : "brand.html",
        d1cls : "",
        d2navi :[   
          
        
        ]
    },
    {
        d1text : "고객센터",
        d1href : "brand.html",
        d1cls : "",
        d2navi :[    
          
        
        ]
    }

]

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






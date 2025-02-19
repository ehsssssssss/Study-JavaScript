//  변수선언
let number = 0;
//아이디 / 패스워드 
const id = "4thdraw";    

let pw ="123456"
pw += "Bang0820"
console.log(`아이디:${id}이고 비밀번호는: ${pw}입니다.`)


//배열
const navi = ["네이버","다음",,"구글"]

console.log(`제주도에 있는 유명대기업 ${navi[1]}, 가고싶다`)

const 학교 = {    
    백합 : ["이제훈",],
    해바라기 : ["방보영","김우주","돌돌이"]
}

console.log(학교.백합[0], 학교["백합"][0])

for( x in 학교["해바라기"]){
   console.log(`forin문은 index에 접근한다. ${x} 출력 `)
}
for( x of 학교["해바라기"]){
   console.log(`forof문은 value에 접근한다. ${x} 출력`)
 }

let count = 2;

setInterval(function(){
    count++;
    console.log(count);
}, 1000)



// window.addEventListener("DOMContentLoaded", function(){


//     //alert( ( count +  8 ) / 2 * 3 % 2 );
//     document.body.innerHTML = `
//     <h2> 1초마다 숫자가 바꿔지게 해줘
//     </h2> `;
//     document.body.innerHTML += `
//     <div>${count}</div> `;

//     document.body.classList += `dim${count}`


// } )








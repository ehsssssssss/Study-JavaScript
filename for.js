let gugu = 2;
// + , - , * , / , % (나머지 순환핵심연산)
for(x=2; x<10; x++){
    console.log(`${x}단시작`)
    for(i=2; i<10; i++){    
        console.log(` ${x} X ${i} = ${x*i} `)
    }
}


const tagnm = '안녕'; //나의 데이터
let obj = ""; // 데이터를 담을 그릇
for(x=0; x<10; x++){ // 10회 구동
    obj += tagnm; //  자신에게 다시 리턴해주는 식
}
console.log(obj) // 안녕이 10번나옴

const tagnm2 = '안녕'; //나의 데이터
let obj2 = ""; // 데이터를 담을 그릇
for(x=0; x<10; x++){ // 10회 구동
    obj2 = tagnm; //  자신에게 다시 리턴해주는 식
}
console.log("for만 개고생",obj2) // 안녕이 1번나옴 for는 고생만 함



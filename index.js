console.log('test');

const test1 = 12;// няльзя менять
let test2 = 13; //можно менять

const arr = [1,2,3,4,5] // массивчик
const object = { //объект
    dima,
    pickme,
    chavel,
    dev:{ // объект в объекте
        asd,
        object2,
        obg3 :{
            hello
        }
    },
    items: ['книга','ручка']
};


//операторы
let a = 1;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a++);
console.log(a--);
console.log(a%b);
console.log(a**b);

console.log((1+2)*b); // ()

//присваивания 
a += 1;
a *= 1;
//и т.д 
console.log(5===5); //true
console.log(6!==3); //true

//логические
// && || !

// условия
let popa = 10;
if (popa === 10){
    console.log('popa === 12');

}
else if(popa !== 10){
    console.log('popa !== 10');
}
else {
    console.log('popa - ?');
}


const primer = 12;
if (primer >= 15 || primer == 12) {
    console.log('1 условие сработало')
}
else {
    console.log('2 условие')
}


//switch case
const name ='kostya';

switch (name){//primer
    case 'Popa':
        console.log('Попка!!');
        break;
    case 'костя':
        console.log('Привет костя!');
        break;
    case 'дручка':
        console.log('друруруруурурчка!');
        break;
}


//цикл for
const spisok = [1,2,7,4,5];
for (let i = 0; i < spisok.length; i++){ //переменная; пока i меньше длинны списка; каждый раз после конца цикла i+1
    console.log(spisok[i]);//вывод числа из списка по его нумирации
    if (spisok[i] === 7){//если хуйня равна 7
        continue;//скип и дальше
    }
    if (spisok[i]=== 4){//если четрые
        break;//стоп
    }
}

//while
//while (true){
//    console.log('Бесконечный цикл');
//}
let i =0;
while (i < 5){
    console.log(i);
    i++;
};



console.log('end');

//функции

function name_test(name){
    console.log('привет',name);
}

let input = 'твое имя';
if (input === 'саша'){
    name_test('саша');
}
else if(input === 'тройка'){
    name_test('тройка');
}

//пример return

function calculator(a,b){
    if (a>b){
        return a-b;
    }
    else {
        return b-a;
    
    }
}

calculator(12,5);


//arow function
const func_age = (age) => {
    let data = 2024 - age;
    return data
}


const add = (a,b) => a+b;
console.log(add(5,4));


//(Каррирование, IIFE, рекурсия)

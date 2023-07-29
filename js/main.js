/* replace in JS */

/*let matn = "Salom hammaga! salom berdig hammaga!";*/
/*console.log(matn.replace(/salom|hammaga|berdig/gi,'alik'));*/
/*let yangiMatn = matn.replace(/salom|hammaga/gi,function (soz){
    if(soz == "Salom" || soz == "salom"){
        return "alik";
    }
    else if (soz == "hammaga"){
        return "barchaga";
    }
})
console.log(yangiMatn);*/

/* Push & Pop in JS */
/*let list = [];
list.push('Madina');
console.log(list.length);
console.log(list);
list.push('Hayitqulova');
console.log(list.length);
console.log(list);
list.push('25 yoshda');
console.log(list.length);
console.log(list);
list.push("Qozog'istonda yashaydi");
console.log(list.length);
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);*/

/* Unshift & Shift in JS */

/*let list = [];
list.unshift("Zafar");
console.log(list.length);
console.log(list);
list.unshift("Raimqulov");
console.log(list.length);
console.log(list);
list.unshift("O'zbekistonda yashaydi");
console.log(list.length);
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);*/

/* Sort in JS */

/*let list = ["Toxir","Madina","Xurshida","Zarina","Nigora","Sardor","Baxodir","Farxod"];
console.log(list.sort().reverse());*/
/*let sonlar = [11,8,55,619,27,777,150,69];
let tartiblanganSonlar = sonlar.sort(function (a, b){
    return a-b;
})
console.log(tartiblanganSonlar.reverse());*/

/*let belgilar = "0123456789";
function parolBer(){
    let i = 0;
    let parol = '';
    while (i < 6){
        let son = parseInt(Math.random() * belgilar.length);
        parol += belgilar[son];
        i++;
    }
    document.querySelector('input').value = parol;
}*/
document.querySelector('.tugma').addEventListener('click',function (){
    let ekran = document.querySelector('.ekran');
    console.log(typeof parseInt(ekran.value));
    ekran.value = parseInt(ekran.value) + 1;
});
document.querySelector('.nolga').addEventListener('click',function (){
    document.querySelector('.ekran').value = 0;
})



















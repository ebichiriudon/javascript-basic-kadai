console.log(Date());


//Date()関数で現在の日時をdateに代入する。
const date=new Date();

//yearを拾ってくる
const year=date.getFullYear();

//month
const month=date.getMonth()+1;

//day
const day=date.getDate();


//表示させる
console.log(year+'年'+month+'月'+day+'日');


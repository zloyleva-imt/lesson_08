console.log('App was loaded...');

// let oReq = new XMLHttpRequest();

// function reqListener() {
//     const res = JSON.parse(this.responseText);
//     // console.log(this.responseText);
//     console.log(res.devices[0].fullAddressEn);
// }

// oReq.onload = reqListener;
// oReq.open("get", "https://zloyleva.github.io/test_geo/data.json", true);

// oReq.send();

// var x = [];

// const p = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         console.log('Server send:');
//         x = [1,2,3,4,5]
//         resolve([
//             {ad:'DONE'}
//         ]);
//     },0)

//     // console.log('Server send:');
//     //     resolve([
//     //         {ad:'DONE'}
//     //     ]);
    
//     // reject([
//     //     {ad:'FAIL'}
//     // ])
// });

// console.log(x)
// p
//     .then((responce)=>{
//         console.log('responce', responce)
//         console.log('x', x)
//     })
//     .catch((error)=>{console.log('error',error)})

let devices;

const data = fetch('https://api.privatbank.ua/p24api/infrastructure?json&atm&address=&city=Запоріжжя')

data
    .then(res=>res.json())
    .then(res=>{
        devices = res.devices
        console.log('responce', res);
        console.log('devices ASYNC', devices);
    })
    .catch((error)=>{console.log('error',error)})

console.log('devices SYNC', devices);
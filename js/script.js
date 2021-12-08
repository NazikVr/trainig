



// 'use strict'
// let ShowMessage = function () {
// 	console.log('dypa');
// }
// if (2 > 1) {
// 	ShowMessage()
// }

// 5
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// }
// for (const key in userInfo) {
// 	const value = userInfo[key];
// 	console.log(value);
// }

// let userInfo = {
// 	name: "Nazar",
// 	age: 23,
// 	address: {
// 		city: "Lviv"
// 	}
// }
// for (const key in userInfo.address) {
// 	console.log(userInfo.address[key]);
// }

// let myO = {};
// myO.name = "Nazar";
// myO.age = 23;
// myO.name = "Andrii"
// console.log(myO);

// let numOne = 1.005 + Number.EPSILON
// let numSum = Math.round(numOne * 100) / 100;
// console.log(numSum);

// let value = "135.58px";
// let text = parseFloat(value);
// console.log(text);

// let value = 58 + "frilancer";
// if (isNaN(value)){
// 	console.log('results Nan');
// }

// console.log(Math.max(10,58,39,-150,0));

// let num = 58.558;
// console.log(Math.floor(num));

// let fls = "frilaser";
// let text = `Hello I ${fls}`;
// console.log(text);

// let text = "Frilanser"
// console.log(text.slice(5, 6));

// let text = 123 + '456';
// console.log(text);


// let text = "frilanser";
// console.log(text.toLocaleUpperCase());

// let text = "frilanser";
// console.log(text.slice(3, 6));

// let text = "frilanser";
// console.log(text.includes("lan", 4));



// let count = 0
// function showNumber(num) {
// 	console.log(num);
// 	if (num < 60) {
// 		setTimeout(showNumber, 200, ++num)
// 	} else {	
// 		num = 0;
// 		setTimeout(showNumber, 200, ++num)
// 		count++
// 		console.log(`${count} minutеs`);
// 	}

// }
// setTimeout(showNumber, 200, 1);


// function showNumber(num) {
// 	console.log(num);
// 	let timeId = setTimeout(showNumber, 1000, ++num);
// 	if (num === 6) {
// 		clearTimeout(timeId)
// 	}
// }
// setTimeout(showNumber, 1000, 1)

// function showName() {
// 	console.log('Nazar!');
// }
// setTimeout(showName, 0);
// console.log('Andrii');

// showmessage();
// function showmessage() {
// 	console.log('mesage');
// }

// showMessage();
// let showMessage() {
// 	console.log('Message');
// }

// 'use strict'

// let showMessage = function() {
// 	console.log('Massage');
// }
// if (2 > 1){
// 	showMessage()
// }
// showMessage()

// let message = 'Hello';
// let messageEnd;

// if (5 > 50) {
// 	messageEnd = ', Nazar'
// } else if (5 > 30) {
// 	messageEnd = ', Andri'
// } else if (5 > 10) {
// 	messageEnd = ', Misha'
// } else if (5 > 1) {
// 	messageEnd = ', Nastia'
// } else {
// 	messageEnd = ', Vaha'
// }

// message += messageEnd;
// console.log(message);


// let message = 'Hello';

// let messageend = (5 > 50) ? ', Nazar' :
// 	5 > 30 ? ', Andrii' :
// 		5 > 10 ? ', Vaha' :
// 			5 > 1 ? ', Nastia' : ', None'

// message += messageend;
// console.log(message);


// if (1 === "1") {
// 	console.log('1');
// } else {
// 	console.log('2');
// }

// if (5 == "5") {
// 	console.log(1);
// } else {
// 	console.log(2);
// }

// let message = (92 > '11' && 58 < 100) ? '1' : '2';
// console.log(message);

// if (0) {
// 	console.log('1');
// } else if (' ') {
// 	console.log('2');
// }
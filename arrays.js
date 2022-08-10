'user strict'

function show(array){
	console.log(array);
}

function devide(){
	console.log('---------------');
}

let array = [];
show(array);

array =['Apple', 'Orange', 'Cherry'];

show(array[0]);
show(array[1]);
show(array[2]);

devide();

array[1] = 'Bannane'
show(array);

let variousDataArray = [true, 'TestData', {name: 'Jone'}];
show(variousDataArray);
devide();

// Methods
// 1.pop()		- delete last element
show('POP()');
show(array);
show(array.pop());
show(array);
devide();

//2.push()		- add last element
show('PUSH()');
show(array);
array.push('Pineapple');
show(array);
devide();

//3.shift()		- delete first element
show('SHIFT()');
show(array);
show(array.shift());
show(array);
devide();

//4.unshift()		- add first element
show('UNSHIFT()');
show(array);
array.unshift('Blubarry');
show(array);
devide();


//5. added multiple elements
show(array);
array.push('Apple', 'Orange', 'Cherry');
show(array);
array.unshift('Apple', 'Orange');
show(array);
devide();

//6. set values with wholes
array[12]= 'very good Fruits';
show(array);
devide();

//7. create array with constructor
let customArray = new Array('person1', 'person2', 'person3');
show(customArray);
devide();

customArray = new Array(2);
show(customArray);
show(customArray.length);
devide();











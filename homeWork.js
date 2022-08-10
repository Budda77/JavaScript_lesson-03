'user strict'
function show(array){
	console.log(array);
}

function devide(){
	console.log('---------------\n');
}

// task 1
show('Task 1');

let products =[];
show(products.length);

products=['Milk', 'Bread', 'Spaghetti','Sauce','Meat','Butter','Cheese'];
show(products);
show('the length of array: '+products.length);
show('The last element of array: '+products[products.length-1]);
devide();

// task 2
show('Task 2');

let styles = ['Jazz', 'Blues'];
show(styles);
show('\nPush element into array:')
styles.push('Rock and Roll');
show(styles);
devide()

show('\nSplice element into array:')
styles.splice(-2,1,'Classics');
show(styles);
devide();

show('\nShift element from array:')
show(styles.shift());
show(styles);
devide();

show('\Unshift element into array:')
styles.unshift('Rep','Regi');
show(styles);
devide();

// task 3
show('Task 3');
function find(array, value){	
	let tmp;
	let flag = false;
	for(var i =0; i < array.length; i++){
		if(array[i] == value){
			tmp = i;
			flag = true;
		} else if(!flag){
			tmp = -1;
		}
	}
	return tmp;
}

console.log('Find the index of value in the array:');
console.log('If value is not find the index is -1 :');

let index = find(styles, 'Classics');
console.log('The number value in the array is = '+index);

console.log('\nThe second attempts to find values:');
index = find(styles, 'Pop');
console.log('the number value in the array is = '+index);
devide();

//task 4
show('Task 4');

show('Create a function that return a new array with stated range.')

function filterRange(array, a,b){
try{
	if(array.length < b){
		throw new Error('The input numbers were wrong.');
	}
}catch(err){
	console.log('Please input numbers.\n' + err);
}
	return array.slice(a,b);
}

let numberArray = [12,52,41,17,8,32,15,9,14,24,36,95];

show(numberArray);

let array2 = filterRange(numberArray, 2,7);

show('Stated range from 2 to 7:')
show(array2);
devide();

//task 5
show('Task 5');
console.log('Create a function to convert a string with a dash into a new string with uppercase words.');

let str1 = 'my-short-string';

console.log('From:');
show(str1);

function camelize(str){
	let strArray = str.split('-');

	let strTmp= '';
	let newTmp = '';
	
	for(let i=0; i < strArray.length; i++){	
		
		strTmp = strArray[i];

		if(i < 1 ){
			newTmp = newTmp + strTmp.slice(0);
		}else{
			newTmp = newTmp + strTmp[0].toUpperCase()+strTmp.slice(1);
		}
	}
	return newTmp;	
}

let newString = camelize(str1);

console.log('To:');
console.log(newString);














'user strict'

function show(array){
	console.log(array);
}

function devide(){
	console.log('---------------');
}

//1. split
show('SPLITE()');
let array = [];
show(array);
let fruitString = 'Apple,Orange,Cherry';
array = fruitString.split(',');
show(array);
devide();

//1. join
show('JOIN()');
show(array);
fruitString = array.join('---->>');
show(fruitString);
devide();

//3. delete fron array
show('delete KEYWORD');
show(array);
delete array[2];
show(array);
devide();

//4. splice
show('SPLICE');
array.push('Apple', 'Orange', 'Cherry','Apple', 'Orange', 'Cherry');
show(array);
devide();

array.splice(2,1);
show(array);
devide();

array.splice(3,3, 'Kivi','Kivi','Kivi');
show(array);
devide();

array.splice(-1,0, 100,100);
show(array);
devide();

array.splice(-0,0, 100,100);
show(array);
devide();

//5. slice
show('SLICE');
show(array.slice(2,5));
show(array.slice(7));

show(array.slice());












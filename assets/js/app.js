let cl = console.log;

const info = document.getElementById("info");

// fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(response => response.json())
  // .then(json => console.log(json))
  // .catch(err => cl(err));


// get, post, patch, put,delete.

// XMLHttpRequest()
// it is a constructor method
// constructor method >> it is a blueprint for creating objects

let apiurl = 'https://jsonplaceholder.typicode.com/todos';

// 1 create instance/object of XMLHttpRequest()

let xhr = new XMLHttpRequest();

// 2 open method terminal 

xhr.open("GET", apiurl);

// 3 onload

xhr.onload = function(){
	cl(xhr.response);
	let data = JSON.parse(xhr.response);
	templating(data);
};

// 4.send

xhr.send();

function templating(arr){
	let result = "";
	arr.forEach(ele => {
		result += `
				<tr>
					<td>${ele.id}</td>
					<td>${ele.userId}</td>
					<td>${ele.title}</td>
					<td>${ele.completed}</td>
				</tr>
		`
	});
	info.innerHTML = result;
};








// function getJob(){
	// let job = Math.random();
	
	// if(job > .5){
		// resolve()
	// }else{
		// reject()
	// }
// }
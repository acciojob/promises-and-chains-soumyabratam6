//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit',function(event){
	const ageInput = document.getElementById('age').value;
    const nameInput = document.getElementById('name').value;
	if (ageInput === '' || nameInput=== '') {
		 alert('Please fill in both fields.');
		return;
	}
	let age = parseInt(ageInput);
	const name = nameInput;
	const ageCheckPromise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if (age>18) {
				resolve;
			}else{
				reject;
			}
		},4000);
	});
	ageCheckPromise
	.then(()=>{
		alert(`Welcome, ${name}. You can vote.`);
	})
	.reject(()=>{
		alert(`Oh sorry ${name}. You aren't old enough`.);
	});
});
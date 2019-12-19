// alert box 

document.getElementById("alert").addEventListener("click",
	function (){
		alert("I was clicked");
	});

// styling the background 

document.getElementById("yellow").addEventListener("click",
	function () {
		document.body.style.backgroundColor = "yellow";
	});

// new tool tip 


const tip = document.getElementById('tooltip');
// make visible 
tip.addEventListener("mouseover", function(){
document.getElementById("tooltiptext").style.visibility = "visible";
});
// make invisible 
tip.addEventListener("mouseout", function () {
document.getElementById("tooltiptext").style.visibility = "hidden";
});


// api fetch method 

document.getElementById("jokes").addEventListener("click", getJoke);
function getJoke() {
	let url = "https://www.boredapi.com/api/activity/";
	fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(resp) {
		console.log(JSON.stringify(resp));
		document.getElementById("output").innerHTML = JSON.stringify(resp.activity);
	})
	.catch(function(error){
		document.getElementById("output").innerHTML = "There was an error" + error;
	});
}
















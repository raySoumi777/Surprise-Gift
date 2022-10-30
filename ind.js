const music1=new Audio("raya - ronith.m4a")
const music2=new Audio("raya - ghontu.m4a")
const music3=new Audio("raya - sneha.m4a")
const music4=new Audio("raya - ashu.m4a")
const music5=new Audio("raya - ava.m4a")
const music6=new Audio("raya - bachhu.m4a")
const music7=new Audio("raya - Sajne.m4a")
const music8=new Audio("raya - maya.m4a")
const music9=new Audio("raya - kaka.m4a")

function playmusic1(){
	music1.play();
		console.log('playing.........')
		document.body.style.animationName="example3";
	setTimeout(function(){
		music1.pause();
		document.body.style.animationName="";
	},166000);
}

function playmusic2(){
	music2.play();
		console.log('playing.........')
		document.body.style.animationName="example4";
	setTimeout(function(){
		music2.pause();
		document.body.style.animationName="";
	},136000);
}

function playmusic3(){
	music3.play();
		console.log('playing.........')
		document.body.style.animationName="example5";
	setTimeout(function(){
		music3.pause();
		document.body.style.animationName="";
	},143000);
}

function playmusic4(){
	music4.play();
		console.log('playing.........')
		document.body.style.animationName="example6";
	setTimeout(function(){
		music4.pause();
		document.body.style.animationName="";
	},165000);
}

function playmusic5(){
	music5.play();
		console.log('playing.........')
		document.body.style.animationName="example7";
	setTimeout(function(){
		music5.pause();
		document.body.style.animationName="";
	},177000);
}

function playmusic6(){
	music6.play();
		console.log('playing.........')
		document.body.style.animationName="example8";
	setTimeout(function(){
		music6.pause();
		document.body.style.animationName="";
	},139000);
}

function playmusic7(){
	music7.play();
		console.log('playing.........')
		document.body.style.animationName="example9";
	setTimeout(function(){
		music7.pause();
		document.body.style.animationName="";
	},180000);
}

function playmusic8(){
	music8.play();
		console.log('playing.........')
		document.body.style.animationName="example10";
	setTimeout(function(){
		music8.pause();
		document.body.style.animationName="";
	},187000);
}

function playmusic9(){
	music9.play();
		console.log('playing.........')
		document.body.style.animationName="example11";
	setTimeout(function(){
		music9.pause();
		document.body.style.animationName="";
	},163000);
}

var x;

function tblur(x){
	const count=document.querySelectorAll("img");
	count[x-1].src="3kOU_s.gif";
	
		if(x==1){
			const time=setTimeout(function() {
				count[x-1].src="Ronith.jpg";
				console.log("comes");
			},166000);
		}
		else if(x==2){
			const time=setTimeout(function() {
				count[x-1].src="Ghontu.jpg";
				console.log("comes");
			},136000);
		}
		else if(x==3){
			const time=setTimeout(function() {
				count[x-1].src="sneha.jpg";
				console.log("comes");
			},143000);
		}
		else if(x==4){
			const time=setTimeout(function() {
				count[x-1].src="ashu.jpg";
			console.log("comes");
			},165000);
		}
		else if(x==5){
			const time=setTimeout(function() {
				count[x-1].src="Ava.jpg";
				console.log("comes");
			},177000);
		}
		else if(x==6){
			const time=setTimeout(function() {	
				count[x-1].src="Ahana.jpg";
				console.log("comes");
			},139000);
		}
		else if(x==7){
			const time=setTimeout(function() {	
				count[x-1].src="Sujan.jpg";
				console.log("comes");
			},180000);
		}
		else if(x==8){
			const time=setTimeout(function() {
				count[x-1].src="Subho.jpg";
				console.log("comes");
			},187000);
		}
		else if(x==9){
			const time=setTimeout(function() {
				count[x-1].src="Ayush.jpg";
				console.log("comes");
			},163000);
		}
		//console.log("comes");
		//},166000);
}

function change(){
	document.getElementById("an1").style.opacity = 0;
	document.getElementById("an2").style.opacity = 1;
	document.getElementById("an3").style.display = "none";
	document.getElementById("an4").style.opacity = 1;
	document.getElementById("an4").style.left = "0";
	document.getElementById("an5").style.opacity = 1;
	document.getElementById("an5").style.left = "37vw";
	document.getElementById("an6").style.opacity = 1;
	document.getElementById("an6").style.right = "0vw";
}

function cl(){
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
}

function info(n){
	var btn = document.getElementById("myBtn");
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementById("myModal");
	modal.style.display = "block";

	var textBoxHead = document.getElementById("Thead")
  	var textBoxDetail = document.getElementById("Tbody")

  	console.log("5");
	if (n == 1) {
    textBoxHead.innerHTML = `<img src="pop/text/t01.png" style="position:relative;left:27vw;">
    						<span class="close" onclick="cl()">&times;</span>`
    textBoxDetail.innerHTML = `<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/0.2.png" class="mid">
						    		</div>
						    		<div class="col-6">
						    			<img src="pop/text/t01-1.png" class="mid">
						    		</div>
						    	</div>
									`
  	}
  	else if(n == 2){
    textBoxHead.innerHTML = `<img src="pop/text/fish.png" style="position:relative;left:15vw;">
    						<span class="close" onclick="cl()">&times;</span>`
    textBoxDetail.innerHTML = `<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/fish01.png" class="mid">
						    		</div>
						    		<div class="col-6">
						    			<img src="pop/text/fish01.png" class=>
						    			<img src="pop/text/fish01-1.png" class=>
						    		</div>
						    	</div><br><br>
						    	<div class="row">
						    		<div class="col-6"><br><br><br>
						    			<img src="pop/img/fish02.png" class="mid">
						    		</div>
						    		<div class="col-6">
						    			<img src="pop/text/fish02.png" class=>
						    			<img src="pop/text/fish02-1.png" class=>
						    		</div>
						    	</div>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/fish03.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br>
						    			<img src="pop/text/fish03.png" class=>
						    			<img src="pop/text/fish03-1.png" class=>
						    		</div>
						    	</div>
									`
  	}
  	else if(n == 3){
    textBoxHead.innerHTML = `<img src="pop/text/crab.png" style="position:relative;left:18vw;">
    						<span class="close" onclick="cl()">&times;</span>`
    textBoxDetail.innerHTML = `<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/crab01.png" class="mid">
						    		</div>
						    		<div class="col-6">
						    			<img src="pop/text/crab01.png" class=>
						    			<img src="pop/text/crab01-1.png" class=>
						    		</div>
						    	</div>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/crab02.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br>
						    			<img src="pop/text/crab02.png" class=>
						    			<img src="pop/text/crab02-1.png" class=>
						    		</div>
						    	</div>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/crab03.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br>
						    			<img src="pop/text/crab03.png" class=>
						    			<img src="pop/text/crab03-1.png" class=>
						    		</div>
						    	</div>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/crab04.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br>
						    			<img src="pop/text/crab04.png" class=>
						    			<img src="pop/text/crab04-1.png" class=>
						    		</div>
						    	</div>
									`
  	}
  	else if(n == 4){
    textBoxHead.innerHTML = `<img src="pop/text/cor.png" style="position:relative;left:15vw;">
    						<span class="close" onclick="cl()">&times;</span>`
    textBoxDetail.innerHTML = `<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/cor01.png" class="mid">
						    		</div>
						    		<div class="col-6">
						    			<img src="pop/text/cor01.png" class=>
						    			<img src="pop/text/cor01-1.png" class=>
						    		</div>
						    	</div><br>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/cor02.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br>
						    			<img src="pop/text/cor02.png" class=>
						    			<img src="pop/text/cor02-1.png" class=>
						    		</div>
						    	</div><br>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/cor03.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br>
						    			<img src="pop/text/cor03.png" class=>
						    			<img src="pop/text/cor03-1.png" class=>
						    		</div>
						    	</div>
									`
  	}
  	else if (n == 5) {
    textBoxHead.innerHTML = `<img src="pop/text/t02.png" style="position:relative;left:29vw;">
    						<span class="close" onclick="cl()">&times;</span>`
    textBoxDetail.innerHTML = `<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/0.1.png" class="mid">
						    		</div>
						    		<div class="col-6">
						    			<img src="pop/text/t02-1.png" class="mid">
						    		</div>
						    	</div>
									`
  	}
  	else if (n == 6) {
    textBoxHead.innerHTML = `<img src="pop/text/t03.png" style="position:relative;left:23vw;">
    						<span class="close" onclick="cl()">&times;</span>`
    textBoxDetail.innerHTML = `<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/0.3.png" class="mid">
						    		</div>
						    		<div class="col-6">
						    			<img src="pop/text/t03-1.png" class="mid">
						    		</div>
						    	</div>
									`
  	}
  	else if(n == 7){
    textBoxHead.innerHTML = `<img src="pop/text/s01.png" style="position:relative;left:11vw;">
    						<span class="close" onclick="cl()">&times;</span>`
    textBoxDetail.innerHTML = `<div class="row">
						    		<div class="col-6">
						    			<img src="pop/maa/1.png" class="mid">
						    		</div>
						    		<div class="col-6">
						    			<img src="pop/maa/2.png" class="mid">
						    		</div>
						    	</div><br>
						    	<div class="row">
						    		<div class="col-12">
						    			<img src="pop/maa/3.png" class="mid">
						    		</div>
						    	</div>
									`
  	}
  	else if(n == 8){
    textBoxHead.innerHTML = `<img src="pop/text/s02.png" style="position:relative;left:11vw;">
    						<span class="close" onclick="cl()">&times;</span>`
    textBoxDetail.innerHTML = `<div class="row">
						    		<div class="col-6">
						    			<img src="pop/maa/4.png" class="mid">
						    		</div>
						    		<div class="col-6">
						    			<img src="pop/maa/5.png" class="mid">
						    		</div>
						    	</div><br>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/maa/6.png" class="mid">
						    		</div>
						    		<div class="col-6">
						    			<img src="pop/maa/7.png" class="mid">
						    		</div>
						    	</div>
									`
  	}
  	else if(n == 9){
    textBoxHead.innerHTML = `<img src="pop/text/s03.png" style="position:relative;left:11vw;">
    						<span class="close" onclick="cl()">&times;</span>`
    textBoxDetail.innerHTML = `<div class="row">
						    		<div class="col-6">
						    			<img src="pop/maa/8.png" class="mid">
						    		</div>
						    		<div class="col-6">
						    			<img src="pop/maa/9.png" class="mid">
						    		</div>
						    	</div><br>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/maa/10.png" class="mid">
						    		</div>
						    		<div class="col-6">
						    			<img src="pop/maa/11.png" class="mid">
						    		</div>
						    	</div>
									`
  	}
  	else { 
		textBoxHead.innerHTML = ''
    	textBoxDetail.innerHTML = ''
	}

	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}
}
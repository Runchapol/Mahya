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
						    			<img src="pop/img/1.1.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br><br><br><br><br><br><br>
						    			<img src="pop/text/s01-1.png" class=>
						    		</div>
						    	</div>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/1.2.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br><br><br><br><br><br><br>
						    			<img src="pop/text/s01-2.png" class=>
						    		</div>
						    	</div>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/1.3.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br><br><br><br><br><br><br>
						    			<img src="pop/text/s01-3.png" class=>
						    		</div>
						    	</div>
									`
  	}
  	else if(n == 8){
    textBoxHead.innerHTML = `<img src="pop/text/s02.png" style="position:relative;left:11vw;">
    						<span class="close" onclick="cl()">&times;</span>`
    textBoxDetail.innerHTML = `<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/2.1.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br><br><br><br><br><br><br>
						    			<img src="pop/text/s02-1.png" class=>
						    		</div>
						    	</div><br><br>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/2.2.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br><br><br><br><br><br><br>
						    			<img src="pop/text/s02-2.png" class=>
						    		</div>
						    	</div><br><br>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/2.4.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br><br><br><br><br><br><br>
						    			<img src="pop/text/s02-3.png" class=>
						    		</div>
						    	</div><br><br>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/2.3.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br><br><br><br><br><br><br>
						    			<img src="pop/text/s02-4.png" class=>
						    		</div>
						    	</div>
									`
  	}
  	else if(n == 9){
    textBoxHead.innerHTML = `<img src="pop/text/s03.png" style="position:relative;left:11vw;">
    						<span class="close" onclick="cl()">&times;</span>`
    textBoxDetail.innerHTML = `<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/3.1.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br><br><br><br><br><br><br>
						    			<img src="pop/text/s03-1.png" class=>
						    		</div>
						    	</div><br><br>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/3.2.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br><br><br><br><br><br><br>
						    			<img src="pop/text/s03-2.png" class=>
						    		</div>
						    	</div><br><br>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/3.3.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br><br><br><br><br><br><br>
						    			<img src="pop/text/s03-3.png" class=>
						    		</div>
						    	</div><br><br>
						    	<div class="row">
						    		<div class="col-6">
						    			<img src="pop/img/3.4.png" class="mid">
						    		</div>
						    		<div class="col-6"><br><br><br><br><br><br><br><br><br>
						    			<img src="pop/text/s03-4.png" class=>
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
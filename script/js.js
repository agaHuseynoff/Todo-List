var placeLi = document.querySelector('.main-list ul');
var btn = document.getElementById('btn');


btn.onclick = function(){
	var liEl = document.createElement('li');
	var span = document.createElement('span');
	var inp = document.getElementById('todo').value;
	var text = document.createTextNode(inp);
	var clos = document.createTextNode("x");
	span.className = 'cleaner';	
	span.appendChild(clos);	
	liEl.appendChild(text);
	
/******************************
add List Item
******************************/	
	if(inp == ""){
		alert('The cell is empty');
	}else{
		placeLi.appendChild(liEl);
		liEl.appendChild(span);
	}
	document.getElementById("todo").value = "";
	

	
/**********************************
add class cheecked to lists
**********************************/
	var listItem = document.querySelectorAll('.main-list ul li');
	for(var i = 0; i < listItem.length; i++){								
		listItem[i].onclick = function(){							
			this.classList.toggle('check');
		}  
	}
	
/*****************************
REMOVE CHECKED LISTS
*****************************/
var checkRemove = document.querySelector('.check-list');
checkRemove.onclick = function removeListItem(){
	for(var i = 0; i < listItem.length; i++){
		if(listItem[i].className == 'check'){
			listItem[i].style.display = 'none';
		}
		
	}
} 


/**********************************
delete button
**********************************/	
	var spn = document.querySelectorAll('.main-list ul li span');
	for(var i = 0; i < spn.length; i++){
		spn[i].onclick = function(){
			var parentEl = this.parentElement;
			parentEl.style.display = 'none';
		}
	}
	
}//onclick the end






/***********************************************
available lists && add class cheecked to lists
***********************************************/
var listItem = document.querySelectorAll('.main-list ul li');		
for(var i = 0; i < listItem.length; i++){
	listItem[i].onclick = function(){
		this.classList.toggle('check');
	}
}

/*******************************
added to span	
********************************/	
for(var i = 0; i < listItem.length; i++){					                             
	var spann = document.createElement('span');
	var closd = document.createTextNode("x");
	spann.className = 'cleaner';	
	spann.appendChild(closd);	
	listItem[i].appendChild(spann);
}

/*******************************
delete button
********************************/
var sp = document.getElementsByTagName('span');
for(var i = 0; i < sp.length; i++){
	sp[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = 'none';
	}
}

/*****************************
REMOVE CHECKED LISTS
*****************************/
var checkRemove = document.querySelector('.check-list');
checkRemove.onclick = function removeListItem(){
	for(var i = 0; i < listItem.length; i++){
		if(listItem[i].className == 'check'){
			listItem[i].style.display = 'none';
		}
		
	}
} 



































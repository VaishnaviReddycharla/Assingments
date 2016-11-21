$(document).ready(function(){
	
	
	var array = [1,2,3];
	var array1 = array.slice();
	var add1;
	 $("#div").text(array);
	 
	 
	 
	 
	$("#demo").click(function(){
		submitfunct();
	});
	
    function submitfunct(){
		
		var add = prompt("Please enter any element to insert");
		 add1 = add.toString();
		console.log(add1);
		if (add1 != null) {
			array1.push(add1);
			console.log(array1.join());
			console.log(array.join());
			$("#add").text(array1);
		}
	
      // $("#div").text(array);
	}
	
	
	$("#check").click(function(){
		 checkfunct();
	});
	
	function checkfunct(){
		var i , j,result=0;
	   console.log(array1.join());
	   for( i = 0;i< array1.length;i++){
		  
		 
		   for( j = 0;j<array.length;j++){
			   
			   if(array1[i] == array[j]){
				  
				   result = result+1;
			   }  
		   }
		    
		}
		if(result!=1)
				{
		 
		   alert("error");
		    $("#div1").text(array1);
				}
	   }
	   
	   
	   $("#append").click(function(){
		   appendFunct();
	   });
	   
	   function appendFunct(){
		   console.log("hello");
		   console.log(add1);
	   }
	  
	
//setInterval(submitfunct , 3000);
	



//setTimeout ( checkfunct , 10000);

});
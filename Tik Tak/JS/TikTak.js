       
		var painted;
		var content;
		var turn = 0;
		var theCanvas;
		var c;
		var cxt;
	
		window.onload=function(){
			painted = new Array();
			content = new Array();
			for(var l = 0; l <= 4; l++){
			painted[l] = false;
			content[l]='';
			}
		}

		//Game methods
		function canvasClicked(canvasNumber){
			theCanvas = "canvas"+canvasNumber;
			c = document.getElementById(theCanvas);
			cxt = c.getContext("2d");

			if(painted[canvasNumber-1] ==false){
				if(turn%2==0){
					cxt.beginPath();
					cxt.moveTo(10,10);
					cxt.lineTo(40,40);
					cxt.moveTo(40,10);
					cxt.lineTo(10,40);
					cxt.stroke();
					cxt.closePath();
					content[canvasNumber-1] = 'X';
					
					var player1 = document.getElementById( 'one' );
                            player1.style.backgroundColor='orange';
                    
                     var player2 = document.getElementById( 'two' );
                            player2.style.backgroundColor='white';
				}

				else{
					cxt.beginPath();
					cxt.arc(25,25,20,0,Math.PI*2,true);
					cxt.stroke();
					cxt.closePath();
					content[canvasNumber-1] = 'O';
					
					var player1 = document.getElementById( 'two' );
                            player1.style.backgroundColor='orange';
                    
                    var player2 = document.getElementById( 'one' );
                            player2.style.backgroundColor='white';
				}

				turn++;
				painted[canvasNumber-1] = true;
				
			}
		}

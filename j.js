var button1 = document.getElementById('butt1'),
	button2 = document.getElementById('butt2'),
	sliderr = document.getElementById('blocc'),
	i = 0;
		button2.onclick = function(){ //первая
		if(i == 0){
			sliderr.style.backgroundColor = "red";
			i++;
		}
		button2.onclick = function(){ //вторая
			if(i == 1){
				sliderr.style.backgroundColor = "green";
				i++;
			}
			button2.onclick = function(){ //третья
				if(i == 2){
					sliderr.style.backgroundColor = "#888";
					i = 0;
					console.log(i);
				}
			}
		}
	}


	button1.onclick = function(){ //первая
		if(i == 0){
			sliderr.style.backgroundColor = "green";
			i++;
		}
		button1.onclick = function(){ //вторая
			if(i == 1){
				sliderr.style.backgroundColor = "red";
				i++;
			}
			button1.onclick = function(){ //третья
				if(i == 2){
					sliderr.style.backgroundColor = "#888";
					i = 0;
					console.log(i);
				}
			}
		}
	}	
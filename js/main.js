	function habla()
	{
		var shora=document.getElementById("hora").value;
		var shabla=document.getElementById("hablasi");
		var salida=document.getElementById("salida");

		if((shabla.checked) && shora<7 || shora>20){
			salida.innerHTML=1;

		}else{
			salida.innerHTML=0;
		}
	
	}
	

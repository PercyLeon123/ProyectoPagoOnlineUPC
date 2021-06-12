function ajaxobj() {
	try {
		_ajaxobj = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			_ajaxobj = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			_ajaxobj = false;
		}
	}

	if (!_ajaxobj && typeof XMLHttpRequest!='undefined') {
		_ajaxobj = new XMLHttpRequest();
	}

	return _ajaxobj;
}



function actualizapago( per,fvcmto,fact,afrp1,cuota,importe,est) {
	ajax = ajaxobj();
	ajax.open("POST", "_actualizapago.php?per="+per+"&fvcmto="+fvcmto+"&fact="+fact+"&afrp1="+afrp1+"&cuota="+cuota+"&importe="+importe+"&est="+est, true);
	
	ajax.onreadystatechange=function() {
		if (ajax.readyState == 4) {
			alert(ajax.responseText);
	}
	}
	
	ajax.send(null);
}

    
function validalogin() {          
         
	ajax = ajaxobj();
        
     idusuario= document.loginform.userLoginField.value;
	 contracena= document.loginform.password.value;
         
         
	ajax.open("GET", "login.php?username="+idusuario+"&password="+contracena, true);
		
	ajax.onreadystatechange=function() {
		if (ajax.readyState == 4) {
		
			

			 var_msg = ajax.responseText;
			 
			 if  (var_msg.substring(0,5)=='Error'  ){
				 Alert("Error en usuario / contraseña");
				 return
			  
			 }
         
		
			
			// window.location = "index.php";
					}
	}
	
	ajax.send(null);
}  



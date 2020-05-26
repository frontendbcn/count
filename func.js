// JavaScript Document

function desplegar(tab) { 
	"use strict";
	 tab = document.getElementById(tab); 


	switch(tab.style.display) { 
	case "none": 
	tab.style.display = "block"; 

	break; 
	default: 
	tab.style.display = "none"; 

	break; 
} 
} 
function operar1() { 
	"use strict";
	var xa = document.getElementById("hueco1a").value;
	var xb = document.getElementById("hueco1b").value;
	var Y = xa*xb/100;
	
	var y = parseFloat(Y.toFixed(2));
	
	var margin = Math.floor(xa);
	margin = margin-1;
	
	document.getElementById("hueco1z").value= y;
	
	document.getElementById("tab1a").innerHTML = xa;
	
	document.getElementById("tab1b").innerHTML = xb;
	
	document.getElementById("tab1z").innerHTML = "$$x = \\frac{"+ xa+"·"+ xb +"}{100} = " +y+"$$";
	
	document.getElementById("porcent1z").innerHTML = xa+"%";
	
	document.getElementById("barDentro1z").style.width = xa+"%";
	
	document.getElementById("barHueco1b").innerHTML = xb;
	
	
	if(xa<7)
		{
			document.getElementById("porcent1z").style.color = "rgba(159,149,212,1.00)";
			
		}
	else
		{
			document.getElementById("porcent1z").style.color = "white";
			
		}
	
	document.getElementById("barNumero1z").style.marginLeft =margin+"%";
	document.getElementById("barNumero1z").innerHTML = "&darr;"+ y;
	
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	
} 


function operar2() { 
	"use strict";
	var xa = document.getElementById("hueco2a").value;
	var xb = document.getElementById("hueco2b").value;
	var Y = 100*xb/xa;
	
	var y = parseFloat(Y.toFixed(2));
	
	var margin = Math.floor(xa);
	margin = margin-1;
	
	document.getElementById("hueco2z").value= y;
	
	
	document.getElementById("tab2a").innerHTML = xb;
	
	document.getElementById("tab2b").innerHTML = xa;
	
	document.getElementById("tab2z").innerHTML = "$$x = \\frac{"+ xb+"· 100}{"+ xa +"} = " +y+"$$";
	
	
	
	
	document.getElementById("porcent2z").innerHTML = xa+"%";
	
	document.getElementById("barDentro2z").style.width = xa+"%";
	
	document.getElementById("barHueco2b").innerHTML = y;
	
	
	if(xa<7)
		{
			document.getElementById("porcent2z").style.color = "rgba(159,149,212,1.00)";
			
		}
	else
		{
			document.getElementById("porcent2z").style.color = "white";
			
		}
	
	
	document.getElementById("barNumero2z").style.marginLeft =margin+"%";
	document.getElementById("barNumero2z").innerHTML = "&darr;"+ xb;
	
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
} 


function operar3() { 
	"use strict";
	var xa = document.getElementById("hueco3a").value;
	var xb = document.getElementById("hueco3b").value;
	var Y = xb*100/xa;
	
	var y = parseFloat(Y.toFixed(2));
	var margin = Math.floor(y);
	margin = margin-1;
	
	document.getElementById("hueco3z").value= y;
	
	
	
	document.getElementById("tab3a").innerHTML = xa;
	
	document.getElementById("tab3b").innerHTML = xb;
	
	document.getElementById("tab3z").innerHTML = "$$ x = \\frac{"+ xb+"·100}{"+ xa +"} = " +y+"\\% $$";
	
	
	
	
	
	
	document.getElementById("porcent3z").innerHTML = y+"%";
	
	document.getElementById("barDentro3z").style.width = y+"%";
	
	document.getElementById("barHueco3b").innerHTML = xa;
	
	
	if(y<7)
		{
			document.getElementById("porcent3z").style.color = "rgba(159,149,212,1.00)";
			
		}
	else
		{
			document.getElementById("porcent3z").style.color = "white";
			
		}
	
	
	document.getElementById("barNumero3z").style.marginLeft =margin+"%";
	document.getElementById("barNumero3z").innerHTML = "&darr;"+ xb;
	
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
} 


function operar4() { 
	"use strict";
	var xa = document.getElementById("hueco4a").value;
	var xb = document.getElementById("hueco4b").value;
	var xc = document.getElementById("hueco4c").value;
	var Y = xb*xc/xa;
	
	var y = parseFloat(Y.toFixed(2));
	var margin = Math.floor(xc);
	margin = margin-1;
	var Total= 100*xb/xa;
	var total = parseFloat(Total.toFixed(2));
	
	document.getElementById("hueco4z").value= y;
	
	
	
	document.getElementById("tab4b").innerHTML = xb;
	
	document.getElementById("tab4a").innerHTML = xa;
	
	document.getElementById("tab4c").innerHTML = xc;
	
	document.getElementById("tab4z").innerHTML = "$$ x = \\frac{"+ xb+"·"+xc+"}{"+ xa +"} = " +y+"$$";
	
	
		
	
	
	
	document.getElementById("porcent4z").innerHTML = xc+"%";
	
	document.getElementById("barDentro4z").style.width = xc+"%";
	
	document.getElementById("barHueco4b").innerHTML = total;
	
	
	if(xc<7)
		{
			document.getElementById("porcent4z").style.color = "rgba(159,149,212,1.00)";
			
		}
	else
		{
			document.getElementById("porcent4z").style.color = "white";
			
		}
	
	
	document.getElementById("barNumero4z").style.marginLeft =margin+"%";
	document.getElementById("barNumero4z").innerHTML = "&darr;"+ y;
	
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
} 


function operar5() {
	"use strict";
	var xa = document.getElementById("hueco5a").value;
	var xb = document.getElementById("hueco5b").value;
	var Y = (100-xb)*xa/100;
	
	var y = parseFloat(Y.toFixed(2));
	var u = 100-xb;
	var v = xb*xa/100;
	
	
	var margin = Math.floor(u);
	margin = margin-1;
	
	document.getElementById("hueco5z").value= y;
	
	
	
	document.getElementById("tab5a").innerHTML = xa;
	
	document.getElementById("tab5b").innerHTML = u;
	
	document.getElementById("tab5z").innerHTML = "$$ x = \\frac{"+u+"· "+ xa +"}{100}  = " +y+"€$$";
	
	document.getElementById("tab5z2").innerHTML ="Descuento: "+v+"€";
	
	
	
	
	
	
	document.getElementById("porcent5z").innerHTML = u+"%";
	
	document.getElementById("barDentro5z").style.width = u+"%";
	
	document.getElementById("barHueco5b").innerHTML = xa;
	
	
	if(u<7)
		{
			document.getElementById("porcent5z").style.color = "rgba(159,149,212,1.00)";
			
		}
	else
		{
			document.getElementById("porcent5z").style.color = "white";
			
		}
	
	
	document.getElementById("barNumero5z").style.marginLeft =margin+"%";
	document.getElementById("barNumero5z").innerHTML = "&darr;"+ y;
	
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	
	
} 



 
function operar6() { 
	"use strict";
	var xa = document.getElementById("hueco6a").value;
	var xb = document.getElementById("hueco6b").value;
	var Y = (100+1*xb)*xa/100;
	
	var y = parseFloat(Y.toFixed(2));
	var u = 100+1*xb;
	var v = xb*xa/100;
	
	document.getElementById("hueco6z").value= y;
	
	
	
	document.getElementById("tab6a").innerHTML = xa;
	
	document.getElementById("tab6b").innerHTML = u;
	
	document.getElementById("tab6z").innerHTML = "$$x = \\frac{"+u+"· "+ xa +"}{100}  = " +y+"€$$";
	
	document.getElementById("tab6z2").innerHTML ="Aumento: "+v+"€";
	
	

	
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
	
	
	
} 



function operar7() { 
	"use strict";
	var xa = document.getElementById("hueco7a").value;
	var xb = document.getElementById("hueco7b").value;
	
	var Y = 100*xb/xa;
	
	var y = parseFloat(Y.toFixed(2));
	
	
	var Q = y-100;
	var q = parseFloat(Q.toFixed(2));
	var w = xb-xa;
	
	document.getElementById("hueco7z").value= q;
	
	
	document.getElementById("tab7a").innerHTML = xa;
	
	document.getElementById("tab7b").innerHTML = xb;
	
	
	document.getElementById("tab7z").innerHTML = "$$x = \\frac{100·"+ xb+"}{"+ xa +"} = " +y+"\\% $$";
	
	document.getElementById("tab7z2").innerHTML = "Aplicado: "+ q+"%";
	
	document.getElementById("tab7z3").innerHTML = "Diferencia: "+ w+"€";
	
	
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
} 








function operaryenviar (){

	operar3();
	setData()


}



var button=document.getElementById("autoclick");
    setInterval(function(){ 
        button.click();
     }, 10000);
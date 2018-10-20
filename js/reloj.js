$(document).ready(()=>{
	
	$("#rojo").click(function() 
	{
		localStorage.setItem("colores","rojo");
		coloresls("rojo");
	});
	$("#Azul").click(function() 
	{
		localStorage.setItem("colores","azul");
		coloresls("azul");
	});
	$("#verde").click(function() 
	{
		localStorage.setItem("colores","verde");
		coloresls("verde");
	});


	//scroll
	$(".subir").click(function(e) 
	{
		e.preventDefault();
		$('html, body').animate({
			scrollTop:0
		},500);

		return false;
	});

	//Localstorage
	$("#login form").submit(function() {
		var form=$("#name").val();

		localStorage.setItem("usuario",form);
		
	});

	var validar=localStorage.getItem("usuario");

	if (validar != null && validar !="undefined") 
	{
		var about=$("#about p");

		about.html("<br><hr><strong>Bienvenido "+validar+"</strong>");
		about.append("<br><a href='#' id='logout'>salir</a>");

		$("#login").hide();

		$("#logout").click(function() 
		{
			localStorage.removeItem("usuario");
			location.reload();
		});

	}

	setInterval(()=>{
		var reloj=moment().format('hh:mm:ss');
		$("#reloj").html(reloj);

	},1000);
});
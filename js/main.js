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
	//slider
	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		slideWidth: 900,
		speed: 1000,
		auto: true,
		pause: 4000
	});

	//posts
	var post=
	[
	{
		title:"Prueba titulo 1",
		date:"Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
		content:"consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae. consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae. consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae"
	},
	{
		title:"Prueba titulo 2",
		date:"Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
		content:"consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae. consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae. consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae"
	},
	{
		title:"Prueba titulo 3",
		date:"Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
		content:"consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae. consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae. consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae"
	},
	{
		title:"Prueba titulo 4",
		date:"Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
		content:"consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae. consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae. consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae"
	},
	{
		title:"Prueba titulo 5",
		date:"Publicado el dia "+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
		content:"consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae. consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae. consectetur adipisicing elit. Ratione quia quas numquam, mollitia laborum sint rem tenetur officia, optio non explicabo. Ut eligendi suscipit saepe officiis, rerum, amet porro molestiae"
	}
	];

	post.forEach((item,index)=>{
		var posts=`
		<article class="post">
		<h2>${item.title}</h2>
		<span class="date">${item.date}</span>
		<p>
		${item.content}
		</p>
		<a href="#" class="button-more">Leer mas</a>
		</article>
		`;


		$("#posts").append(posts);
	});
	
	//cambiar colores

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

});
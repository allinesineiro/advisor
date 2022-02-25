	var conselhoCorpo = document.querySelector("#texto");
	var conselhoTitulo = document.querySelector("#titulo");
	var conselhoSorteado = [];


	function sorteiaConselho() {

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var conselhoSorteado = JSON.parse(this.responseText);
				inserir(conselhoSorteado);

			}
		};
		
		xhttp.open("GET", "https://api.adviceslip.com/advice", true);	
		xhttp.send();

		}

	function limparConselho() {
		conselhoCorpo.innerHTML = "";
		conselhoTitulo.innerHTML = "";
	}

	function inserir(conselhoSorteado) {

		limparConselho();
		conselhoTitulo.innerHTML = `<p id="titulo">ADVICE #${conselhoSorteado.slip.id}</p>`
		conselhoCorpo.innerHTML = `<p id="texto">${conselhoSorteado.slip.advice}</p>`;
	}
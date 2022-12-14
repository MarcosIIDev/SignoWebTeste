
  /**
  * Função para criar um objeto XMLHTTPRequest
  */
   function CriaRequest() {
	try{
		request = new XMLHttpRequest();
	}catch (IEAtual){

		try{
			request = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(IEAntigo){

			try{
				request = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(falha){
				request = false;
			}
		}
	}

	if (!request)
		console.log("Seu Navegador não suporta Ajax!");
	else
		return request;
}

/**
 * Função para enviar os dados
 */
function getDados() {

	// Declaração de Variáveis
	var enquete = document.getElementById("id").value;;
	var result = document.getElementById("resultado");
	var xmlreq = CriaRequest();

	// Iniciar uma requisição
	xmlreq.open("GET", "/ajax/" + enquete, true);

	// Atribui uma função para ser executada sempre que houver uma mudança de ado
	xmlreq.onreadystatechange = function(){

		// Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
		if (xmlreq.readyState == 4) {
            setTimeout(getDados, 2000);
			// Verifica se o arquivo foi encontrado com sucesso
			if (xmlreq.status == 200) {
				result.innerHTML = xmlreq.responseText;
                
			}
		}
	};
	xmlreq.send(null);
}
getDados();
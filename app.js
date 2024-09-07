function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
      section.innerHTML = "Coloque algo no Campo de Busca"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

         // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item (dado) na lista de dados (assumindo que 'dados' seja um array)
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      if(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa) ){
    // Constrói o HTML para cada resultado, formatando os dados do objeto 'dado'
    resultados += `
    <div class="item-resultado">
      <h2> 
        <a href="#" target="_blank">${dado.titulo}</a> </h2>
      <p class="descricao-meta"> ${dado.descricao}.</p> <a href=${dado.link} target="_blank">Saiba Mais</a> </div>
    ` ;
  }
if (resultados == "") {
  resultados = "<p> </p>"
 }
      }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }


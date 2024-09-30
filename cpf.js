function buscar(){
    //Função que carrega o JSON para consumir a API e processa os dados JSON
    fetch('https://raw.githubusercontent.com/hidekio/api-pokedex/refs/heads/main/dados2.json').then(resposta => resposta.json()).then(corpo => {

        var indentificador = document.getElementById("valor").value

        var encontrado = false;

        corpo.forEach(pessoa => {
            if(indentificador == pessoa.cpf){
                //JQUERY
                `var linkSite = <a href="${pessoa.link}">Visite nosso site</a>`;
                document.getElementById('imagem').innerHTML = pessoa.imagem;
                document.getElementById('nome').innerHTML = pessoa.nome;
                document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
                document.getElementById('cidade').innerHTML = pessoa.cidade;
                document.getElementById('pais').innerHTML = pessoa.pais;
                document.getElementById('link').innerHTML = linkSite;
                document.getElementById('erro').innerHTML = "";
                encontrado = true;
            } 
        })
        if(!encontrado){
            document.getElementById('erro').innerHTML = "Registro Invalido";
        }
        console.log(corpo)
    })
}
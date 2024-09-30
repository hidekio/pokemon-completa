function buscar(){
    //Função que carrega o JSON para consumir a API e processa os dados JSON
    fetch('https://raw.githubusercontent.com/hidekio/api-pokedex/refs/heads/main/dados3.json').then(resposta => resposta.json()).then(corpo => {

        var indentificador = document.getElementById("valor").value

        var encontrado = false;

        corpo.forEach(pessoa => {
            if(indentificador == pessoa.id){
                //JQUERY
                var linkSite = `<a href="${pessoa.link}">Visite nosso site</a>`;
                document.getElementById('imagem').innerHTML = pessoa.imagem;
                document.getElementById('nome').innerHTML = pessoa.nome;
                document.getElementById('numero').innerHTML = pessoa.numero;
                document.getElementById('cidade').innerHTML = pessoa.cidade;
                document.getElementById('altura').innerHTML = pessoa.altura;
                document.getElementById('tipo').innerHTML = pessoa.tipo;
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
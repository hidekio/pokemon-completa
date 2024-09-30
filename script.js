async function getWeather(){

    
    //Criação da variavel para prgar o valor do input cidade
    var cidade = document.getElementById('city').value 

    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //Variavel para consumir o JSON do item temperatura
    var tempCelsious = resposta.data.main.temp;

    //Imprime valor no front End com concatenar Jquery e duas casas decimais
    document.getElementById('temperatura').innerHTML =  
    `A temperatura atual de ${cidade
    } é: ${tempCelsious.toFixed(2)} °C`
}

  //Chamar função
  getWeather()  
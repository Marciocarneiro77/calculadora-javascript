function Converter(){

    const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
    $.getJSON(url, function(dados){

       const valorCotacaoDolar = dados.USDBRL.low;
 
       let valorEmDolar =document.querySelector("#valorEmDolar").value;

       let valorEmReal = (valorEmDolar * valorCotacaoDolar).toFixed(2);

         document.querySelector("#valorEmReal").value = valorEmReal;
         });
         let valorCotacaoDolar = 0;

         $.ajax({
             url:enderecoAPI,
             async:false,
             error:function(erro){
                 console.log("Erro ao consultar API:");
                 console.log(erro.responseJSON.message);
                 console.log(dados);
             },
             sucess:function(dados){
                 console.log("Sucesso ao consultar API");
                 console.log(dados);
                 valorCotacaoDolar = dados.USDBRL.low
             }
         });

         }


let botao = document.querySelector("#btConverter");

botao.onclick = function(){
    Converter();

}

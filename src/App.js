import React from 'react';
import './App.css';

function App() {
  var operacao = parseInt(prompt("Digite o número do exercício que deseja realizar (7 ao 13):")); 
  
  if (operacao===7){
  var idadeanos = parseInt(prompt("Digite sua idade em anos:"));
  var idademeses = parseInt(prompt("Digite os meses:"));
  var idadedias = parseInt(prompt("Digite os dias"));
  } 
  
  else if (operacao===8){
  var eleitorestotal = parseInt(prompt("Digite o número de eleitores:"));
  var votosvalidos = parseInt(prompt("Digite o número de votos válidos:"));
  var votosbranco = parseInt(prompt("Digite o número de votos em branco:"));
  var votosnulos = parseInt(prompt("Digite o número de votos nulos:"));  
  } 
  
  else if (operacao===9){
  var salariomensal = parseInt(prompt("Digite o salário mensal:"));
  var percentualreajuste = parseInt(prompt("Digite o percentual de reajuste:"));          
  } 
  
  else if (operacao===10){
  var valorfabrica = parseInt(prompt("Digite o valor de fábrica do carro:"));
  } 
  
  else if (operacao===11){
  var salariofixo = parseInt(prompt("Digite o salário fixo:"));
  var numerocarros = parseInt(prompt("Digite o número de carros vendidos:"));
  var valorvendas = parseInt(prompt("Digite o valor total de suas vendas:"));
  var valorcarrovendido = parseInt(prompt("Digite o valor recebido por carro vendido:"));  
  } 
  
  else if (operacao===12){
  var Fahrenheit = parseInt(prompt("Digite a temperatura em fahrenheit:"));               
  } 
  
  else if (operacao===13){
  var nota1 = parseInt(prompt("Digite a primeira nota:"));
  var nota2 = parseInt(prompt("Digite a segunda nota:"));
  var nota3 = parseInt(prompt("Digite a terceira nota:"));
  };

  switch (operacao) {


      case 7:
        // Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
        // dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias
        var idadetotal = (idadeanos*365)+(idademeses*30)+idadedias;
        return (
          <div className="App">
        {alert("Sua idade em dias é de:"+idadetotal)};
          </div>
        );
        break;


        case 8:
          // Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
          // brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total 
          // de eleitores. 
          var percentualvalidos = (votosvalidos/eleitorestotal)*100;
          var percentualbrancos = (votosbranco/eleitorestotal)*100;
          var percentualnulos = (votosnulos/eleitorestotal)*100;
          return (
            <div className="App">
              {alert("O número total de eleitores é de: "+eleitorestotal+". O percentual de votos válidos é de: "+percentualvalidos+"%. O percentual de votos em brancos: "+percentualbrancos+"%. O percentual de votos de nulos: "+percentualnulos+"%.")};
            </div>
          );
          break;


          case 9:
            // Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
            // Calcular e escrever o valor do novo salário.
            var salariototal = ((percentualreajuste/100)*salariomensal)+salariomensal;
            return (
              <div className="App">
               {alert("O seu novo salário é: R$"+salariototal)};
              </div>
            );
            break;


            case 10:
              // O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
              // distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
              // seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
              // calcular e escrever o custo final ao consumidor. 
              var custofinal = ((28/100)*valorfabrica)+((45/100)*valorfabrica)+valorfabrica;
              return (
                <div className="App">
                  {alert("O custo final do carro é de: R$"+custofinal)};
                </div>
              );
              break;


              case 11:
                // Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
                // mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
                // efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
                // vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
                // vendedor. 
                var salariofinal = salariofixo + (valorcarrovendido*numerocarros) + ((5/100)*valorvendas);
                return (
                  <div className="App">
                    {alert("O salário final é de: R$"+salariofinal)};
                  </div>
                );
                break;


                case 12:
                  // Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
                  // correspondente em graus Celsius (baseado na fórmula abaixo): 
                  //      C          F - 32 
                  //  ---------- = -----------
                  //      5             9 
                  // Observação: Para testar se a sua resposta está correta saiba que 100C = 212F 
                  var celsius = (Fahrenheit-32)/1.8;
                  return (
                    <div className="App">
                      {alert("A temperatura em celsius é de: "+celsius+"°")};
                    </div>
                  );
                  break;


                  case 13:
                    // Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
                    // Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 
                    // final é: 
                    //                n1 * 2 + n2 * 3 + n3 * 5 
                    //  mediafinal = -----------------------------------
                    //    
                    //                          10
                    var media = (nota1*2+nota2*3+nota3*5) / 10;
                    return (
                      <div className="App">
                        {alert("A média é de: " + media)};
                      </div>
                    );
                    break;
    default:
      return (
        <div className="App">
          {alert("Operação cancelada")};
        </div>
      );
      break;
  }
}

export default App;

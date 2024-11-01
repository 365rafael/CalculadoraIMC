function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value.replace(',', '.'));
  
    if (!peso || !altura || altura <= 0) {
      document.getElementById("resultado").innerHTML = "<p class='text-warning'>Por favor, insira valores válidos para peso e altura.</p>";
      return;
    }
  
    const imc = peso / (altura * altura);
    const imcFixed = imc.toFixed(2);
  
    // Verificação para IMC menor que 5
    if (imc < 5) {
      document.getElementById("resultado").innerHTML = "<p class='text-warning'>IMC muito baixo. Favor verificar os valores digitados. Lembre de inserir a altura com 2 casas decimais (exemplo: 1,50).</p>";
      return;
    }
  
    let classificacao = "";
    let faixaPesoMin = (18.5 * altura * altura).toFixed(2);
    let faixaPesoMax = (24.9 * altura * altura).toFixed(2);
  
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
      classificacao = "Obesidade Grau I";
    } else if (imc < 39.9) {
      classificacao = "Obesidade Grau II";
    } else {
      classificacao = "Obesidade Grau III";
    }
  
    document.getElementById("resultado").innerHTML = `
      <p>Seu IMC é: <strong>${imcFixed}</strong></p>
      <p>Classificação: <strong>${classificacao}</strong></p>
      <p>Faixa de peso ideal para sua altura: <strong>${faixaPesoMin} kg - ${faixaPesoMax} kg</strong></p>
    `;
  }
  
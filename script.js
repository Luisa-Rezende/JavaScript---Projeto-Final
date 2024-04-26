document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculo-calorias');
    const tabelaAlimentos = document.getElementById('tabela-alimentos').getElementsByTagName('tbody')[0];
    const botaoInserir = document.getElementById('botao-inserir');
  
    botaoInserir.addEventListener('click', function(event) {
      event.preventDefault();
  
      const alimentoInput = document.getElementById('alimento');
      const porcaoInput = document.getElementById('porcao');
  
      const alimento = alimentoInput.value.trim(); // Obtém o valor do campo alimento
      const porcao = porcaoInput.value.trim();
  
      if (alimento !== '' && porcao !== '' && !isNaN(porcao) && parseInt(porcao) > 0) {
        const calorias = calcularCalorias(alimento, porcao);
        adicionarLinhaTabela(alimento, porcao, calorias);
        alimentoInput.value = ''; // Limpa o campo após inserção
        porcaoInput.value = ''; // Limpa o campo após inserção
      } else {
        alert('Por favor, preencha todos os campos corretamente.');
      }
    });
  
    function calcularCalorias(alimento, porcao) {
      let calorias = 0;
  
      switch (alimento.toLowerCase()) {
        case 'banana':
          calorias = 89 * (porcao / 100); // Calorias da banana por 100g
          break;
        case 'maçã':
          calorias = 52 * (porcao / 100); // Calorias da maçã por 100g
          break;
        case 'macarrão':
          calorias = 131 * (porcao / 100); // Calorias do macarrão por 100g
          break;
        case 'banana da terra':
          calorias = 122 * (porcao / 100); // Calorias da banana da terra por 100g
          break;
        default:
          alert('Alimento não encontrado.');
          break;
      }
  
      return Math.round(calorias); // Arredonda o valor das calorias para o número inteiro mais próximo
    }
  
    function adicionarLinhaTabela(alimento, porcao, calorias) {
      const novaLinha = tabelaAlimentos.insertRow();
      const colunaAlimento = novaLinha.insertCell(0);
      const colunaPorcao = novaLinha.insertCell(1);
      const colunaCalorias = novaLinha.insertCell(2);
  
      colunaAlimento.textContent = alimento;
      colunaPorcao.textContent = porcao;
      colunaCalorias.textContent = calorias;
    }
  });
  
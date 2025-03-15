 //Variaveis
 let listaDeNumerosSorteados = []; //Lista para armazenar os números já sorteados e evitar repetições
 let numeroLimite = 10; //Definição do limite máximo para os números aleatórios
 let numeroSecreto = gerarNumeroAleatorio(); //Gera o primeiro número secreto ao iniciar o jogo

 /**
 * Função para gerar um número aleatório entre 1 e numeroLimite.
 * A função verifica se o número já foi sorteado anteriormente para evitar repetições.
 * Se todos os números possíveis já tiverem sido sorteados, a lista de números sorteados é reiniciada.
 *
 * @returns {number} Número aleatório não repetido
 */
 function gerarNumeroAleatorio() {
     // Gera um número aleatório dentro do limite definido
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     // Obtém a quantidade de números já sorteados
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
     // Se todos os números já foram sorteados, reinicia a lista
     if (quantidadeDeElementosNaLista == numeroLimite) {
         listaDeNumerosSorteados = [];
     }
     // Verifica se o número já foi sorteado antes
     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
         // Se já foi sorteado, chama a função novamente para gerar outro número
         return gerarNumeroAleatorio();
     } else {
         // Adiciona o número sorteado à lista
         listaDeNumerosSorteados.push(numeroEscolhido);
         console.log(listaDeNumerosSorteados) //Exibe a lista no console para debug
         return numeroEscolhido;
     }
 }

 /**
 * Função que reinicia o jogo para uma nova rodada.
 * Gera um novo número secreto, reseta as tentativas e reativa a interface para um novo jogo.
 */
 function reiniciarJogo() {
     // Gera um novo número secreto para a nova rodada
     numeroSecreto = gerarNumeroAleatorio();
     // Limpa o campo de entrada para um novo chute
     limparCampo();
     // Desativa o botão de reiniciar até que o jogo termine novamente
     document.getElementById('reiniciar').setAttribute('disabled', true);
 }

 /**
 * Função que verifica se o número digitado pelo jogador é igual ao número secreto.
 * Se o jogador acertar, exibe mensagem de vitória e habilita o botão para reiniciar o jogo.
 * Se errar, informa se o número secreto é maior ou menor e contabiliza as tentativas.
 * O jogador tem no máximo 2 tentativas.
 */
 function verificarChute() {
     // Obtém o valor digitado pelo jogador no input
     let chute = document.querySelector('input').value;
     console.log(numeroSecreto); // Exibe o número secreto no console para debug

     // Verifica se o jogador acertou o número secreto
     if (chute == numeroSecreto) {
         // Habilita o botão para reiniciar o jogo
         document.getElementById('reiniciar').removeAttribute('disabled');
         // Desabilita o campo de entrada para impedir novas jogadas
         document.getElementById('chute').setAttribute('disabled', true);
     }
     // Caso o jogador erre, informa se o número secreto é maior ou menor
     else {
         if (chute > numeroSecreto) {
             alert('O número secreto é menor');
         } else {
             alert('O número secreto é maior');
         }
     }
 }
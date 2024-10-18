const caixaPrincipal =  document.querySelector(".caixa-principal");
 const caixaPerguntas =  document.querySelector(".caixa-perguntas"); 
 const caixaAlternativas =  document.querySelector(".caixa-alternativas");
 const caixaResultado =  document.querySelector(".caixa-resultado");
 const textoResultado =  document.querySelector(".texto-resultado");

 const perguntas = [
    {
        enunciado: "Julie está grávida de 39 semanas, certo dia enquanto estava arrumando o quarto do bebê sentiu uma dor intensa, preocupada decidiu tentar marcar uma consulta.  No entanto, ela se deparou com uma longa lista de espera para marcar uma consulta com o médico especialista que a acompanhava, o que ela deve fazer?",
        alternativas: [
            {
                texto: "Enfrentar a longa lista de espera para consultar como médico que a acompanhava.",
                afirmacao: "afirmação"
            },
            {
                 
            texto: "Buscar outro especialista, realizando os exames necessários o mais rápido possível.",
            afirmacao: "afirmação"
             }
        ]
    },
    {
        enunciado: "Ao tenta marcar a consulta percebeu que o seu plano de saúde não cobria mais a consulta e nem os exames, porém ela não foi comunicada que seu convênio havia sido mudado. Qual a melhor atitude a se tomar?",
        alternativas: [
            {
                texto: "Pagar tudo particular e esquecer o ocorrido.",
                afirmacao: "afirmação"
            },
            {
                 
            texto: "Pagar tudo particular e depois recorrer a empresa e ao convênio comunicando o ocorrido.",
            afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Julie foi a consulta, realizou os exames necessários e descobriu que estava tudo bem com o feto, que não havia riscos para se preocupar. Voltando para a casa, ficou em repouso como o doutor havia recomendado, no dia seguinte, ao se levanta da cama percebeu que sua bolsa tinha estourado, seu marido levou ela as pressas para o hospital. No hospital, foi informada que não havia nenhum leito disponível e o hospital mais próximo não aceitava o seu plano de saúde, somente particular e o próprio convênio. Diante desse cenário, o que Julie deve fazer?",
        alternativas: [
            {
                texto: "Esperar algum leito no hospital que ela aceita o seu convênio.",
                afirmacao: "afirmação"
            },
            {
                 
            texto: "Ir para outro hospital e pagar tudo particular.",
            afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "No hospital, ela foi informada que não havia nenhum médico disponível para realizar seu parto,  o que deve ser feito?",
        alternativas: [
            {
                texto: "Deve-se esperar algum médico ficar disponível para realizar o eu parto.",
                afirmacao: "afirmação"
            },
            {
                 
            texto: "Deve-se ligar para o médico que a acompanhou durante a sua gestação, esperando ele chegar no hospital para realizar o seu parto.",
            afirmacao: "afirmação"
            }
        ]
    },
 ];
 
 
 let atual = 0 ;
 let perguntaAtual;
 let hitoriaFinal = "";
 
 
 function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado()
        return;
    }
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
 }
 
 function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click",  () => respostaSelecionada (alternativa))
    caixaAlternativas.appendChild(botaoAlternativas);
 }
 }
 
 function respostaSelecionada (opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta ();
 }

 function mostraResultado(){
    caixaPerguntas.textContent = "Apesar de todo o ocorrido, Julie teve seu parto tranquilamente, e seu bebêr nasceu saudável";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
 }
 
 mostraPergunta ();
 
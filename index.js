const perguntas = [
    {
      pergunta: "Qual é a maneira correta de escrever uma instrução if em JavaScript?",
      respostas: [
        "if (i == 5) then",
        "if i == 5",
        "if (i == 5)",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes métodos de String retorna o comprimento da string?",
      respostas: [
        "length()",
        "size()",
        "length",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
      respostas: [
        "&&",
        "++",
        "+",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes métodos remove o último elemento de um array e retorna esse elemento?",
      respostas: [
        "pop()",
        "push()",
        "remove()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes métodos de Array adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array?",
      respostas: [
        "push()",
        "concat()",
        "add()",
      ],
      correta: 0
    },
    {
      pergunta: "Como você define uma variável em JavaScript?",
      respostas: [
        "variable myVar;",
        "var myVar;",
        "v myVar;",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Ele retorna o tipo de uma variável",
        "Ele compara o tipo de duas variáveis",
        "Ele converte o tipo de uma variável",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de se comentar uma linha de código em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "",
        "' Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes loops é usado especificamente para iterar sobre os valores de um array?",
      respostas: [
        "for loop",
        "while loop",
        "for...of loop",
      ],
      correta: 2
    },
    {
      pergunta: "O que é DOM em JavaScript?",
      respostas: [
        "Um modelo para representar documentos XML",
        "Uma linguagem de programação",
        "Uma interface que permite a manipulação de documentos HTML",
      ],
      correta: 2
    },
  ];
  
  // buscamos documento html e colocamos em uma variavel
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  // usa # para encontrar o id e o espaco pega o filho que no caso eh o span
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou repeticao
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    // muda o h3 para a pergunta
    quizItem.querySelector('h3').textContent = item.pergunta
  
    // para cada resposta em item.respostas
    for (let resposta of item.respostas) {
      // dentro de dl procura o dt
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      // mudando o conteudo do span
      dt.querySelector('span').textContent = resposta
      // 
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      // vai pegar o valor e vai atualizar pegando os indices das respostas especificas
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      // arrow function | um escopo | rotina que roda quando ha mudanca no input
      dt.querySelector('input').onchange = (event) => {
        // alocando em uma const caso o input selecionado seja igual a resposta correta
        // == compara os valores sem considerar o tipo (string, numero etc)
        const estaCorreta = event.target.value == item.correta
  
        // deleta o item mas se for correto adiciona ele no if
        corretas.delete(item)
        // se estiver correta ele vai adicionar o item
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      // procura o dl e adiciona o filho dt na  tela
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // deletando o 'Resposta A'
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }

// Exercício 1: Lista de Compras
// Maria está indo ao supermercado. Ela tem uma lista de itens para comprar. Ajude Maria a criar
// um programa que permita que ela adicione cada item à sua lista de compras. No final, exiba a
// // lista completa de compras.


// let armazenar = [];

// function adicionarItem() {
//   let novo = prompt("Digite o nome do novo item:");
//   armazenar.push(novo);
//   alert("Item adicionado ao estoque: " + novo);
// }
// function remover() {
//   if (armazenar.length === 0) {
//     alert("Voce ainda não tem nada");
//     return;
//   }
  
//   let remover = prompt("Digite o índice do item a ser removido (0 até " + (armazenar.length - 1) + "):");
//   remover = parseInt(remover);
  
//   if (isNaN(remover) || remover < 0 || remover >= armazenar.length) {
//     alert("Índice inválido.");
//     return;
//   }
  
//   let removido = armazenar.splice(remover, 1);
//   alert("Item removido da compra " + removido[0]);
// }
// function exibirArmanezar() {
//   if (armazenar.length === 0) {
//     alert("O carrinho está vazio.");
//     return;
//   }
  
//   let listaItens = "Itens de compra:\n";
//   armazenar.forEach(function(item, index) {
//     listaItens += index + ": " + item + "\n";
//   });
  
//   alert(listaItens);
// }
// while (true) {
//   let opcao = prompt("Escolha uma opção:\n1. Adicionar item\n2. Remover item\n3. Exibir compra\n4. Sair");
  
//   switch (opcao) {
//     case "1":
//       adicionarItem();
//       break;
//     case "2":
//       removerItem();
//       break;
//     case "3":
//       exibirEstoque();
//       break;
//     case "4":
//       alert("Saindo do programa.");
//       exit(0);
//     default:
//       alert("Opção inválida.");
//   }
// }

// Carlos está organizando sua agenda semanal. Ele quer criar um programa para adicionar os
// eventos que ele precisa participar em cada dia da semana. Ajude Carlos a criar um calendário
// de eventos usando arrays para cada dia da semana e exiba os eventos planejados.

function adicionarSemana; {
[],
[],
[],
[],
[],
[],
[],
}
    let novo = prompt("Digite um evento para sua semana");{
    armazenar.push(novo);
    alert("Evento adicionado na lista" + novo);
  }
  
  function removerItem() {
    if (armazenar.length === 0) {
      alert("Você ainda não possui evento!");
      return;
    }
    
    let remover = prompt("Digite o número para ser removido (0 até " + (adicionarSemana.length - 1) + "):");
    remover = parseInt(remover);
    
    if (isNaN(remover) || remover < 0 || remover >= armazenar.length) {
      alert("Número inválido.");
      return;
    }
    
    let removido = armazenar.splice(remover, 1);
    alert("Livro removido: " + removido[0]);
  }
  
  function exibirEstoque() {
    if (armazenar.length === 0) {
      alert("A lista está vazia.");
      return;
    }
    
    let listaItens = "Livros\n";
    armazenar.forEach(function(item, index) {
      listaItens += index + ": " + item + "\n";
    });
    
    alert(listaItens);
  }
  
  while (true) {
    let opcao = prompt("Escolha uma opção:\n1. Adicionar\n2. Remover\n3. Exibir a lista\n4. Sair");
    
    switch (opcao) {
      case "1":
        adicionarItem();
        break;
      case "2":
        removerItem();
        break;
      case "3":
        exibirEstoque();
        break;
      case "4":
        alert("Até mais :)");
        break; 
      default:
        alert("Opção inválida.");
    }
  }
  
// Ana ama ler e está construindo sua coleção de livros. Crie um programa para Ana registrar os
// títulos dos livros que ela possui. No final, exiba a lista completa de livros.
// let armazenar = [];

// function adicionarItem() {
//   let novo = prompt("Digite o nome ou título do livro");
//   armazenar.push(novo);
//   alert("Item adicionado na lista: " + novo);
// }

// function removerItem() {
//   if (armazenar.length === 0) {
//     alert("Você ainda não possui nenhum livro!");
//     return;
//   }
  
//   let remover = prompt("Digite o número para ser removido (0 até " + (armazenar.length - 1) + "):");
//   remover = parseInt(remover);
  
//   if (isNaN(remover) || remover < 0 || remover >= armazenar.length) {
//     alert("Número inválido.");
//     return;
//   }
  
//   let removido = armazenar.splice(remover, 1);
//   alert("Livro removido: " + removido[0]);
// }

// function exibirEstoque() {
//   if (armazenar.length === 0) {
//     alert("A lista está vazia.");
//     return;
//   }
  
//   let listaItens = "Livros\n";
//   armazenar.forEach(function(item, index) {
//     listaItens += index + ": " + item + "\n";
//   });
  
//   alert(listaItens);
// }

// while (true) {
//   let opcao = prompt("Escolha uma opção:\n1. Adicionar\n2. Remover\n3. Exibir a lista\n4. Sair");
  
//   switch (opcao) {
//     case "1":
//       adicionarItem();
//       break;
//     case "2":
//       removerItem();
//       break;
//     case "3":
//       exibirEstoque();
//       break;
//     case "4":
//       alert("Até mais :)");
//       break; 
//     default:
//       alert("Opção inválida.");
//   }
// }

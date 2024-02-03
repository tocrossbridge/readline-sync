const readline = require('readline-sync');

var shoppingCart = [];

console.log(`
Bem vindo ao incrível supermercado Terminal :D
Temos os melhores produtos a uma linha de comando de você!
`)
menuOpcoes()

// FUNÇÕES 
function menuOpcoes() {
  let opcao = readline.question(
    `----------------------------
  01 - Ver carrinho
  02 - Adicionar item do carrinho
  03 - Remover item do carrinho
  04 - Procurar um item
  05 - Sair
----------------------------
  `)

  return selecionarOpcao(opcao)
}

function selecionarOpcao(opcao) {
  switch (opcao) {
    case '01':
      return viewShoppingCart();
    case '02':
      let add = readline.question(`Digite o item:`)
      addItem(add);
      retornarMenu()
      break;
    case '03':
      let remove = readline.question(`Digite o item:`)
      removeItem(remove);
      retornarMenu()
      break;
    case '04':
      let item = readline.question(`Qual item está procurando?`)
      searchItem(item)
      retornarMenu()
      break;
    case '05':
      console.log("Foi um prazer atendê-lo! Byyyye :D")
      break;
    default:
      console.log(`Opçao invalida!`)
      menuOpcoes()
      break;
  }
}

function retornarMenu() {
  let retornar = readline.question(`
  Retornar ao menu?
  S pra sim e N para nao
`)
  return retornar == 'S' ? menuOpcoes() : selecionarOpcao('05')
}

function addItem(item) { return shoppingCart.push(item); }

function removeItem(item) {
  const index = shoppingCart.indexOf(item);
  if (index !== -1) {
    return shoppingCart.splice(index, 1)
  }
}

function searchItem(item) {
  return shoppingCart.indexOf(item) !== -1 ? console.log(`Item está no carrinho!`) : console.log(`Item não está no carrinho :(`)
}

function viewShoppingCart() {
  if (shoppingCart.length == 0) {
    console.log(`Carrinho vazio :(`)
    retornarMenu()
  } else {
    console.log("Itens do carrinho:")
    shoppingCart.map((item, i) => console.log(`Item ${i + 1}: ${item}`))
    menuOpcoes()
  }
}
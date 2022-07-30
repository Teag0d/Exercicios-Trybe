const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");
const liFather = document.querySelector(".container");
const allLi = liFather.children;

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? R: Transform na classe tech

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
/*firstLi.addEventListener("click", function () {
  firstLi.className = "tech";
  secondLi.className = "";
  thirdLi.className = "";
});
secondLi.addEventListener("click", function () {
  secondLi.className = "tech";
  firstLi.className = "";
  thirdLi.className = "";
});
thirdLi.addEventListener("click", function () {
  thirdLi.className = "tech";
  firstLi.className = "";
  secondLi.className = "";
});*/
// console.log(allLi[0]);
for (let i = 0; i < allLi.length; i++) {
  liFather.addEventListener("click", function (event) {
    // console.log(allLi[i]);
    console.log(event.target);
    let target = event.target;
    if (allLi[i] == target) {
      allLi[i].className = "tech";
    } else {
      allLi[i].className = "";
    }
  });
}
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener("change", function () {
  let text = document.getElementById("input").value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
// myWebpage.addEventListener("dblclick", function () {});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

import { City } from "./util.js";

/* let linkedList = new NodeChildren();
linkedList.addNode(20);
linkedList.addNode(30);
linkedList.listNode(); */

// Instanciando os objetos (Cidades e seus respectivos indentificadores)
let bucharest = new City("bucharest"),
  pitesti = new City("pitesti"),
  craiova = new City("craiova"),
  rimnicuvilcea = new City("rimnicuvilcea"),
  urziceni = new City("urziceni"),
  arad = new City("arad"),
  fragaras = new City("fragaras"),
  lugoj = new City("lugoj"),
  dobreta = new City("dobreta"),
  hirsova = new City("hirsova"),
  timisoara = new City("timisoara"),
  mehadia = new City("mehadia"),
  vaslul = new City("vaslul"),
  oradea = new City("oradea"),
  zerind = new City("zerind"),
  iasi = new City("iasi"),
  eforie = new City("eforie"),
  neamt = new City("neamt"),
  sibiu = new City("sibiu"),
  girgiu = new City("girgiu");

// Criando os relacionamentos entre cidades (Utilizado vetores por enquanto)
bucharest.nearbyCities = [
  { name: fragaras, distance: 211 },
  { name: pitesti, distance: 101 },
  { name: girgiu, distance: 90 },
  { name: urziceni, distance: 85 },
];
sibiu.nearbyCities = [
  { name: oradea, distance: 151 },
  { name: arad, distance: 140 },
  { name: fragaras, distance: 99 },
  { name: rimnicuvilcea, distance: 80 },
];
pitesti.nearbyCities = [
  { name: rimnicuvilcea, distance: 97 },
  { name: bucharest, distance: 101 },
  { name: craiova, distance: 138 },
];
craiova.nearbyCities = [
  { name: dobreta, distance: 120 },
  { name: rimnicuvilcea, distance: 146 },
  { name: pitesti, distance: 138 },
];
rimnicuvilcea.nearbyCities = [
  { name: sibiu, distance: 80 },
  { name: craiova, distance: 146 },
  { name: pitesti, distance: 97 },
];
urziceni.nearbyCities = [
  { name: bucharest, distance: 85 },
  { name: hirsova, distance: 98 },
  { name: vaslul, distance: 142 },
];
arad.nearbyCities = [
  { name: zerind, distance: 75 },
  { name: sibiu, distance: 140 },
  { name: timisoara, distance: 118 },
];
fragaras.nearbyCities = [
  { name: sibiu, distance: 99 },
  { name: bucharest, distance: 211 },
];
lugoj.nearbyCities = [
  { name: timisoara, distance: 111 },
  { name: mehadia, distance: 70 },
];
dobreta.nearbyCities = [
  { name: mehadia, distance: 75 },
  { name: craiova, distance: 120 },
];
hirsova.nearbyCities = [
  { name: urziceni, distance: 98 },
  { name: eforie, distance: 86 },
];
timisoara.nearbyCities = [
  { name: arad, distance: 118 },
  { name: lugoj, distance: 111 },
];
mehadia.nearbyCities = [
  { name: lugoj, distance: 70 },
  { name: dobreta, distance: 75 },
];
vaslul.nearbyCities = [
  { name: urziceni, distance: 142 },
  { name: iasi, distance: 92 },
];
oradea.nearbyCities = [
  { name: zerind, distance: 71 },
  { name: sibiu, distance: 151 },
];
zerind.nearbyCities = [
  { name: arad, distance: 75 },
  { name: oradea, distance: 71 },
];
iasi.nearbyCities = [
  { name: vaslul, distance: 92 },
  { name: neamt, distance: 87 },
];
eforie.nearbyCities = [{ name: hirsova, distance: 86 }];
neamt.nearbyCities = [{ name: iasi, distance: 87 }];
girgiu.nearbyCities = [{ name: bucharest, distance: 90 }];

// Instanciando ponto de inicio da jornada (Começando em Arad), um vetor para armazenar as cidades pelo qual passará e também o total (Distância em KM percorrido)
let currentCity = arad;
let visitedCities = [];
let total = 0;
currentCity.visited = true;
visitedCities.push(arad);

// Lógica da viagem (Algoritmo Guloso) vai na cidade mais próxima (E não visitada) da cidade em qual está
// Exemplo: Arad (Cidades Próximas: Zerind -> 75KM; Sibiu -> 140KM; Timisoara -> 118KM - Ele vai escolher Zerind pois é a mais próxima
while (currentCity.name != bucharest.name) {
  let shorterCity = Number.MAX_VALUE;
  let nextCity = null;
  let nextJump = 0;
  // Verifica todas as cidades que tem conexão
  currentCity.nearbyCities.forEach((city) => {
    // Verifica qual possuí menor distância e ainda não visitada
    if (city.distance < shorterCity && city.name.visited == false) {
      // Dá uma olhada se a próxima cidade só tem uma conexão e se ela é Bucarest, se não for ele nem vai (Para evitar ficar preso e ter que voltar)
      //TODO: Implementar de forma recursiva para ir voltando invés de olhar e evitar
      if (
        !(
          city.name.nearbyCities.length == 1 &&
          city.name.nearbyCities[0].name.name != bucharest.name
        )
      )
        // Se a cidade é próxima, não foi visitada ainda e tem mais de uma conexão então é uma candidata à próxima parada
        nextCity = city.name;
      shorterCity = city.distance;
      nextJump = city.distance;
    }
  });
  /* Informa a cidade que irá em seguida, soma o caminho até ela e adiciona a mesma para a lista de cidade visitadas (Visitada = true) e adicionada no vetor
  roda novamente o laço de repetição */
  console.log("Passou por: " + currentCity.name);
  total += nextJump;
  visitedCities.push(nextCity);
  nextCity.visited = true;
  currentCity = nextCity;
}
console.log("E chegou em Bucharest");
console.log(
  `A distância percorrida foi de: ${total} Km, andamos um bocado hein 🥵`
);

/* visitedCities.forEach((city) => {
  console.log(city.name);
});
 */

import { City } from "./util.js";

// Instanciando os objetos (Cidades e seus respectivos nomes e distâncias em linha reta até Bucareste)
let bucharest = new City("bucharest", 0),
  pitesti = new City("pitesti", 98),
  craiova = new City("craiova", 160),
  rimnicuvilcea = new City("rimnicuvilcea", 193),
  urziceni = new City("urziceni", 80),
  arad = new City("arad", 366),
  fragaras = new City("fragaras", 178),
  lugoj = new City("lugoj", 244),
  dobreta = new City("dobreta", 242),
  hirsova = new City("hirsova", 151),
  timisoara = new City("timisoara", 329),
  mehadia = new City("mehadia", 241),
  vaslul = new City("vaslul", 199),
  oradea = new City("oradea", 380),
  zerind = new City("zerind", 374),
  iasi = new City("iasi", 226),
  eforie = new City("eforie", 161),
  neamt = new City("neamt", 234),
  sibiu = new City("sibiu", 253),
  girgiu = new City("girgiu", 77);

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
  /* { name: rimnicuvilcea, distance: 97 }, */
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
  /* { name: pitesti, distance: 97 }, */
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

let availableCities = [];
availableCities.push({
  parent: null,
  distance: arad.distanceBucharest,
  cidade: arad,
});
let currentCity = availableCities[0];

while (currentCity.cidade.distanceBucharest != 0) {
  let minor = Number.MAX_VALUE;

  console.log("Passou por: " + currentCity.cidade.name);

  currentCity.cidade.nearbyCities.forEach((city) => {
    availableCities.push({
      parent: currentCity.cidade,
      distance: city.name.distanceBucharest + city.distance,
      cidade: city.name,
      visited: false,
    });
  });

  // Verificamos as cidades disponíveis para trabalharmos e vemos qual é a mais próxima (Qual será a próxima parada)
  availableCities.forEach((city) => {
    if (city.distance < minor && city.visited == false) {
      currentCity = city;
      minor = city.distance;
    }
  });
  currentCity.visited = true;
}
console.log("E chegou em Bucharest 🥵");
/* availableCities.forEach((element) => {
  if (element.visited == true) {
    console.log(element);
  }
}); */
//TODO: Verificar uma forma de como calcular a distância percorrida, considerando as voltas quando encontra um caminho melhor (Volta algumas camadas)
/* console.log(
  `A distância percorrida foi de: ${total} Km, andamos um bocado hein 🥵`
); */

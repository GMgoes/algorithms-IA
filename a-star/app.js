import { City } from "./util.js";

// Instanciando os objetos (Cidades e seus respectivos nomes e distâncias em linha reta até Bucareste)

let itinerario = {
  Bucareste: { name: "Bucareste", distance: 0 },
  Pitesti: { name: "Pitesti", distance: 98 },
  Craiova: { name: "Craiova", distance: 160 },
  RimnicuVilcea: { name: "RimnicuVilcea", distance: 193 },
  Urziceni: { name: "Urziceni", distance: 80 },
  Arad: { name: "Arad", distance: 366 },
  Fagaras: { name: "Fagaras", distance: 178 },
  Lugoj: { name: "Lugoj", distance: 244 },
  Drobeta: { name: "Drobeta", distance: 242 },
  Hirsova: { name: "Hirsova", distance: 151 },
  Timisoara: { name: "Timisoara", distance: 329 },
  Mehadia: { name: "Mehadia", distance: 241 },
  Vaslul: { name: "Vaslul", distance: 199 },
  Oradea: { name: "Oradea", distance: 380 },
  Zerind: { name: "Zerind", distance: 374 },
  Iasi: { name: "Iasi", distance: 226 },
  Eforie: { name: "Eforie", distance: 161 },
  Neamt: { name: "Neamt", distance: 234 },
  Sibiu: { name: "Sibiu", distance: 253 },
  Girgiu: { name: "Girgiu", distance: 77 },
};

// Criando os relacionamentos entre cidades (Utilizado vetores por enquanto)
const romenia = {
  Urziceni: [{ Bucharest: 85 }, { Hirsova: 98 }, { Vaslui: 142 }],
  Hirsova: [{ Urziceni: 98 }, { Eforie: 86 }],
  Vaslul: [{ Urziceni: 142 }, { Iasi: 92 }],
  Iasi: [{ Vaslui: 92 }, { Neamt: 87 }],
  Eforie: [{ Hirsova: 86 }],
  Neamt: [{ Neamt: 87 }],
  Girgiu: [{ Girgiu: 90 }],
  Arad: [{ Zerind: 75 }, { Timisoara: 118 }, { Sibiu: 140 }],
  Zerind: [{ Arad: 75 }, { Oradea: 71 }],
  Oradea: [{ Zerind: 71 }, { Sibiu: 151 }],
  Timisoara: [{ Arad: 118 }, { Lugoj: 111 }],
  Lugoj: [{ Timisoara: 111 }, { Mehadia: 70 }],
  Mehadia: [{ Lugoj: 70 }, { Drobeta: 75 }],
  Drobeta: [{ Mehadia: 75 }, { Craiova: 120 }],
  Sibiu: [
    { Arad: 140 },
    { Oradea: 151 },
    { Fagaras: 99 },
    { RimnicuVilcea: 80 },
  ],
  Fagaras: [{ Sibiu: 99 }, { Bucareste: 211 }],
  RimnicuVilcea: [{ Sibiu: 80 }, { Craiova: 146 } /* { Pitesti: 97 } */],
  Craiova: [{ Drobeta: 120 }, { RimnicuVilcea: 146 }, { Pitesti: 138 }],
  Pitesti: [, /* { RimnicuVilcea: 97 } */ { Craiova: 138 }, { Bucareste: 101 }],
  Bucareste: [{ Fagaras: 211 }, { Pitesti: 101 }],
};

let starterCity = new City(
  null,
  itinerario["Arad"].name,
  itinerario["Arad"].distance
);
starterCity.visited = true;

let availableCities = [];
availableCities.push(starterCity);

let currentCity = starterCity;

while (currentCity.name != "Bucareste") {
  let minor = Number.MAX_VALUE;

  console.log("Passou por: " + currentCity.name);

  romenia[currentCity.name].forEach((city) => {
    let cityExpanded = new City(
      currentCity,
      Object.keys(city)[0],
      city[Object.keys(city)[0]] + itinerario[Object.keys(city)[0]].distance
    );
    availableCities.push(cityExpanded);
  });
  /* console.log(availableCities); */
  availableCities.forEach((no_way) => {
    if (no_way.distance < minor && no_way.visited == false) {
      currentCity = no_way;
      minor = no_way.distance;
    }
  });
  currentCity.visited = true;
}
console.log("E chegou em bucharest 🥵 \n");

let lastCity;
availableCities.forEach((element) => {
  if (element.name == "Bucareste") {
    lastCity = element;
  }
});
while (lastCity.parent != null) {
  console.log(`Passou por: ${lastCity.name}`);
  lastCity = lastCity.parent;
}

console.log("E chegou em arad 🥵");

import State from "./State.js";
import {
  print_matrice,
  is_result,
  solvable_matrice,
  actual_position,
  /* calculate_distance, */
} from "./utils.js";

// Objective
let result = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
];
/* To generate a random matrice
let matrice = solvable_matrice();
print_matrice(matrice); */
// Matrice to test (Static and predictable)
let matrice = [
  [2, 5, 6],
  [3, 4, 1],
  [0, 7, 8],
];

let frontier = [];
let actual_matrice = new State(null, matrice, 0);
frontier.push(actual_matrice);
let row, column;

while (!is_result(result, actual_matrice)) {
  ({ row, column } = actual_position(actual_matrice));

  if (row > 0) {
    console.log("Cria um cenário com movimento pra cima");
  }
  if (row < 2) {
    console.log("Cria um cenário com movimento pra baixo");
  }
  if (column > 0) {
    console.log("Cria um cenário com movimento pra esquerda");
  }
  if (row < 2) {
    console.log("Cria um cenário com movimento pra direita");
  }
}

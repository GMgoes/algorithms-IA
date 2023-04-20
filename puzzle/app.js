import State from "./State.js";
import {
  print_matrice,
  is_result,
  is_a_solvable_matrice,
  actual_position_column,
  actual_position_row,
  clone_actual,
} from "./utils.js";

// Objective
let result = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
];
/* To generate a random matrice
let matrice = [];
matrice = is_a_solvable_matrice();
print_matrice(matrice); */

// Matrice to test (Static and predictable)
let matrice = [
  [0, 1, 3],
  [4, 2, 5],
  [7, 8, 6],
];

let frontier = [];

let matrice_initial = new State(null, matrice, "empty", 0);
frontier.push(matrice_initial);
let actual_matrice = matrice_initial;

let row, column;
let counter = 0;

while (!is_result(result, actual_matrice.actual_state)) {
  let minor_disordered = Number.MAX_VALUE;

  actual_matrice.visited = true;

  row = actual_position_row(actual_matrice.actual_state);
  column = actual_position_column(actual_matrice.actual_state);

  if (row > 0 && !(actual_matrice.state_before == "up")) {
    // Move up
    let clone = clone_actual(actual_matrice.actual_state);
    clone[row][column] = actual_matrice.actual_state[row - 1][column];
    clone[row - 1][column] = 0;
    const next_state = new State(
      actual_matrice,
      clone,
      "up",
      actual_matrice.cost_deep
    );
    frontier.push(next_state);
  }
  if (row < 2 && !(actual_matrice.state_before == "down")) {
    // Move down
    let clone = clone_actual(actual_matrice.actual_state);
    clone[row][column] = actual_matrice.actual_state[row + 1][column];
    clone[row + 1][column] = 0;
    const next_state = new State(
      actual_matrice,
      clone,
      "down",
      actual_matrice.cost_deep
    );
    frontier.push(next_state);
  }
  if (column > 0 && !(actual_matrice.state_before == "left")) {
    // Move left
    let clone = clone_actual(actual_matrice.actual_state);
    clone[row][column] = actual_matrice.actual_state[row][column - 1];
    clone[row][column - 1] = 0;
    const next_state = new State(
      actual_matrice,
      clone,
      "left",
      actual_matrice.cost_deep
    );
    frontier.push(next_state);
  }
  if (column < 2 && !(actual_matrice.state_before == "right")) {
    // Move right
    let clone = clone_actual(actual_matrice.actual_state);
    clone[row][column] = actual_matrice.actual_state[row][column + 1];
    clone[row][column + 1] = 0;
    const next_state = new State(
      actual_matrice,
      clone,
      "right",
      actual_matrice.cost_deep
    );
    frontier.push(next_state);
  }
  frontier.forEach((element) => {
    if (element.visited == false && element.total_cost < minor_disordered) {
      actual_matrice = element;
      minor_disordered = element.total_cost;
    }
  });
  console.log(actual_matrice.total_cost);
  /* frontier.forEach((element) => {
    console.log(element);
  }); */
  console.log("No momento está assim:");
  print_matrice(actual_matrice.actual_state);
  counter++;
}
console.log("A quantidade de testes que IA precisou foi: " + counter);
print_matrice(actual_matrice.actual_state);
console.log(actual_matrice);

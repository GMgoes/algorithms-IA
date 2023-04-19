function generate_square() {
  let vector = [];
  let matrice = [];

  while (vector.length != 9) {
    let flag = false;
    let number = Math.floor(Math.random() * 9);
    vector.forEach((element) => {
      if (element == number) {
        flag = true;
      }
    });
    if (!flag) {
      vector.push(number);
    }
  }
  matrice[0] = [vector[0], vector[1], vector[2]];
  matrice[1] = [vector[3], vector[4], vector[5]];
  matrice[2] = [vector[6], vector[7], vector[8]];

  return matrice;
}
function calculate_disordered(matrice) {
  let index = 1;
  let total = 0;
  matrice.forEach((element) => {
    element.forEach((number) => {
      if (number != index) {
        total++;
      }
      index++;
    });
  });
  return total;
}
function print_matrice(matrice) {
  matrice.forEach((element) => {
    console.log(element);
  });
}
/* function calculate_distance(matrice, number) {
  let row_white_space = 0;
  let colum_white_space = 0;
  let row_to_number = 0;
  let column_to_number = 0;

  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[0].length; j++) {
      if (matrice[i][j] == number) {
        row_to_number = i;
        column_to_number = j;
      }
      if (matrice[i][j] == 0) {
        row_white_space = i;
        colum_white_space = j;
      }
    }
  }
  let distance =
    Math.abs(row_white_space - row_to_number) +
    Math.abs(colum_white_space - column_to_number);

  return distance;
} */
function is_result(matrice, matrice_to_test) {
  return JSON.stringify(matrice) === JSON.stringify(matrice_to_test);
}
function solvable_matrice() {
  let total_disordered = 0;
  let matrice;
  while (total_disordered % 2 == 0) {
    matrice = generate_square();
    total_disordered = calculate_disordered(matrice);
  }
  return matrice;
}
function actual_position(matrice) {
  let row, column;
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[0].length; j++) {
      if (matrice[i][j] == 0) {
        row = i;
        column = j;
      }
    }
  }
  return { row, column };
}
export {
  generate_square,
  calculate_disordered,
  print_matrice,
  solvable_matrice,
  actual_position,
  is_result,
  /* calculate_distance, */
};

function generate_numbers() {
  let vector = [];

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
  return vector;
}
function is_a_solvable_matrice() {
  let flag = true;
  let matrice = [];
  let vector = [];
  while (flag) {
    vector = generate_numbers();
    let total_inversions = 0;
    vector.forEach((element) => {
      for (let i = 0; i < vector.length; i++) {
        if (element < vector[i]) {
          total_inversions++;
        }
      }
    });
    total_inversions % 2 == 0 ? (flag = false) : (flag = true);
  }
  matrice[0] = [vector[0], vector[1], vector[2]];
  matrice[1] = [vector[3], vector[4], vector[5]];
  matrice[2] = [vector[6], vector[7], vector[8]];
  return matrice;
}
function print_matrice(matrice) {
  matrice.forEach((element) => {
    console.log(element);
  });
}
function calculate_total_each(matrice) {
  let total = 0;
  for (let i = 1; i < 9; i++) {
    total = total + calculate_each_disordered(matrice, i);
  }
  return total;
}
/* function calculate_each_disordered(matrice, number) {
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
function calculate_each_disordered(matrice, number) {
  let row_to_number = 0;
  let column_to_number = 0;
  let row_to_position = 0;
  let column_to_position = 0;

  let transform = -1;
  let must_positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
  ];
  let distance = 0;

  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[0].length; j++) {
      if (matrice[i][j] == number) {
        row_to_number = i;
        column_to_number = j;
      }
      if (must_positions[i][j] == number) {
        row_to_position = i;
        column_to_position = j;
      }
    }
  }
  distance =
    Math.abs(row_to_position - row_to_number) +
    Math.abs(column_to_position - column_to_number);
  return distance;
}
function is_result(matrice, matrice_to_test) {
  let flag = true;
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[0].length; j++) {
      if (matrice[i][j] != matrice_to_test[i][j]) {
        flag = false;
      }
    }
  }
  return flag;
}
function actual_position_row(matrice) {
  let row;
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[0].length; j++) {
      if (matrice[i][j] == 0) {
        row = i;
      }
    }
  }
  return row;
}
function actual_position_column(matrice) {
  let column;
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[0].length; j++) {
      if (matrice[i][j] == 0) {
        column = j;
      }
    }
  }
  return column;
}
function clone_actual(matrice) {
  return JSON.parse(JSON.stringify(matrice));
}

export {
  print_matrice,
  is_a_solvable_matrice,
  actual_position_row,
  actual_position_column,
  is_result,
  clone_actual,
  calculate_total_each,
};

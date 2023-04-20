import { calculate_total_each } from "./utils.js";

export default class State {
  constructor(father_of_actual, actual_state, state_before, cost_deep) {
    this.father_of_actual = father_of_actual;
    this.actual_state = actual_state;
    this.state_before = state_before;
    this.cost_deep = cost_deep + 1;
    this.each_disordered = calculate_total_each(actual_state);
    this.total_cost = this.each_disordered + this.cost_deep;
    this.visited = false;
  }
}

import calculate_disordered from "./utils";

export default class State {
  constructor(state_father, actual_state, cost_to_come) {
    this.state_father = state_father;
    this.actual_state = actual_state;
    this.cost_to_come = cost_to_come;
    this.total_disordered = calculate_disordered(actual_state);
    this.total_cost = cost_to_come + this.total_disordered;
  }

  compareTo(other) {
    return this.total_cost - other.total_cost;
  }
}

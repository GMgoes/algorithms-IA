// Classe para instanciar um objeto do tipo Nó
/* export class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

export class NodeChildren {
  constructor() {
    this.head = null;
  }
  //let length = 0;
  addNode(value) {
    if (this.head == null) {
      this.head = new Node(value);
      //length++;
      return "Inserido no começo da lista";
    }
    let node = this.head;
    while (node.next != null) {
      node = node.next;
    }
    node.next = new Node(value);
    // length++;
    return `Inserido no final da lista, após o node de valor: ${node.value}`;
  }
  listNode() {
    let node = this.head;
    while (node.next != null) {
      console.log(node.value);
      node = node.next;
    }
    console.log(node.value);
  }
} */

export class City {
  constructor(parent, name, distance) {
    this.parent = parent;
    this.name = name;
    this.visited = false;
    this.distance = distance;
  }
}

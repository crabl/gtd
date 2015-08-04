class List {
  constructor(items) {
    this.items = items || [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(target) {
    this.items.forEach((item, index) => {
      if (item === target) {
        return this.items.splice(index, 1);
      }
    });
  }

  getItems() {
    return this.items;
  }
}

export default List;

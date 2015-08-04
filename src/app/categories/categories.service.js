class CategoriesService {
  constructor(List) {
    'ngInject';

    this.nextId = 2;
    this.names = new List([{
      name: 'Home',
      id: 1
    }, {
      name: 'Work',
      id: 2
    }]);
    this.items = new List();
    this.List = List;
  }

  create(name) {
    this.names.addItem({
      name: name,
      nextId: ++this.nextId
    });
  }

  remove(task) {
    return this.items.removeItem(task);
  }

  add(task) {
    return this.items.addItem(task);
  }
}

export default CategoriesService;

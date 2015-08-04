class CategoriesService {
  constructor(List) {
    'ngInject';

    this.categories = {
      'Home': new List([{
        title: 'take out the trash',
        complete: false
      }, {
        title: 'do other shit',
        complete: false
      }]),
      'Work': new List()
    };
    this.List = List;
  }

  create(name) {
    if (!this.categories[name]) {
      this.categories[name] = new this.List();
    }
  }

  remove(name) {
    if (this.categories[name]) {
      delete this.categories[name];
    }
  }

  categorize(category, task) {
    return this.categories[category].addItem(task);
  }

  uncategorize(category, task) {
    return this.categories[category].removeItem(task);
  }

  list() {
    return this.categories;
  }
}

export default CategoriesService;

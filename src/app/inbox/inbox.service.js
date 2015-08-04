class InboxService {
  constructor(List) {
    'ngInject';

    this.inbox = new List([{
      title: 'First task',
      complete: false,
      category: null
    }, {
      title: 'Second task',
      complete: false,
      category: null
    }, {
      title: 'Third task',
      complete: false,
      category: null
    }]);
  }

  add(task) {
    return this.inbox.addItem(task);
  }

  remove(task) {
    return this.inbox.removeItem(task);
  }

  tasks() {
    return this.inbox.getItems();
  }
}

export default InboxService;

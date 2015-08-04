class InboxService {
  constructor(List) {
    'ngInject';

    this.inbox = new List([{
      title: 'First task',
      complete: false
    }, {
      title: 'Second task',
      complete: false
    }, {
      title: 'Third task',
      complete: false
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

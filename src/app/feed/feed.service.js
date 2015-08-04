class FeedService {
  constructor(List) {
    'ngInject';

    this.feed = new List();
  }

  add(task) {
    return this.feed.addItem(task);
  }

  remove(task) {
    return this.feed.removeItem(task);
  }

  toggleCompletion(task) {
    task.complete = !task.complete;
  }

  tasks() {
    return this.feed.getItems();
  }
}

export default FeedService;

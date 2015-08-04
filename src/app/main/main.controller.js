class MainController {
  constructor($window, InboxService, CategoriesService, FeedService) {
    'ngInject';

    this.$window = $window;
    this.inbox = InboxService;
    this.categories = CategoriesService;
    this.feed = FeedService;
  }

  createInboxTask() {
    var title = this.$window.prompt('Task name');

    if (title) {
      this.inbox.add({
        title: title,
        complete: false
      });
    }
  }

  createCategory() {
    var name = this.$window.prompt('Category name');

    if (name) {
      this.categories.create(name);
    }
  }

  inboxToFeed(task) {
    this.inbox.remove(task);
    this.feed.add(task);
  }

  inboxToCategory(task) {
    this.inbox.remove(task);
    this.categories.add(task);
  }

  categoryToFeed(task) {
    this.categories.remove(task);
    this.feed.add(task);
  }

  categoryToInbox(task) {
    this.categories.remove(task);
    task.category = null;
    this.inbox.add(task);
  }

  feedToInbox(task) {
    this.feed.remove(task);
    task.complete = false;
    task.category = null;
    this.inbox.add(task);
  }

  feedToCategory(task) {
    this.feed.remove(task);
    this.categories.add(task);
  }
}


export default MainController;

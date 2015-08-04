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

  inboxToFeed(task) {
    this.inbox.remove(task);
    this.feed.add(task);
  }

  feedToInbox(task) {
    this.feed.remove(task);
    task.complete = false;
    this.inbox.add(task);
  }
}


export default MainController;

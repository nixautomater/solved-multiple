import { ajax } from 'discourse/lib/ajax';

export default Discourse.Route.extend({
  model() {
    return ajax("/solution/index.json").then(result => {
      return result;
    });
  },
  setupController(controller, model) {
    controller.setProperties({
      model: model
    });
  }
});
import template from './test.html';
import controller from './test.controller';
import './test.scss';

let testComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default testComponent;

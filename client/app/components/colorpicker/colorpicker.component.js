import template from './colorpicker.html';
import controller from './colorpicker.controller';
import './colorpicker.scss';

let colorpickerComponent = {
  bindings: {
    initHexcolor: '<?'
  },
  template,
  controller
};

export default colorpickerComponent;

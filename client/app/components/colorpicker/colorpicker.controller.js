class ColorpickerController {
  /* @ngInject */
  constructor($filter) {
    this.name = 'colorpicker';
    this.rgbFilter = $filter('hex2rgb');
  }
  
  $onInit() {
    if (!this.initHexcolor) {
      this.initHexcolor = '#ffffff';
    }
    this.hexcolor = this.initHexcolor;
    let color = this.rgbFilter(this.initHexcolor);
    this.color = {
      red: color[0],
      green: color[1],
      blue: color[2]
    };
  }
}

export default ColorpickerController;

interface initOption {
  
}
interface createOption {
  src: string,
  width: 0, 
  height: 0,
  x?: 0, 
  y?: 0,
  borderRadius?: 0,
  zindex?: 0
}
interface createTextOption {
  text: any,
  x?: 0, 
  y?: 0, 
  width?: 0, 
  height?: 0,
  borderRadius?: 0,
  zindex?: 0
}
class vncanvas {
  private name: string
  constructor () {
    this.elements = []
    setTimeout(() => {
      this.next()
    })
  }
  init (initOption: createOption) {

  },
  create(createOption: createOption) {
    this.elements.push({ ...createOption });
  },

  createText(createCreateTextOption: createTextOption) {
    this.elements.push({ ...createCreateTextOption });
  },

  next () {
    this.elements.sort((a, b) => a.zindex - b.zindex);
    this.init()
    for (const element of this.elements) {
      if (element.src) {
        this.create(element);
      } else if (element.text) {
        this.createText(element);
      }
    }
  }
}
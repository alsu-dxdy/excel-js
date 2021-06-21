export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }
  getRoot() {
    const $root = document.createElement('div')
    
    this.components.forEach(Component => {
      const component = new Component()
      $root.insertAdjacentHTML('afterbegin', component.toHTML())
    })
    return $root
  }

  render() {
    console.log(this.$el)
    this.$el.append(this.getRoot())
  }
}

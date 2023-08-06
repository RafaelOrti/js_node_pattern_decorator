// src/decorators/decorator.js

const Component = require('../components/component');

// Clase decoradora abstracta
class Decorator extends Component {
  constructor(component) {
    super();
    if (!(component instanceof Component)) {
      throw new Error('Decorator requires a valid Component instance.');
    }
    this.component = component;
  }

  // Implementación del método operation() definido en la interfaz Component
  operation() {
    return this.component.operation();
  }
}

module.exports = Decorator;

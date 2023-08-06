// src/components/concreteComponent.js

const Component = require('./component');

// Clase concreta que representa el objeto original
class ConcreteComponent extends Component {
  constructor(data) {
    super();
    this.data = data;
  }

  // Implementación del método operation() definido en la interfaz Component
  operation() {
    return `Original operation: ${this.data}`;
  }
}

module.exports = ConcreteComponent;

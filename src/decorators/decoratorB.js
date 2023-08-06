// src/decorators/decoratorB.js

const Decorator = require('./decorator');

// Clase decoradora concreta B
class DecoratorB extends Decorator {
  constructor(component) {
    super(component);
  }

  // Implementación del método operation() definido en la clase Decorator
  operation() {
    // Lógica adicional del decorador B antes de llamar a la operación del componente
    const result = `Decorator B: ${this.component.operation()}`;
    // Lógica adicional del decorador B después de llamar a la operación del componente
    return result;
  }
}

module.exports = DecoratorB;

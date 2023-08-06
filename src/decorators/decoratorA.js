// src/decorators/decoratorA.js

const Decorator = require('./decorator');

// Clase decoradora concreta A
class DecoratorA extends Decorator {
  constructor(component) {
    super(component);
  }

  // Implementación del método operation() definido en la clase Decorator
  operation() {
    // Lógica adicional del decorador A antes de llamar a la operación del componente
    const result = `Decorator A: ${this.component.operation()}`;
    // Lógica adicional del decorador A después de llamar a la operación del componente
    return result;
  }
}

module.exports = DecoratorA;

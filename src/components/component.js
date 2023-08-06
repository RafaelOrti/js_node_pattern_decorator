// src/components/component.js

// Interfaz de componente base o clase abstracta
class Component {
  // Método básico que debe ser implementado por las clases concretas
  operation() {
    throw new Error('Operation method must be implemented by concrete classes.');
  }
}

module.exports = Component;

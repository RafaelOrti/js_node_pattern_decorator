// src/main.js

const ConcreteComponent = require('./components/concreteComponent');
const DecoratorA = require('./decorators/decoratorA');
const DecoratorB = require('./decorators/decoratorB');
const Logger = require('./utils/logger');

function main() {
  // Crear una instancia del objeto original (ConcreteComponent)
  const originalObject = new ConcreteComponent('Original data');

  // Crear instancias de decoradores y envolver el objeto original
  const decoratedObjectA = new DecoratorA(originalObject);
  const decoratedObjectB = new DecoratorB(originalObject);

  // Realizar operaciones en el objeto original y los objetos decorados
  Logger.log(originalObject.operation());
  Logger.log(decoratedObjectA.operation());
  Logger.log(decoratedObjectB.operation());
}

main();

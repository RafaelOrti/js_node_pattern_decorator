// test/decorators/decorator.test.js

const ConcreteComponent = require('../../src/components/concreteComponent');
const DecoratorA = require('../../src/decorators/decoratorA');
const DecoratorB = require('../../src/decorators/decoratorB');
const Logger = require('../../src/utils/logger');

describe('DecoratorA', () => {
  it('should decorate ConcreteComponent with DecoratorA', () => {
    const data = 'Test data';
    const component = new ConcreteComponent(data);
    const decoratedComponent = new DecoratorA(component);

    const result = decoratedComponent.operation();
    expect(result).toBe(`Decorator A: Original operation: ${data}`);
  });

  it('should log before and after operation in DecoratorA', () => {
    const data = 'Test data';
    const component = new ConcreteComponent(data);
    const decoratedComponent = new DecoratorA(component);

    const spyLog = jest.spyOn(Logger, 'log');

    decoratedComponent.operation();

    expect(spyLog).toHaveBeenCalledTimes(2);
    expect(spyLog).toHaveBeenCalledWith('Decorator A: Before operation');
    expect(spyLog).toHaveBeenCalledWith('Decorator A: After operation');
    
    spyLog.mockRestore();
  });
});

describe('DecoratorB', () => {
  it('should decorate ConcreteComponent with DecoratorB', () => {
    const data = 'Test data';
    const component = new ConcreteComponent(data);
    const decoratedComponent = new DecoratorB(component);

    const result = decoratedComponent.operation();
    expect(result).toBe(`Decorator B: Original operation: ${data}`);
  });

  it('should log before and after operation in DecoratorB', () => {
    const data = 'Test data';
    const component = new ConcreteComponent(data);
    const decoratedComponent = new DecoratorB(component);

    const spyLog = jest.spyOn(Logger, 'log');

    decoratedComponent.operation();

    expect(spyLog).toHaveBeenCalledTimes(2);
    expect(spyLog).toHaveBeenCalledWith('Decorator B: Before operation');
    expect(spyLog).toHaveBeenCalledWith('Decorator B: After operation');
    
    spyLog.mockRestore();
  });
});

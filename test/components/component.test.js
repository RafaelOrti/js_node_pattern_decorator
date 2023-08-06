// test/components/component.test.js

const ConcreteComponent = require('../../src/components/concreteComponent');

describe('ConcreteComponent', () => {
  it('should create a ConcreteComponent with the correct data', () => {
    const data = 'Test data';
    const component = new ConcreteComponent(data);
    expect(component.data).toBe(data);
  });

  it('should return the correct result from operation()', () => {
    const data = 'Test data';
    const component = new ConcreteComponent(data);
    const result = component.operation();
    expect(result).toBe(`Original operation: ${data}`);
  });
});

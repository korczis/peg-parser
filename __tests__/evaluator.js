jest.unmock('../dist/lib');

import Evaluator from '../dist/lib';

describe('sum', () => {
  it('Evaluates variable', () => {
    const evaluator = new Evaluator();

    const context = {
      variables: {
        name: 'Joe Doe'
      }
    };

    const res = evaluator.evaluate("$name", context);
    expect(res()).toBe('Joe Doe');
    //
  });

  it('Calls function and gets result', () => {
    const evaluator = new Evaluator();
    const res = evaluator.evaluate("min(1, 2)");
    expect(res()).toBe(1);
    //
  });

  it('Calls function with function as one of its parameters and gets result', () => {
    const evaluator = new Evaluator();
    const res = evaluator.evaluate("min(3, min(2, 1))");
    expect(res()).toBe(1);
    //
  });
});

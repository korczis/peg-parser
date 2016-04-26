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
});

import merge from 'node.extend';

import * as functions from './functions';

import grammar from './loader/loader!./grammar/grammar.peg';

const defaultContext = {
  functions
};

class Evaluator {
  constructor() {
    this._parser = grammar;
  }

  get parser() {
    return this._parser;
  }

  evaluate(expression, context = {}) {
    this.parser.context = merge(true, defaultContext, context || {});
    return this.parser.parse(expression);
  }
}

export default Evaluator;

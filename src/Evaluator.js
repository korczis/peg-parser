import merge from 'node.extend';

import * as functions from './functions';

const grammar = require('peg!./grammar/grammar.peg');

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

  evaluate(expression, context = {}, immediately = false) {
    this.parser.context = merge(true, defaultContext, context || {});
    const res = this.parser.parse(expression);
    return immediately ? res() : res;
  }
}

export default Evaluator;

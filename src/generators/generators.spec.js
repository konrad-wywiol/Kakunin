import { create } from './generators';
import { create as createModulesLoader } from '../helpers/modules-loader.helper';

const modulesLoader = createModulesLoader({
  projectPath: process.cwd(),
  generators: []
});

const chai = require('chai');
const expect = chai.expect;

const generators = create(modulesLoader);

describe('Generators', () => {
  it('throws an error when no generator was found', () => {
    expect(() => generators.generate('unknown-generator'))
      .to.throw('Could not find generator for unknown-generator.');
  });

  it('return generated value', () => {
    expect(generators.generate('stringWithLength', 100).length).to.equal(100);
  });
});
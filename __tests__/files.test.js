'use strict';

jest.mock('fs');

const file = require('../lib/files.js');
console.log('file', file);

describe('Files Module', () => {
  it('can load a file', () => {
    return file.loadFile('cheese.txt')
      .then( data => {
        expect( Buffer.isBuffer(data) ).toBeTruthy();
      });
  });

  it('can save a file', () => {
    const string = 'best test';
    const buff = Buffer.from(string);
    return file.saveFile('cheese.txt', buff)
      .then( success => {
        expect(success).toBeUndefined();
      })
      .catch( error => {
        expect(error).toBeUndefined();
      });
  });

  it('errors out if file is invalid', () => {
    const string = 'best test';
    const buff = Buffer.from(string);
    return file.saveFile(undefined, buff)
      .then( success => {
        expect(success).toBeUndefined();
      })
      .catch( error => {
        expect(error).toBeDefined();
      });
  });

  it('can UPPERCASE a buffer', () => {
    const string = 'best words';
    const STRING = 'BEST WORDS';
    const buff = Buffer.from(string);
    const BUFF = Buffer.from(STRING);
    expect(file.convertBuffer(buff)).toEqual(BUFF);
  });

})
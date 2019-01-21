'use strict';

const events = require('../lib/events.js');
const logger = require('../lib/logger.js');

describe('Logger Tests', () => {
  it('should throw error when file-error with payload', () => {
    expect(() => {
      logger.err('cheese');
    }).toThrow();
  });

  it('ignores errors when file-error has no payload', () => {
    expect(() => {
      logger.err();
    }).not.toThrow();
  });

  it('logs on file-save with payload', () => {
    let spy = jest.spyOn(console, 'log');
    logger.save('cheese');
    expect(spy).toHaveBeenCalledWith('File Saved, cheese');
    spy.mockRestore();
  });

  it('does not log payload when file-save doesn\'t have one', () => {
    let spy = jest.spyOn(console, 'log');
    logger.save();
    expect(spy).not.toHaveBeenCalledWith();
    spy.mockRestore();
  });
});
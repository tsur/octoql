/* eslint-disable */
'use strict';

import Parser from '../parser';

describe('limit statement', function() {
  const limitResponse = {
    from: { user: 'user', repo: 'repo' },
  };

  it('should fail(throw) if limit has non numeric value', function() {
    expect(() => Parser.parse('from user/repo limit ten')).toThrow();
    expect(() => Parser.parse('from user/repo limit 10items')).toThrow();
  });

  it('should not fail(throw) if limit has a numeric value', function() {
    const input = 'from user/repo limit 10';
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({ ...limitResponse, limit: 10 });
  });

  it('should not fail(throw) if limit keyword is case insensitive', function() {
    const input = 'from user/repo liMiT 10';
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({ ...limitResponse, limit: 10 });
  });
});

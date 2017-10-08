/* eslint-disable */
'use strict';

import Parser from '../parser';

describe('Full query', function() {
  const queryResponse = {
    from: { user: 'user', repo: 'repo' },
    where: {
      filters: [{ field: 'a', filter: 'equals', value: 'b' }],
      groups: []
    },
    select: ['field1', 'field2'],
    limit: 10
  };

  it('should not fail(throw) if query contains all keywords', function() {
    const input =
      'from user/repo select field1, field2 where a equals b limit 10';
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({ ...queryResponse });
  });

  it('should not fail(throw) if query is case insensitive', function() {
    const input =
      'FroM user/repo seLeCT field1, field2 whErE a equals b liMiT 10';
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({ ...queryResponse });
  });

  it('should not fail(throw) if query contains break lines', function() {
    const input = `
    FroM user/repo
    seLeCT field1, field2
    wHeRe a equals b
    liMiT 10`;
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({ ...queryResponse });
  });

  it('should not fail(throw) if query contains tabs', function() {
    const input = `
    FroM user/repo        seLeCT field1, field2
          wHeRe a equals b
                liMiT 10`;
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({ ...queryResponse });
  });

  it('should not fail(throw) if query contains whitespaces', function() {
    const input = `FroM           user/repo     seLeCT         field1,        field2           wHeRe a equals              b      liMiT        10`;
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({ ...queryResponse });
  });
});

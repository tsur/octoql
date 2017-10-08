/* eslint-disable */
'use strict';

import Parser from '../parser';

describe('select statement', function() {
  const selectResponse = {
    from: { user: 'user', repo: 'repo' },
    where: null,
    limit: null
  };

  it('should fail(throw) if select has no fields', function() {
    expect(() => Parser.parse('from user/repo select')).toThrow();
  });

  it('should not fail(throw) if select has a single fields', function() {
    const input = 'from user/repo select field';
    const result = Parser.parse(input).fields;
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...selectResponse,
      select: ['field']
    });
  });

  it('should not fail(throw) if select is case insensitive', function() {
    const input = 'from user/repo sElEcT field';
    const result = Parser.parse(input).fields;
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...selectResponse,
      select: ['field']
    });
  });

  it('should not fail(throw) if select has several fields', function() {
    const input = 'from user/repo select field, field2';
    const result = Parser.parse(input).fields;
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...selectResponse,
      select: ['field', 'field2']
    });
  });

  it('should not fail(throw) if select has several fields with no whitespaces', function() {
    const input = 'from user/repo select field,field2';
    const result = Parser.parse(input).fields;
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...selectResponse,
      select: ['field', 'field2']
    });
  });

  it('should not fail(throw) if select has several fields', function() {
    const input = 'from user/repo select field, field2, field3';
    const result = Parser.parse(input).fields;
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...selectResponse,
      select: ['field', 'field2', 'field3']
    });
  });

  it('should not fail(throw) if select ends with whitespaces', function() {
    const input =
      'from user/repo select field, field2, field3   , field4,    field5  ';
    const result = Parser.parse(input).fields;
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...selectResponse,
      select: ['field', 'field2', 'field3', 'field4', 'field5']
    });
  });
});

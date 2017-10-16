/* eslint-disable */
'use strict';

import Parser from '../parser';

describe('where statement', function() {
  const whereResponse = {
    from: { user: 'user', repo: 'repo' },
  };

  it('should fail(throw) if where has non right operator', function() {
    expect(() => Parser.parse('from user/repo where a likje b')).toThrow();
  });

  it('should fail(throw) if where has no left operand', function() {
    expect(() => Parser.parse('from user/repo where equals b')).toThrow();
  });

  it('should fail(throw) if where has no right operand', function() {
    expect(() => Parser.parse('from user/repo where a equals')).toThrow();
  });

  it('should not fail(throw) if where is case insensitive', function() {
    const input = 'from user/repo wHErE a equals b';
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...whereResponse,
      where: {
        filters: [{ field: 'a', filter: 'equals', value: 'b' }],
        groups: []
      }
    });
  });

  it('should not fail(throw) if where has single left & right operands and a valid operator', function() {
    const input = 'from user/repo where a equals b';
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...whereResponse,
      where: {
        filters: [{ field: 'a', filter: 'equals', value: 'b' }],
        groups: []
      }
    });
  });

  it('should not fail(throw) if where has many left & right operands and a valid operators', function() {
    const input =
      'from user/repo where a equals b and c contains d or e not equals f';
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...whereResponse,
      where: {
        filters: [
          { field: 'a', filter: 'equals', value: 'b' },
          { field: 'c', filter: 'contains', value: 'd' },
          { field: 'e', filter: 'not equals', value: 'f' }
        ],
        groups: ['and', 'or']
      }
    });
  });

  it('should not fail(throw) if where has unquoted string as value', function() {
    const input = 'from user/repo where title equals myTitle';
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...whereResponse,
      where: {
        filters: [{ field: 'title', filter: 'equals', value: 'myTitle' }],
        groups: []
      }
    });
  });

  it('should not fail(throw) if where has quoted string as value', function() {
    const input = 'from user/repo where title equals "myTitle 1"';
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...whereResponse,
      where: {
        filters: [{ field: 'title', filter: 'equals', value: 'myTitle 1' }],
        groups: []
      }
    });
  });

  it('should not fail(throw) if where has empty string as value', function() {
    const input = 'from user/repo where title equals ""';
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...whereResponse,
      where: {
        filters: [{ field: 'title', filter: 'equals', value: '' }],
        groups: []
      }
    });
  });

  it('should not fail(throw) if where has unquote string list as value', function() {
    const input = 'from user/repo where labels equals [ 1, 2, 3]';
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...whereResponse,
      where: {
        filters: [
          { field: 'labels', filter: 'equals', value: ['1', '2', '3'] }
        ],
        groups: []
      }
    });
  });

  it('should not fail(throw) if where has quoted string list as value', function() {
    const input =
      'from user/repo where labels equals ["P1", "Priority Medium", "P3"]';
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({
      ...whereResponse,
      where: {
        filters: [
          {
            field: 'labels',
            filter: 'equals',
            value: ['P1', 'Priority Medium', 'P3']
          }
        ],
        groups: []
      }
    });
  });
});

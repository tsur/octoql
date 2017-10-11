/* eslint-disable */
'use strict';

import Parser from '../parser';

describe('comment statement', function() {
  const fromResponse = {
    from: { user: 'user', repo: 'repo' },
    select: null,
    where: null,
    limit: null
  };

  it('should fail(throw) if no user or repo is given', function() {
    const query = `--This is a comment
    from`;
    expect(() => Parser.parse(query)).toThrow();
  });

  it('should not fail(throw) if comment is set', function() {
    const query = `--This is a comment
    from user/repo`;
    expect(Parser.parse(query)).toEqual(fromResponse);
  });
});

/* eslint-disable */
"use strict";

import Parser from '../parser';

describe('take statement', function() {

  const takeResponse = {from: {user: "user", repo: "repo"}, select: null, where: null};

  it('should fail(throw) if take has non numeric value', function() {
    expect(() => Parser.parse("from user/repo take ten")).toThrow();
    expect(() => Parser.parse("from user/repo take 10items")).toThrow();
  });

  it('should not fail(throw) if take has a numeric value', function() {
    const input = "from user/repo take 10";
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({...takeResponse, take: 10});
	});

  it('should not fail(throw) if take keyword is case insensitive', function() {
    const input = "from user/repo TaKe 10";
    expect(() => Parser.parse(input)).not.toThrow();
    expect(Parser.parse(input)).toEqual({...takeResponse, take: 10});
	});

});

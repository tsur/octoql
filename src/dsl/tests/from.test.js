/* eslint-disable */
"use strict";

import Parser from '../parser';

describe('from statement', function() {

  const fromResponse = { from: {user: "user", repo: "repo"}, select: null, where:null, take: null};

	it('should fail(throw) if no user or repo is given', function() {
    expect(() => Parser.parse("from")).toThrow();
	});

	it('should fail(throw) if no whitespace before from', function() {
    expect(() => Parser.parse("fromuser/repo")).toThrow();
	});

	it('should fail(throw) if no repo', function() {
    expect(() => Parser.parse("from user")).toThrow();
	});

	it('should fail(throw) if separator is not /', function() {
    expect(() => Parser.parse("from user@repo")).toThrow();
	});

	it('should fail(throw) if user contains invalid chars', function() {
    expect(() => Parser.parse("from user#$@#$@$/repo")).toThrow();
	});

	it('should fail(throw) if repo contains invalid chars', function() {
    expect(() => Parser.parse("from user/repo@@@#$")).toThrow();
	});

	it('should fail(throw) if user or repo contains invalid chars', function() {
    expect(() => Parser.parse("from user#$@#$@$/repo@@@#$")).toThrow();
	});

	it('should not fail(throw) if user and repo is given by using / as separator', function() {
    expect(() => Parser.parse("from user/repo")).not.toThrow();
    expect(Parser.parse("from user/repo")).toEqual(fromResponse);
	});

	it('should not fail(throw) from case insensitive', function() {
    const input1 = "From user/repo";
    const input2 = "fRom user/repo";
    const input3 = "fROm user/repo";
    const input4 = "FROM user/repo";
    [input1, input2, input3, input4].forEach(input => {
      expect(() => Parser.parse(input)).not.toThrow();
      expect(Parser.parse(input)).toEqual(fromResponse);
    });
	});

	it('should not fail(throw) if \n is typed before from', function() {
    expect(() => Parser.parse("\nfrom user/repo")).not.toThrow();
    expect(Parser.parse("\nfrom user/repo")).toEqual(fromResponse);
	});

	it('should not fail(throw) if \n is typed after from', function() {
    expect(() => Parser.parse("from\nuser/repo")).not.toThrow();
    expect(Parser.parse("from\nuser/repo")).toEqual(fromResponse);
	});

	it('should not fail(throw) if \t is typed before from', function() {
    expect(() => Parser.parse("\tfrom user/repo")).not.toThrow();
    expect(Parser.parse("\tfrom user/repo")).toEqual(fromResponse);
	});

	it('should not fail(throw) if \t is typed after from', function() {
    expect(() => Parser.parse("from\tuser/repo")).not.toThrow();
    expect(Parser.parse("from\tuser/repo")).toEqual(fromResponse);
	});

	it('should not fail(throw) if whitespace is typed before from', function() {
    expect(() => Parser.parse("    from user/repo")).not.toThrow();
    expect(Parser.parse("     from user/repo")).toEqual(fromResponse);
	});

});

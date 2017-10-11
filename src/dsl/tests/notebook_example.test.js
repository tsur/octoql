/* eslint-disable */
'use strict';

import Parser from '../parser';

describe('notebook example', function() {
  it('should not fail on query 1', function() {
    const query = `-- Press Enter+Shift To Run
    from tsur/octoql
    where assigned == me
    limit 5`;
    const response = {
      from: { user: 'tsur', repo: 'octoql' },
      select: null,
      where: {
        filters: [{ field: 'assigned', filter: '==', value: 'me' }],
        groups: []
      },
      limit: 5
    };
    expect(Parser.parse(query)).toEqual(response);
  });
  it('should not fail on query 2', function() {
    const query = `-- Press Enter+Shift To Run
    from tsur/octoql
    select title
    where assigned == me
    limit 5
    `;
    const response = {
      from: { user: 'tsur', repo: 'octoql' },
      select: ['title'],
      where: {
        filters: [{ field: 'assigned', filter: '==', value: 'me' }],
        groups: []
      },
      limit: 5
    };
    expect(Parser.parse(query)).toEqual(response);
  });
  it('should not fail on query 3', function() {
    const query = `-- Press Enter+Shift To Run
    from tsur/octoql
    where labels contains "urgent" and labels not contains "merged"
    `;
    const response = {
      from: { user: 'tsur', repo: 'octoql' },
      select: null,
      where: {
        filters: [
          { field: 'labels', filter: 'contains', value: 'urgent' },
          { field: 'labels', filter: 'not contains', value: 'merged' }
        ],
        groups: ['and']
      },
      limit: null
    };
    expect(Parser.parse(query)).toEqual(response);
  });
  it('should not fail on query 4', function() {
    const query = `-- Press Enter+Shift To Run
    from tsur/octoql
    where labels not contains "urgent" and labels not contains "merged"`;
    const response = {
      from: { user: 'tsur', repo: 'octoql' },
      select: null,
      where: {
        filters: [
          { field: 'labels', filter: 'not contains', value: 'urgent' },
          { field: 'labels', filter: 'not contains', value: 'merged' }
        ],
        groups: ['and']
      },
      limit: null
    };
    expect(Parser.parse(query)).toEqual(response);
  });
  it('should not fail on query 5', function() {
    const query = `-- Press Enter+Shift To Run
    from tsur/octoql
    where labels contains "merged" or creation_date <= 2.months.ago`;
    const response = {
      from: { user: 'tsur', repo: 'octoql' },
      select: null,
      where: {
        filters: [
          { field: 'labels', filter: 'contains', value: 'merged' },
          { field: 'creation_date', filter: '<=', value: '2.months.ago' }
        ],
        groups: ['or']
      },
      limit: null
    };
    expect(Parser.parse(query)).toEqual(response);
  });
});

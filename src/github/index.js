import { parse } from 'dsl/parser';
import { pick, take, size, first } from 'lodash';
import moment from 'moment';

const API_URL = 'https://api.github.com/repos';
const DEFAULT_SELECT = [
  'assignee',
  'body',
  'closed_at',
  'comments',
  'created_at',
  'id',
  'labels',
  'milestone',
  'title',
  'state',
];
const DEFAULT_USER='tsur';
const DEFAULT_REPO='octoql';

const operations = {
  and: (a, b) => a && b,
  or: (a, b) => a || b,
  '==': (a, b) => a == b,
  contains: (a, b, f) => {
    if (f === 'labels') {
      return a.map((l) => l.name).includes(b);
    }
    return a.includes(b);
  },
  'not contains': (a, b, f) =>
    !(f === 'labels' ? a.map((l) => l.name) : a).includes(b),
  '<=': (a, b, f) => {
    if (f === 'closed_at' || f === 'created_at') {
      const date1 = moment(a);
      const date2 = b.includes('.')
        ? moment().subtract(...b.split('.'))
        : moment(b, 'DD-MM-YYYY');
      return moment(date1).isSameOrBefore(date2);
    }
    return a <= b;
  },
};

const computeFilters = (where) => {
  if (!where || !size(where.filters)) return;
  return (issue) =>
    where.filters.map((filter) =>
      operations[filter.filter](issue[filter.field], filter.value, filter.field)
    );
};

const groupFilters = (computedFilters, groups) => {
  if (!size(groups)) return first(computedFilters);
  return computedFilters.reduce((a, b, index) =>
    operations[groups[index - 1]](a, b)
  );
};

export default function getGithubIssues(query, opt = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      let { from, select, where, limit } = parse(query);
      if(!from) {
        from = {};
        from.user = opt.user || DEFAULT_USER;       
        from.repo = opt.repo || DEFAULT_REPO;       
      }
      const whereFilter = computeFilters(where);
      const issuesResponse = await fetch(
        `${API_URL}/${from.user}/${from.repo}/issues`
      );
      const issues = (await issuesResponse.json())
        .filter(
          (issue) =>
            where ? groupFilters(whereFilter(issue), where.groups) : true
        )
        .map((issue) => pick(issue, select || DEFAULT_SELECT));

      resolve(limit ? take(issues, limit) : issues);
    } catch (error) {
      reject(error);
    }
  });
}

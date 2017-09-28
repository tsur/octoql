import { parse } from 'dsl/parser';
import { pick } from 'lodash';
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

export default function getGithubIssues(query) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log('value >>>', query);
      const { from, select, where, take } = parse(query);
      console.log('parse >>>', from, select, where, take);
      const issuesResponse = await fetch(
        `${API_URL}/${from.user}/${from.repo}/issues`
      );
      const issues = (await issuesResponse.json()).map((issue) =>
        pick(issue, select || DEFAULT_SELECT)
      );
      console.log(
        'isues >>',
        `${API_URL}/${from.user}/${from.repo}/issues`,
        issues
      );
      resolve(issues);
      // setTimeout(
      //   () =>
      //     resolve([
      //       { title: 'Issue1', labels: ['label1'] },
      //       { title: 'Issue2', labels: ['label2'] },
      //       { title: 'Issue3', labels: ['label3'] },
      //       { title: 'Issue4', labels: ['label4'] },
      //     ]),
      //   2000
      // );
    } catch (error) {
      reject(error);
    }
  });
}

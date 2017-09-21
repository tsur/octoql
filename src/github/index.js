import { parse } from 'dsl/parser';

export default function getGithubIssues(query) {
  return new Promise((resolve, reject) => {
    try {
      console.log('value >>>', query);
      const { from, select, where, take } = parse(query);
      console.log('parse >>>', from, select, where, take);
      setTimeout(
        () =>
          resolve([
            { title: 'Issue1', labels: ['label1'] },
            { title: 'Issue2', labels: ['label2'] },
            { title: 'Issue3', labels: ['label3'] },
            { title: 'Issue4', labels: ['label4'] },
          ]),
        2000
      );
    } catch (error) {
      console.log('Error >>>', error);
      reject(error);
    }
  });
}

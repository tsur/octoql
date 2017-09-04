// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

export default function (CodeMirror) {
  /* Example definition of a simple mode that understands a subset of
 * JavaScript:
 */
  // string -> #cc9393
  // comment -> #73c990
  // field -> #dcdccc

  CodeMirror.defineMode('octoql', () => ({
    token(stream, state) {
      //   stream.eatWhile(/\w/);

      if (stream.match(/(?:select|from|take|where)\b/)) {
        return 'octo-keyword';
      }

      if (stream.match(/(?:assignedTo|order by)\b/)) {
        return 'octo-builtin';
      }

      if (stream.match(/(.+)(\/)(.+)/i)) {
        return 'octo-from';
      }

      if (stream.match(/0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i)) {
        return 'octo-number';
      }

      if (stream.match(/--.*/)) {
        return 'octo-comment';
      }

      if (stream.match(/[-+/*=<>!]+/)) {
        return 'octo-operator';
      }

      if (stream.match(/"(?:[^\\]|\\.)*?(?:"|$)/)) {
        return 'octo-string';
      }
      if (stream.match(/\w/)) {
        return 'octo-field';
      }

      //   if (stream.match(/\/\/.*/)) {
      //     return 'comment';
      //   }

      stream.next();
      return null;
    },
  }));

  //   CodeMirror.defineMode('octoql', {
  //     // The start state contains the rules that are intially used
  //     start: [
  //       // The regex matches the token, the token property contains the type
  //       { regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: 'string' },
  //       // Rules are matched in the order in which they appear, so there is
  //       // no ambiguity between this one and the one above
  //       {
  //         regex: /(?:select|from|take|where)\b/,
  //         token: 'keyword',
  //       },
  //       { regex: /true|false|null|undefined/, token: 'atom' },
  //       {
  //         regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,
  //         token: 'number',
  //       },
  //       { regex: /\/\/.*/, token: 'comment' },
  //       // A next property will cause the mode to move to a different state
  //       { regex: /\/\*/, token: 'comment', next: 'comment' },
  //       { regex: /[-+/*=<>!]+/, token: 'operator' },
  //     ],
  //     // The multi-line comment state.
  //     comment: [
  //       { regex: /.*?\*\//, token: 'comment', next: 'start' },
  //       { regex: /.*/, token: 'comment' },
  //     ],
  //     // The meta property contains global information about the mode. It
  //     // can contain properties like lineComment, which are supported by
  //     // all modes, and also directives like dontIndentStates, which are
  //     // specific to simple modes.
  //     meta: {
  //       dontIndentStates: ['comment'],
  //       lineComment: '//',
  //     },
  //   });
}

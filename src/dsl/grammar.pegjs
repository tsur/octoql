{
  function join(x){
    if(isString(x)) return x;
    return x.join('');
  }

  function isString(str){
    return typeof str === "string"
  }

  function concat(col1, col2) {
    return col1.concat(col2);
  }

  function map(col, fn) {
    return col.map(fn);
  }

  function get(prop) {
    return obj => obj[prop];
  }

  function flatMap(arg=[]){
    return arg.reduce((dict, elem) => Object.assign({}, dict, elem), {});
  }
}

start 
  = __ query:dsl __ { return query; }

__
  = (ws / eol / comment)*

ws "Whitespace"
  = "\t"
  / "\v"
  / "\f"
  / " "
  / "\u00A0"
  / "\uFEFF"
  / zs

// Separator, Space
zs = [\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]

eol "End of line"
  = "\n"
  / "\r\n"
  / "\r"
  / "\u2028"
  / "\u2029"

comment "comment"
  = singleLineComment

singleLineComment
  = "--" (!lineTerminator sourceCharacter)*

dsl
  = __ dsl:(from / select / where / limit)* __ { return flatMap(dsl); }

from "From Statement (i.e. from username/repository)"
  = "from"i __ user:word '/' repo:word __ { return { from:{user, repo}}; }

select "Select Statement (i.e. select field1, field2, field3, ..."
  = "select"i __ fields:list_words __ { return {select: fields}; }

where "Where Statement (i.e. where condition1 or condition2 and condition3) "
  = "where"i __ filters:list_filters __ { return {where: filters}; }

limit "Limit Statement (i.e. limit 5)"
  = "limit"i __ d:digit __ { return {limit: d ? d : 0}; }

list_words
  = w1:(comma_list_words)* w2:word { return concat(w1, w2); }

comma_list_words
  = w:word ws* ',' ws* { return join(w) }

quoted_list_words
  = w1:(quoted_comma_list_words)* w2:quoted_word { return concat(w1, w2); }

quoted_comma_list_words
  = w:quoted_word __ ',' __ { return join(w) }

list_filters
  = f1:comma_list_filters* f2:filter { return {filters: concat(map(f1, get('f')), [f2]), groups: map(f1, get('b'))}; }

comma_list_filters
  = f:filter __ b:boolean __ { return {f, b}; }

filter
  = left:word ws+ op:operator ws+ right:value { return { field: left, filter: op , value: right } }

boolean
  = "and"i / "or"i

operator
  = "<=" / "<" / ">=" / ">" / "==" / "equals" / "contains" / "not equals" / "not contains" 

value
  = array_quoted_value / array_value / quoted_word / word

array_value
  = "[" __ v:list_words __ "]"  { return v; }

array_quoted_value
  = "[" __ v:quoted_list_words __ "]"  { return v; }

word
  = w:[a-zA-Z0-9\_\-\.]+ { return join(w); }

quoted_word
  = "\"" w:[^\"]* "\"" { return w ? join(w) : "" }

digit
  = d1:[1-9] d2:([0-9]*) { return parseInt(d1+join(d2)); }

lineTerminator
  = [\n\r\u2028\u2029]

sourceCharacter
  = .
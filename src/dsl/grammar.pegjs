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
}

start =
  ws* q:query ws* { return q; }

query
  = f:from s:select? w:where? t:take? { return {from:f, select:s, where:w, take:t} }

from "From"
  = ws* "from"i ws+ user:word '/' repo:word { return {user, repo}; }

select "Select"
  = ws+ "select"i ws+ fields:list_words { return fields; }

where "Where"
  = ws+ "where"i ws+ filters:list_filters { return filters; }

take "Take"
  = ws+ "take"i ws+ t:digit { return t ? t : 0; }

list_words
  = w1:(comma_list_words)* w2:word { return concat(w1, w2); }

comma_list_words
  = w:word ws* ',' ws* { return join(w) }

quoted_list_words
  = w1:(quoted_comma_list_words)* w2:quoted_word { return concat(w1, w2); }

quoted_comma_list_words
  = w:quoted_word ws* ',' ws* { return join(w) }

list_filters
  = f1:comma_list_filters* f2:filter { return {filters: concat(map(f1, get('f')), [f2]), operators: map(f1, get('b'))}; }

comma_list_filters
  = f:filter ws* b:boolean ws* { return {f, b}; }

filter
  = left:word ws+ op:operator ws+ right:value { return { field: left, filter: op , value: right } }

boolean
  = "and"i / "or"i

operator
  = "equals" / "contains" / "not equals" / "not contains"

value
  = array_quoted_value / array_value / quoted_word / word

array_value
  = "[" ws* v:list_words ws* "]"  { return v; }

array_quoted_value
  = "[" ws* v:quoted_list_words ws* "]"  { return v; }

word
  = w:[a-zA-Z0-9\_\-]+ { return join(w); }

quoted_word
  = "\"" w:[^\"]* "\"" { return w ? join(w) : "" }

digit
  = d1:[1-9] d2:([0-9]*) { return parseInt(d1+join(d2)); }

ws
  = [\ \n\r\t]

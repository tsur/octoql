# OctoQL

[![MIT License](https://img.shields.io/npm/l/es6-lib-template.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

The Octo Query Language, a DSL for fetching Github issues. Try it out [here](https://tsur.github.io/octoql).

## Overview

OctoQL is an sql-like query language to help you fetching Github repository issues easier. The main purpose was to provide myself and the audience [reading](https://valo.io/blog/post/domain-specific-languages-dsl) my last post about DSL with a real case scenario example about how to craft a DSL from scratch and the different steps involved in the process. OctoQL looks like this.

```sql

// What do I need to work in today ?
from tsur/octoql

// Too much information ... just a quick view
from tsur/octoql
select title
limit 5


// Something really urgent that requires my attention ?
from tsur/octoql
where labels contains "urgent" and labels not contains "merged"

// These issues could be fixed later ...
from tsur/octoql
where labels not contains "urgent" and labels not contains "merged"

// Those issues probably can be closed ...
from tsur/octoql
where labels contains "merged" or creation_date <= 2.months.ago

```

## Contributing

For in-depth project documentation regarding building or testing, move to the [docs](https://github.com/react-boilerplate/react-boilerplate/tree/master/docs) section.  

## License

[![MIT License](https://img.shields.io/npm/l/es6-lib-template.svg?style=flat-square)](http://opensource.org/licenses/MIT)

# OctoQL

[![travis build](https://img.shields.io/travis/danilorossi/es6-lib-template.svg?style=flat-square)](https://travis-ci.org/danilorossi/es6-lib-template)
[![codecov coverage](https://img.shields.io/codecov/c/github/danilorossi/es6-lib-template.svg?style=flat-square)](https://codecov.io/github/danilorossi/es6-lib-template)
[![MIT License](https://img.shields.io/npm/l/es6-lib-template.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

The Octo Query Language, a DSL for fetching Github issues. Try it out [here]().

## Overview

OctoQL is an sql-like query language to help you fetching Github repository issues easier. The main purpose was to provide myself and the audience [reading]() my last post about DSL with a real case scenario example about how to craft a DSL from scratch and the different steps involved in the process. OctoQL looks like this.

```sql

// What do I need to work in today ?
from tsur/octoql
where assigned == me
take 5

// Too much information ... just a quick view
from tsur/octoql
where assigned == me
take 5
select title

// Something really urgent that requires my attention ?
from tsur/octoql
where labels contains "urgent" and labels not contains "merged"

// These issues could be fixed later ...
from tsur/octoql
where labels not contains "urgent" and labels not contains "merged"

// Those issues probably can be closed ...
from tsur/octoql
where labels contains "merged" or creation_date <= 2.months.ago

-----------------------------------------------------------------

// Ok, but I want higher control ...
from tsur/octoql
select title, status
where labels contains "p1" and labels not contains "merged"

// What do I need to work in today ?
from tsur/octoql
take 5
assignedTo me
order by priority

// Too much information ... just a quick view
from tsur/octoql
take 5
assignedTo me
order by priority
select title

// Something really urgent that requires my attention ?
from tsur/octoql
take veryImportant

// Those issues probably can be fixed later ...
from tsur/octoql
take not veryImportant

// Those issues probably can be closed ...
from tsur/octoql
take not important

// Ok, but I want higher control ...
from tsur/octoql
select title, status
where labels contains "p1" and labels not contains "merged"
```

## Contributing

For in-depth project documentation regarding building or testing, move to the [docs]() section.  

## License

[![MIT License](https://img.shields.io/npm/l/es6-lib-template.svg?style=flat-square)](http://opensource.org/licenses/MIT)

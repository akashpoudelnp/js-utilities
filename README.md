## JS Utilities

A collection of useful JavaScript utilities classes and functions.

### Installation

```bash
npm install neat-js-utilities
```

### Usage

#### JSCollection

Basic usage:

```javascript
import {JSCollection} from 'neat-js-utilities';

const arr = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Joe'}
];

const collection = new JSCollection(arr);

collection.where('id', '>', 2).toArray();
// Output: [{ id: 3, name: 'Joe' }]
```

Utility methods:

```javascript
import {JSCollection} from 'neat-js-utilities';

const arr = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Joe'}
];

const collection = new JSCollection(arr);

// Get the items where the id is greater than 2
collection.where('id', '>', 2).toArray(); // [{ id: 3, name: 'Joe' }]

// Get the first item where the id is greater than 2
collection.where('id', '>', 2).first(); // { id: 3, name: 'Joe' }

// Get the last item where the id is greater than 2
collection.where('id', '>', 2).last(); // { id: 3, name: 'Joe' }

// Get the keys of the items where the id is greater than 2
collection.where('id', '>', 2).keys('name'); // ['Joe']

```
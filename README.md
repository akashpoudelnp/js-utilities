## JS Utilities

A collection of useful JavaScript utilities classes and functions.

### Installation

```bash
npm install neat-js-utilities
```

### Usage

#### JSCollection

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

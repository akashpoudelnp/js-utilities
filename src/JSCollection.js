/**
 * A neat class for working with arrays.
 * @class JSCollection
 * @example
 * const collection = new JSCollection([1, 2, 3, 4, 5]);
 */
class JSCollection {

    /**
     * Represents the original array.
     *
     * @type {Array}
     */
    originalArray = [];

    filteredArray = [];

    wheres = [];

    /**
     * Create a new JSCollection instance.
     * @param array
     */
    constructor(array) {
        this.originalArray = array;
    }

    /**
     * Where in array
     * @param key
     * @param operator
     * @param value
     * @returns {JSCollection}
     */
    where(key, operator, value) {
        this.wheres.push({
            key: key,
            operator: operator,
            value: value
        });

        return this;
    }

    keys() {
        return this.originalArray.keys();
    }

    values() {
        return this.originalArray.values();
    }

    toArray() {
        this.processWheres();

        return this.filteredArray;
    }

    processWheres() {
        this.filteredArray = this.originalArray;

        if (this.wheres.length === 0) {
            return;
        }

        this.wheres.map(({key, operator, value}) => {
            this.filteredArray = this.filteredArray.filter((item) => {
                if (operator === '=') {
                    return item[key] === value;
                } else if (operator === '!=') {
                    return item[key] !== value;
                } else if (operator === '>') {
                    return item[key] > value;
                } else if (operator === '<') {
                    return item[key] < value;
                } else if (operator === '>=') {
                    return item[key] >= value;
                } else if (operator === '<=') {
                    return item[key] <= value;
                }

                return false;
            });
        });
    }

    orderBy(key, direction) {
        return this.originalArray.sort((a, b) => {
            if (direction === 'asc') {
                return a[key] - b[key];
            } else {
                return b[key] - a[key];
            }
        });
    }
}


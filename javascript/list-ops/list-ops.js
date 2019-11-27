export class List {
    constructor(initialValues = new Array()) {
        this.values = initialValues;
        return this;
    }

    append(newList) {   
        newList.values.forEach(item => {
            this.values.push(item);
        });

        return this;
    }

    concat(listOfLists) {
        listOfLists.values.forEach(list => {
            this.append(list);
        });

        return this;
    }

    filter(predicate) {
        this.values.forEach((item, index) => {
            if(!predicate(item)) { this.values.splice(index, 1); }
        });

        return this;
    }

    map(transformation) {
        this.values.forEach((item, index) => {
            this.values[index] = transformation(item);
        });

        return this;
    }

    length() {
        let counter = 0;
        this.values.forEach(item => counter++);
        return counter;
    }

    foldl(transformation, accumulator) {
        this.values.forEach(item => {
           accumulator = transformation(accumulator, item); 
        });

        return accumulator;
    }

    foldr(transformation, accumulator) {
        for(let index = this.length() - 1; index >= 0; index--) {
            accumulator = transformation(accumulator, this.values[index]);
        }

        return accumulator;
    }

    reverse() {
        const reversedValues = new Array();
        for(let index = this.length() - 1; index >= 0; index--) {
            reversedValues.push(this.values[index]);
        }

        this.values = reversedValues;
        return this;
    }
}

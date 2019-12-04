export class List {
    constructor(initialValues = new Array()) {
        this.values = initialValues;
    }

    append(newList) {   
        return new List([...this.values, ...newList.values]);
    }

    concat(listOfLists) {
        return listOfLists.foldl((result, current) => {
            return result.append(current)
        }, new List(this.values));
    }

    filter(predicate) {
        return this.foldl((filtered, current) => {
            if(predicate(current)) { 
                filtered.values.push(current); 
            }

            return filtered
        }, new List());
    }

    map(transformation) {
        return this.foldl((mapped, current) => {
            mapped.values.push(transformation(current));
            return mapped;
        }, new List());
    }

    length(counter = 0, rest = [...this.values]) {
        const [head, ...tail] = rest;
        return (head)
            ? this.length(counter + 1, tail)
            : counter;
    }

    foldl(transformation, accumulator, rest = [...this.values]) {
        const [head, ...tail] = rest;
        return (head) 
            ? this.foldl(transformation, transformation(accumulator, head), tail) 
            : accumulator;
    }

    foldr(transformation, accumulator, rest = [...this.values]) {
        const last = rest.pop();
        return (last) 
            ? this.foldr(transformation, transformation(accumulator, last), rest) 
            : accumulator;
    }

    reverse() {
        return this.foldr((reversed, current) => {
            reversed.values.push(current);
            return reversed;
        }, new List());
    }
}

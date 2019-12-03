export class List {
    constructor(initialValues = new Array()) {
        this.values = initialValues;
        return this;
    }

    append(newList) {   
        this.values = [...this.values, ...newList.values];
        return this;
    }

    concat(listOfLists) {
        let [head, ...tail] = listOfLists.values;
        while(head) {
            this.append(head);
            [head, ...tail] = tail;
        }

        return this;
    }

    filter(predicate) {
        let [head, ...tail] = this.values;
        this.values = new Array();

        while(head) {
            if(predicate(head)) { this.values.push(head); }
            [head, ...tail] = tail;
        }

        return this;
    }

    map(transformation) {
        let [head, ...tail] = this.values;
        this.values = new Array();
        
        while(head) {
            this.values.push(transformation(head));
            [head, ...tail] = tail;
        }

        return this;
    }

    length(counter = 0, rest = this.values) {
        const [head, ...tail] = rest;
        return (head)
            ? this.length(counter + 1, tail)
            : counter;
    }

    foldl(transformation, accumulator, rest = this.values) {
        const [head, ...tail] = rest;
        return (head) 
            ? this.foldl(transformation, transformation(accumulator, head), tail) 
            : accumulator;
    }

    foldr(transformation, accumulator, rest = this.values) {
        const last = rest.pop();
        return (last) 
            ? this.foldr(transformation, transformation(accumulator, last), rest) 
            : accumulator;
    }

    reverse(temp = new Array()) {
        const [head, ...tail] = this.values;
        if(!head) { return this; }
        
        temp.push(head);
        this.values = tail;
        
        this.reverse(tail, temp);
        this.values.push(temp.pop());
        return this;
    }
}

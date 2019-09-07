const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

export class InputCell {
    constructor(value) {
        this.value = value;
    }

    setValue(value) {
        this.value = value;
        eventEmitter.emit('valueChanged', this);
    }
}

export class CallbackCell {
    constructor(action) {
        this.values = [];
        this.action = action;
    }
}

export class ComputeCell {
    constructor(cellsList, action) {
        this.cellsList = cellsList;
        this.action = action;
        this.callbacks = [];
        this.compute();

        eventEmitter.on('valueChanged', (cell) => {
            this.handleValueChange(cell)
        });
    }

    handleValueChange(cell) {
        this.cellsList.forEach(item => {
            if (item === cell)
                item.value = cell.value;
        });

        let currentValue = this.value;
        this.compute();

        if (this.callbacks.length > 0 && this.value !== currentValue) {
            this.callbacks.forEach(item => {
              item.values.push(this.value);  
            });
        }
    }

    compute() {
        this.value = this.action(this.cellsList);
    }

    addCallback(callback) {
        this.callbacks.push(callback);
    }

    removeCallback(callback) {
        this.callbacks = this.callbacks.filter(item => item !== callback);
    }
}
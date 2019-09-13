export class Zipper {

    static fromTree(tree) {
        this.root = this.focus = tree;

        return this;
    }

    static toTree() {
        return this.root;
    }

    static left() {
        if(!this.focus.left)
            return null;

        this.prev = this.focus;
        this.focus = this.focus.left;

        return this;
    }

    static right() {
        if(!this.focus.right) 
            return null;

        this.prev = this.focus;
        this.focus = this.focus.right;

        return this;
    }

    static value() {
        return this.focus.value;
    }

    static up() {
        if (this.focus === this.root)
            return null;

        this.focus = this.prev;

        return this;
    }

    static setValue(value) {
        this.focus.value = value;

        return this;
    }

    static setLeft(leaf) {
        this.focus.left = leaf;

        return this;
    }

    static setRight(leaf) {
        this.focus.right = leaf;

        return this;
    }
}
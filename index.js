// Add your Circle class here
const PI = Math.PI
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return 2 * this.radius
    }

    get circumference() {
        return 2 * PI * this.radius
    }
    get area() {
        return PI * this.radius * this.radius
    }

    set diameter(radius) {
        if (radius > 1) {
            this._radius = radius
                //this._radius = radius;
        }
    }

    set circumference(radius) {
        radius = this.circumference / (pi * 2)
    }

    set area(radius) {
        if (radius > 1) {
            this._radius = radius
        }
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * (this.radius *2)
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }


    // set diameter() {

    // }

    // set circumference() {

    // }

    // set area() {

    // }

}
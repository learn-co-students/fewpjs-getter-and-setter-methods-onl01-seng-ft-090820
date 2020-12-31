// Add your Circle class here

const pi = Math.PI 

class Circle {

    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        let diameter = this.radius * 2
        return diameter
    }

    get circumference() {
        let circumference = 2 * pi * this.radius
        return circumference
    }

    get area() {
        let area = pi * (this.radius ** 2)
        return area
    }

    set diameter(diameter) {
        this.radius = diameter / 2
        return this.radius
    }

    set circumference(circumference) {
        this.radius = (circumference / pi) / 2
        return this.radius
    }

   
}
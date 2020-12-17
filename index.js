// // Add your Circle class here
// const PI = Math.PI
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     get diameter() {
//         return 2 * this.radius
//     }

//     get circumference() {
//         return 2 * PI * this.radius
//     }
//     get area() {
//         return PI * this.radius * this.radius
//     }

//     set diameter(radius) {
//         if (radius > 1) {
//             this._radius = radius
//                 //this._radius = radius;
//         }
//     }

//     set circumference(radius) {
//         this.radius = circumference / (pi * 2)
//     }

//     set area(radius) {
//         if (radius > 1) {
//             this._radius = radius
//         }
//     }
// }

const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        radius * 2
    }

    set diameter(diameter) {
        diameter / 2
    }

    get circumference() {
        this.radius * this.radius * pi
    }

    set circumference(circumference) {
        radius = circumference / (pi * 2)
    }

    get area() {
        pi * (radius * radius)
    }

    set area(area) {
        radius = sqrt(area / pi)
    }
}
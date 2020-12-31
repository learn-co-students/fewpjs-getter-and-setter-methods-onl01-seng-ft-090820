class Circle {
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius * 2
    }
    set diameter(a){
        this.radius = a / 2 
    }
    get circumference(){
        return Math.PI * this.diameter
    }
    set circumference(a){
        this.radius = (a / Math.PI) / 2
    }
    get area(){
        return (this.radius ** 2) * Math.PI
    }
    set area(newArea){
        this.radius = Math.sqrt(newArea / Math.PI)
    }    
}
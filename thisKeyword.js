const student = {
    name: "Harendra",
    age: 25,
    gender: "Male",
    hindi: 60,
    eng: 70,
    math: 82,
    getAvg() {
        let avg = (this.hindi + this.eng + this.math) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
        
    }
}
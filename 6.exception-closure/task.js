function parseCount(str) {
    if (isNaN(Number.parseInt(str))) {
        const err = new Error('Невалидное значение');
        throw err;
    } else {
        return Number.parseInt(str, str.lenght);
    };
}

function validateCount(str) {
    try {
        return parseCount(str);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
            const err = new Error('Треугольник с такими сторонами не существует');
            throw err;
        };
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        const p = (this.a + this.b + this.c) / 2;
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +s.toFixed(3);
    }
}
function getTriangle(a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch (err) {
        let triangle = {
            getPerimeter() { return 'Ошибка! Треугольник не существует' },
            getArea() { return 'Ошибка! Треугольник не существует' }
        }
        return triangle;
    }
}


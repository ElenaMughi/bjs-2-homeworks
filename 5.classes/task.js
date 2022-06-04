class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    set state(sState) {
        if (sState > 100) {
            this._state = 100;
        } else if (sState < 0) {
            this._state = 0;
        } else {
            this._state = sState;
        }
    }

    fix() {
        this.state = 1.5 * this._state;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        super.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        super.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        super.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        super.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book instanceof PrintEditionItem && book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let book = null;
        for (let item of this.books) {
            if (item.hasOwnProperty(type)) {
                if (item[type] == value) {
                    book = item;
                    break;
                }
            }
        }
        return book;
    }
    giveBookByName(bookName) {
        let book = null;
        for (let item of this.books) {
            if (item.name === bookName) {
                book = item;
                let index = this.books.indexOf(item);
                this.books.splice(index, 1);
                break;
            }
        }
        return book;
    }
}

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subject = [];
        this.marks = [];
    }
    addMark(mark, subject) {
        // добавляет одну оценку  
        if (mark > 0 && mark < 6) {
            if (!this.subject.includes(subject)) {
                this.subject.push(subject);
            };
            let markWithSubject = { mark, subject };
            if (this.marks === undefined) {
                this.marks = [markWithSubject];
            } else {
                this.marks.push(markWithSubject)
            }
        } else (console.log(`Неверная оценка ${mark} по предмету ${subject}.`))
    }
    getAverage() {
        // вычисляет среднюю оценку  
        let sum = 0;
        this.marks.forEach((item) => {
            sum = sum + item.mark;
        })
        let lenght = this.marks.length;
        return sum / lenght;
    }
    getAverageBySubject(subject) {
        // вычисляет среднюю оценку по предмету  
        if (this.subject.includes(subject)) {
            let sum = 0;
            for (const item of this.marks) {
                if (item.subject == subject) {
                    sum = sum + item.mark;
                }
            }
            let lenght = this.marks.length;
            return sum / lenght;
        } else(console.log(`У студента ${this.name} нет отметок по предмету ${subject}.`))
    }
}

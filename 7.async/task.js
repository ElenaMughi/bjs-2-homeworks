class AlarmClock {
    constructor() {
        //свойство для хранения коллекции звонков alarmCollection с начальным значением пустого массива.
        this.alarmCollection = [];
        //свойство timerId для хранения id таймера без начального значения.
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id == undefined) {
            const err = new Error('my error text');
            throw err;
        } else {
            let tmp = this.alarmCollection.filter((alarmCollection) => { return alarmCollection.id === id });
            if (tmp.length !== 0) {
                return console.error(`Звонок с id = ${id} уже существует`);
            } else {
                this.alarmCollection.push({ time, callback, id });
            };
        };
    }

    removeClock(id) {
        // удаляет определённый звонок.
        let oldLenght = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((alarmCollection) => { return alarmCollection.id !== id });
        return oldLenght === this.alarmCollection.length + 1;
    }

    getCurrentFormattedTime() {
        // возвращает текущее время в строковом формате HH:MM.
        return new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit", hour12: false });
    }

    checkClock(alarm) {
        //которая принимает звонок и проверяет: если текущее время совпадает со временем звонка, то вызывайте колбек.
        let date = this.getCurrentFormattedTime();
        if (alarm.time === date) { return alarm.callback };
    }

    start() {
        //запускает все звонки
        if (this.timerId === null) {
            //Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
            let interval = setInterval(() => this.alarmCollection.forEach(this.checkClock, this), 1000);
            this.timerId = interval;
        }
    }

    stop() {
        //останавливает выполнение всех звонков
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        // печатает все звонки
        //С помощью метода forEach выведите информацию о каждом звонке (id и time).
        if (this.alarmCollection.length == 0) {
            return console.error('Будильников нет!');
        };
        this.alarmCollection.forEach(function (alarm) {
            console.log('Будильник ' + alarm.id + " " + alarm.time)
        });
    }

    clearAlarms() {
        //удаляет все звонки
        //Вызывает метод остановки интервала.
        this.alarmCollection = [];
        this.stop()
    }
}
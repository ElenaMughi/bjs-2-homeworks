class AlarmClock {
    constructor() {
        //свойство для хранения коллекции звонков alarmCollection с начальным значением пустого массива.
        this.alarmCollection = [];
        //свойство timerId для хранения id таймера без начального значения.
        this.timerId = null;
    }

    addClock(time, callback, id) {
            if ( id == undefined) {
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
        this.alarmCollection = this.alarmCollection.filter((alarmCollection) => { return alarmCollection.id !== id })
    }

    getCurrentFormattedTime() {
        // возвращает текущее время в строковом формате HH:MM.
        let date = new Date();
        let hours = '' + date.getHours();
        if (hours.length === 1) {hours = '0' + hours};
        let min = '' + date.getMinutes();
        if (min.length === 1) {min = '0' + min};
        return hours + ":" + min;
    }

    checkClock(alarm, index) {
        //которая принимает звонок и проверяет: если текущее время совпадает со временем звонка, то вызывайте колбек.
        let date = this.getCurrentFormattedTime();
        if (alarm.time === date) { return alarm.callback };
    }

    start() {
        //запускает все звонки
        if (this.timerId === null) {
            //Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
            let interval = setInterval(() => this.alarmCollection.forEach(checkClock(alarm, index), this.alarmCollection), 1000);
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
        if (this.timerId !== null) {
            this.stop()
        }
    }
}
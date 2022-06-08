let clock = new AlarmClock();

clock.addClock("16:45", f => f, 1);
clock.addClock("17:45", f => f, 1);
console.log("Количество будильников " + clock.alarmCollection.length);
clock.removeClock(1);
console.log("Запущенный таймер " + clock.timerId);
clock.addClock("17:45", f => f, 1);
clock.addClock("18:45", f => f, 2);
clock.printAlarms();
clock.start();
console.log("Запущенный таймер " + clock.timerId);
clock.start();
console.log("Запущенный таймер " + clock.timerId);
clock.stop();
console.log("Запущенный таймер " + clock.timerId);
console.log("Количество будильников " + clock.alarmCollection.length);
clock.clearAlarms();
console.log("Количество будильников " + clock.alarmCollection.length);
clock.printAlarms();
clock.addClock("16:45", f => f)

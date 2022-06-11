function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {

    let hash = args.join(',');

    let objectInCache = cache.find(
      (item) => item.hash === hash);

    if (objectInCache) {
      let index = cache.indexOf(objectInCache);
      console.log("Из кэша: " + cache[index].value);
      return "Из кэша: " + cache[index].value;
    } else {
      let result = func(...args);
      let value = result;
      cache.push({ hash, value });
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result, cache.length);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timerOut;
  let timer = false;
  return function (...args) {
    if (!timer) {
      func.apply(this, args); timer = true;
    };
    clearTimeout(timerOut);
    timerOut = setTimeout(
      () => { timer = false }, ms);
  }
}

function debounceDecorator2(func, ms) {
  let timerOut;
  let timer = false;
  function wrapper (...args) {
    wrapper.count = wrapper.count + 1;
    if (!timer) {
      func.apply(this, args); timer = true;
    };
    clearTimeout(timerOut);
    timerOut = setTimeout(
      () => { timer = false }, ms);
  }
  wrapper.count = 0;
  return wrapper;
}

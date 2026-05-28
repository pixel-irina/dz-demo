export default {
  input: 'index.js', // откуда берем код
  output: {
    file: 'bundle.js', // куда складываем результат
    format: 'iife'     // формат "Immediately Invoked Function Expression" (лучший для простых скриптов в браузере)
  }
};
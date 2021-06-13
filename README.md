## Задание 1 (Вариант 10)
Реализовать операцию filter для асинхронного массива.
```js
function filter(
  array: AsyncArray,
  fn: (cur: any, idx: Number, src: AsyncArray) => Boolean,
  cb: (result: AsyncArray) => void) {
}
```

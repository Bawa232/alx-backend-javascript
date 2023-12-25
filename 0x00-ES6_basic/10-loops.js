export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const idx of array) {
    array[i] = appendString + idx;
    if (i < array.length) {
      i++;
  }

  return array;
}

export default function setFromArray(arr) {
  if (arr instanceof Array) {
    return new Set(arr);
  }
}

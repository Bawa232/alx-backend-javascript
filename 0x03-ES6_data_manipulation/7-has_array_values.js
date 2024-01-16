export default function hasValuesFromArray(set, value) {
  return value.map((val) => set.has(val));
}

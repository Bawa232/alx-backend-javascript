export default function getListStudentIds(array) {
  if (!(Array.isArray(array))) {
    return [];
  }

  let emptyArray = [];
  array.map((arr) => emptyArray.push(arr['id']));

  return emptyArray;
}

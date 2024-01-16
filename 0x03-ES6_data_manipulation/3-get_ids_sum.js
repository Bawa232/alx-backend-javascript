export default function getStudentIdsSum(arr) {
  if (arr instanceof Array) {
    return arr.reduce((sum, ar) => sum + ar.id, 0);
  }
}

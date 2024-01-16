/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns {Number}
 */
export default function getStudentIdsSum(arr) {
  if (arr instanceof Array) {
    return arr.reduce((sum, ar) => sum + ar.id, 0);
  }
}

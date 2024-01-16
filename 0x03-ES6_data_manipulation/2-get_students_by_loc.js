/**
 * Retrieves students from a particular city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Bawa James <https://github.com/Bawa232>
 * @returns
 */
export default function getStudentsByLocation(studs, city) {
  const students = studs.filter((stud) => Object.values(stud).includes(city);
  return students;
}

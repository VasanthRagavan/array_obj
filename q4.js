const students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', age: 19, grade: 'A' }
];
function addStudent(id, firstName, lastName, age, grade) {
    students.push({ id, firstName, lastName, age, grade });
}
function updateStudent(id, updatedInfo) {
    const student = students.find(student => student.id === id);
    if (student) {
        Object.assign(student, updatedInfo);
    }
}
function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    }
}
function listAllStudents() {
    return students;
}
function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}
function calculateAverageAge() {
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    return totalAge / students.length;
}
addStudent(4, 'Bob', 'Brown', 21, 'C');
updateStudent(2, { age: 23, grade: 'A' });
deleteStudent(1);
console.log('All Students:', listAllStudents());
console.log('Students with Grade A:', findStudentsByGrade('A'));
console.log('Average Age:', calculateAverageAge());

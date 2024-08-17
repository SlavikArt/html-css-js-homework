/* Напишіть програму, яка виконує наступні дії з JSON:
1. Створіть об'єкт, що містить інформацію про студента:
o Ім'я
o Вік
o Список курсів (масив об'єктів, кожен з яких містить назву курсу та
оцінку)
2. Серіалізуйте цей об'єкт в JSON-строку та виведіть її на екран.
3. Розберіть (проведіть парсинг) цю JSON-строку назад в об'єкт та знову
виведіть на екран.
4. Використовуючи метод toJSON, налаштуйте серіалізацію таким чином,
щоб серіалізовані об'єкти включали лише ім'я студента та його середню
оцінку з курсів. */
const student = {
  name: "Vasiliy",
  age: 20,
  courses: [
    { course_name: "Maths", grade: 90 },
    { course_name: "Physics", grade: 85 },
    { course_name: "Chemistry", grade: 92 },
  ],
};

const jsonString = JSON.stringify(student);
console.log("Serialized JSON:", jsonString);

const parsedStudent = JSON.parse(jsonString);
console.log("Parsed JSON into object", parsedStudent);

student.toJSON = function () {
  const averageGrade =
    this.courses.reduce((acc, course) => acc + course.grade, 0) /
    this.courses.length;
  return {
    name: this.name,
    averageGrade: averageGrade,
  };
};

const jsonStringCustom = JSON.stringify(student);
console.log("Serialized JSON with toJSON:", jsonStringCustom);

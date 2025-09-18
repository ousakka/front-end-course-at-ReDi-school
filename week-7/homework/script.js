const students = [
  "Mehrnoosh",
  "Maria",
  "Oumaima",
  "Yiting",
  "Sunitha",
  "Sukhwinder",
  "Prachi",
  "Busra",
  "Paloma",
  "Annamani",
  "Sravani",
  "Natalia",
  "Fatima",
  "Tejaswini",
  "Fulya",
  "Gloryfel",
];

const teachers = [
  "Henderson",
  "Tifana",
  "Iga",
  "Engiber",
  "Kumaran",
  "Lukáš",
  "Tim",
];

students.push("Luna");
teachers.push("Kais");

const results = students.map(student => ({
  student,
  teacher: teachers[Math.floor(Math.random() * teachers.length)],
}));
results.sort((a, b) => a.teacher.localeCompare(b.teacher));
console.log(results);


function getnombresynotas(students) {
	
    const studentsNotes = students.map(student => ({
        name: student.name,
        topNote: Math.max(...student.notes),
    }));
    return studentsNotes;

}

console.log(getnombresynotas([{ "name": "John", "notes": [3, 5, 4] }, 
{ "name": "Pablo", "notes": [1, 4, 6] }, 
{ "name": "Gabri", "notes": [1, 2, 3] }]));
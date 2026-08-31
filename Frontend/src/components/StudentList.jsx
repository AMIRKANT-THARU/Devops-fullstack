function StudentList({
  students,
  onDeleteStudent,
  onEditStudent,
}) {
  if (students.length === 0) {
    return <p>No students found.</p>
  }

  return (
    <div>
      <h2>Student List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>

              <td>{student.name}</td>

              <td>{student.email}</td>

              <td>{student.course}</td>

              <td>
                <button
                  onClick={() => onEditStudent(student)}
                >
                  Edit
                </button>

                {' '}

                <button
                  onClick={() => onDeleteStudent(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
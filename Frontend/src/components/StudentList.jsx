function StudentList({ students, onDeleteStudent }) {

  return (
    <div className="card">

      <div className="card-title">

        <div>
          <h2>Students</h2>
          <p>All registered students</p>
        </div>

        <span className="student-count">
          {students.length} Students
        </span>

      </div>

      {students.length === 0 ? (

        <div className="empty-state">

          <h3>No students found</h3>

          <p>
            Add your first student using
            the form above.
          </p>

        </div>

      ) : (

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Student</th>
                <th>Email</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {students.map((student) => (

                <tr key={student.id}>

                  <td>
                    #{student.id}
                  </td>

                  <td>

                    <div className="student-info">

                      <div className="student-avatar">
                        {student.name
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <strong>
                        {student.name}
                      </strong>

                    </div>

                  </td>

                  <td>
                    {student.email}
                  </td>

                  <td>

                    <span className="course-badge">
                      {student.course}
                    </span>

                  </td>

                  <td>

                    <button
                      className="delete-button"
                      onClick={() =>
                        onDeleteStudent(student.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default StudentList;
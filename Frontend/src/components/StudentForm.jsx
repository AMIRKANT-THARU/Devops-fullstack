import { useState } from 'react'

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    const student = {
      name,
      email,
      course,
    }

    await onAddStudent(student)

    setName('')
    setEmail('')
    setCourse('')
  }

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Email:</label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Course:</label>

          <input
            type="text"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  )
}

export default StudentForm
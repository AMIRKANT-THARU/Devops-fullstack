const API_URL = '/api/students'

// GET all students
export async function getStudents() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Failed to fetch students')
  }

  return response.json()
}

// POST new student
export async function createStudent(student) {
  const response = await fetch(API_URL, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(student),
  })

  if (!response.ok) {
    throw new Error('Failed to create student')
  }

  return response.json()
}

// DELETE student
export async function deleteStudent(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to delete student')
  }
}

// UPDATE student
export async function updateStudent(id, student) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(student),
  })

  if (!response.ok) {
    throw new Error('Failed to update student')
  }

  return response.json()
}
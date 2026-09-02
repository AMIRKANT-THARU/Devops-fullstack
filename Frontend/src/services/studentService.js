const API_URL = '/api/students'

export class StudentApiError extends Error {
  constructor(message, status = null) {
    super(message)
    this.name = 'StudentApiError'
    this.status = status
  }
}

async function requireOk(response, action) {
  if (response.ok) return response

  const responseBody = await response.text()
  console.error(`Student API ${action} failed`, {
    status: response.status,
    statusText: response.statusText,
    responseBody,
  })
  throw new StudentApiError(`Could not ${action} student (HTTP ${response.status}).`, response.status)
}

async function request(url, options, action) {
  try {
    return await requireOk(await fetch(url, options), action)
  } catch (error) {
    if (error instanceof StudentApiError) throw error
    console.error(`Student API ${action} request failed`, error)
    throw new StudentApiError(`Could not connect to the student service while trying to ${action}.`)
  }
}

// GET all students
export async function getStudents() {
  const response = await request(API_URL, undefined, 'load')
  return response.json()
}

// POST new student
export async function createStudent(student) {
  const response = await request(API_URL, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(student),
  }, 'create')

  return response.json()
}

// DELETE student
export async function deleteStudent(id) {
  await request(`${API_URL}/${id}`, {
    method: 'DELETE',
  }, 'delete')
}

// UPDATE student
export async function updateStudent(id, student) {
  const response = await request(`${API_URL}/${id}`, {
    method: 'PUT',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(student),
  }, 'update')

  return response.json()
}

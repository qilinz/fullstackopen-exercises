import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = nameObject => {
  const request = axios.post(baseUrl, nameObject)
  return request.then(response => response.data)
}

const deleteNumber = id => {
  axios.delete(`${baseUrl}/${id}`)
}

const update = (id, nameObject) => {
  const request = axios.put(`${baseUrl}/${id}`, nameObject)
  return request.then(response => response.data)
}

const personService = { getAll, create, deleteNumber, update }

export default personService
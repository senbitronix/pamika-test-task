import axios from 'axios'

export const getResource = async ({ page = 1, name } = {}) => {
  let url = `https://rickandmortyapi.com/api/character?page=${page}`
  if (name) {
    url += `&name=${name}`
  }
  let res
  try {
    res = await axios.get(url)
    return res.data
  } catch (error) {
    console.error(error.response.data.error)
  }
  return null
}

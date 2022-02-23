// @ts-ignore
export const dndApi = axios.create({
  baseURL: 'https://www.dnd5eapi.co/api/spells'
})

// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/bingbong/spells'
})
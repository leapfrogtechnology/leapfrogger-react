const POST = "POST"
const GET = "GET"

export const emailValidation = (token) => {
  return (
    {
      method: POST
    },
    {
      body: JSON.stringify({
        token: token
      })
    }
  )
}

export const employeesList = (apiKey) => {
  return ({
      method: GET,
      headers: {
        apiKey: apiKey
      }
    })
}

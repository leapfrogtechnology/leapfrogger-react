const POST = "POST"
const GET = "GET"

export const emailValidation = () => {
  return (
    {
      method: POST
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

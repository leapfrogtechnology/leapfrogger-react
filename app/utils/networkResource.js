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

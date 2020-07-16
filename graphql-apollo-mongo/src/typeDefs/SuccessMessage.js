import { gql } from 'apollo-server-express'

export default gql`
  enum Message {
    SUCCESS
    ERROR
  }

  type SuccessMessage{
    message: Message!
    success: Boolean!
  }
`

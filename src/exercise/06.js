// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const userRef = React.useRef()
  const [errorMessage, setErrorMessage] = React.useState('')

  const submitHandler = event => {
    event.preventDefault()
    onSubmitUsername(userRef.current.value)
  }

  const changeHandler = event => {
    const hasUppercaseCharacters =
      userRef.current.value !== userRef.current.value.toLowerCase()
    if (hasUppercaseCharacters) {
      setErrorMessage('The username has to be in lower-case!')
    } else {
      setErrorMessage('')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username:</label>
        <input
          ref={userRef}
          name="username"
          type="text"
          onChange={changeHandler}
        />
      </div>
      <div style={{color: 'red'}}>{errorMessage}</div>
      <button disabled={errorMessage.length > 0} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

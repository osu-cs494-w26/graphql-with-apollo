import { useState } from 'react'

import Button from '../components/Button'

/*
 * Caution!!!  This is not a safe way to incorporate an authentication token
 * into your app.  The token will be readable by anyone who runs the code.
 * We're doing it this way for ease of demonstration only.
 */
const token = import.meta.env.VITE_GITHUB_TOKEN
const login = 'robwhess'

export default function ChangeUserStatus() {
  const [ emoji, setEmoji ] = useState("")
  const [ message, setMessage ] = useState("")

  return (
    <div>
      {token ? (
        <form className="p-2" onSubmit={(e) => {
          e.preventDefault()
          setEmoji("")
          setMessage("")
        }}>
          <div className="my-2">
            <input className="border border-gray-300"
              type="text"
              placeholder="Emoji"
              value={emoji}
              onChange={(e) => setEmoji(e.target.value)}
            />
          </div>
          <div className="my-2">
            <input className="border border-gray-300"
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <Button>Submit</Button>
          </div>
        </form>
      ) : (
        <p>
          Rerun with a valid <a href="https://help.github.com/articles/creating-an-access-token-for-command-line-use/">GitHub OAuth Token</a> set in the environment variable <code>REACT_APP_NOT_SECRET_GITHUB_TOKEN</code>
        </p>
      )}
    </div>
  )
}

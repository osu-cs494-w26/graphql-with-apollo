import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'

import UserHeader from '../components/UserHeaderForGraphQL'
import ReposList from '../components/ReposListForGraphQL'

/*
 * Caution!!!  This is not a safe way to incorporate an authentication token
 * into your app.  The token will be readable by anyone who runs the code.
 * We're doing it this way for ease of demonstration only.
 */
const token = import.meta.env.VITE_GITHUB_TOKEN
const login = 'robwhess'

const getUserDataQuery = gql`
  query userDashboardData($login: String!) {
    user(login: $login) {
        name
        url
        avatarUrl(size: 64)
        repositories(first: 10) {
            nodes {
                name
                url
                issues(first: 3) {
                    nodes {
                        title
                        url
                        createdAt
                    }
                }
            }
        }
    }
}
`

export default function UserIssuesDashboard() {
  const { data, loading, error } = useQuery(getUserDataQuery, {
    variables: { login: login }
  })
  console.log("== data:", data)
  console.log("== error:", error)
  return (
    <div>
      {token ? (
        <p>Let's work on loading some data...</p>
      ) : (
        <p>
          Rerun with a valid <a href="https://help.github.com/articles/creating-an-access-token-for-command-line-use/">GitHub OAuth Token</a> set in the environment variable <code>VITE_GITHUB_TOKEN</code>
        </p>
      )}
    </div>
  )
}

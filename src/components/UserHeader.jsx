export default function UserHeader({ login, user }) {
  return (
    <div>
      <a href={user.html_url}>
        <img className="max-h-10 mr-2 inline-block" src={user.avatar_url} alt={login} />
        <h1 className="inline-block text-5xl">{user.name}</h1>
      </a>
    </div>
  )
}

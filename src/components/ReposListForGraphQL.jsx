export default function ReposList({ repos }) {
  return (
    <div>
      {repos.map(repo => (
        <div key={repo.id} className="my-4">
          <a className="underline" href={repo.url}><h2 className="text-3xl">{repo.name}</h2></a>
          <ul className="list-inside list-disc pl-2">
            {repo.issues && repo.issues.nodes ? (
              repo.issues.nodes.map(issue => (
                <li key={issue.id}>
                  <a className="underline" href={issue.url}>{issue.title}</a> &ndash; {issue.createdAt}
                </li>
              ))
            ) : <li>No issues</li>}
          </ul>
        </div>
      ))}
    </div>
  )
}

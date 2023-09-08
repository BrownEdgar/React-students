export default function Posts({ posts }) {
  return (
	<div>
		{
		posts.map((post) => {
		console.log(post);
			return (
				<div key={post.id}>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</div>
			)
		})
		}
	</div>
	)
}

// app/api/posts.js

export async function get(request) {
  // Fetch all posts
  const posts = await fetchPosts(); // Replace fetchPosts with your actual data fetching logic
  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function post(request) {
  // Insert a new post
  const data = await request.json();
  const newPost = await insertPost(data); // Replace insertPost with your actual insertion logic
  return new Response(JSON.stringify(newPost), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function put(request) {
  // Update an existing post
  const data = await request.json();
  const updatedPost = await updatePost(data); // Replace updatePost with your actual update logic
  return new Response(JSON.stringify(updatedPost), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function del(request) {
  // Delete a post
  const { id } = await request.json();
  await deletePost(id); // Replace deletePost with your actual delete logic
  return new Response(null, { status: 204 });
}

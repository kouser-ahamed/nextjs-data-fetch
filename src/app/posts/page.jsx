// method 1
// const getPosts = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();

// };

// method 3
// const getPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//     return res.json();
//   } catch (error) {
//     throw new Error("Fail to fetch posts");
//   }
// };

const PostsPage = async () => {
  // method 2

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await res.json();
  // console.log(posts);

  const posts = await getPosts();
  console.log(posts);

  return (
    <div>
      <h2>Post are coming soon!: {posts.length}</h2>
    </div>
  );
};

export default PostsPage;

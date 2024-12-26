import BlogCard from '../Components/BlogCard';

const Blog = () => {
    const posts = [
      { title: "First Post", description: "This is my first blog post.", date: "Dec 25, 2024" },
      { title: "Learning React", description: "My journey with React so far.", date: "Dec 20, 2024" },
    ]
  
    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    )
  }
  
  export default Blog;
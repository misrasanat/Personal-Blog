const BlogCard = ({ title, description, date }) => (
    <div className="blog-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <small>{date}</small>
    </div>
  );
  
  export default BlogCard;
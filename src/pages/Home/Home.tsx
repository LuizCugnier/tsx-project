import { postInterface } from "../../interfaces/Posts";
import { Post } from "../../components/index";
import { useAPi } from "../../hooks/useAPI";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: getPosts } = useAPi<postInterface[]>(
    "http://localhost:3000/posts"
  );

  // console.log(getPosts);

  return (
    <div className="home-page">
      <h1>New Posts</h1>
      <div className="posts-container">
        {getPosts?.map((post, key) => (
          <Link to={`/post/${post.id}`} key={key}>
            <Post key={key} post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

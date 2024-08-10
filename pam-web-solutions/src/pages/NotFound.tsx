import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not Found.</h2>

      <p>
        Go back to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;

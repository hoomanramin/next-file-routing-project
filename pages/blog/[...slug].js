import {useRouter} from "next/router";

const BlogPost = () => {
  const router = useRouter();

  console.log("r", router.pathname);
  console.log("q", router.query);
  return <div>BlogPost</div>;
};

export default BlogPost;

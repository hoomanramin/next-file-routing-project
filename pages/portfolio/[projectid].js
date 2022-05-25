import {useRouter} from "next/router";
const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log("r", router.pathname);
  console.log("q", router.query);

  return <div>Portfolio Project Page</div>;
};

export default PortfolioProjectPage;

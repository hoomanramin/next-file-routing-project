import {useRouter} from "next/router";
const SelectedClientProject = () => {
  const router = useRouter();

  console.log("r", router.pathname);
  console.log("q", router.query);
  return <div>SelectedClientProject</div>;
};

export default SelectedClientProject;

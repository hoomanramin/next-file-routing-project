import {useRouter} from "next/router";

const ClientProject = () => {
  const router = useRouter();

  console.log("r", router.pathname);
  console.log("q", router.query);

  const projectLoader = () => {
    router.push("/clients/max/projecta");
  };

  return (
    <div>
      <h1>ClientProject</h1>
      <button onClick={projectLoader}>project a</button>
    </div>
  );
};

export default ClientProject;

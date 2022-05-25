import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href={"/about"}>
            <a style={{textDecoration: "none"}}>About</a>
          </Link>
        </li>
        <li>
          <Link href={"/clients"}>
            <a style={{textDecoration: "none"}}>Clients</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;

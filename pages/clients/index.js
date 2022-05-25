import Link from "next/link";

const Clients = () => {
  const client = [
    {
      id: "max",
      name: "maximilan",
    },
    {
      id: "man",
      name: "manuel",
    },
    {
      id: "jan",
      name: "jando",
    },
  ];
  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        <li>
          <Link href={"/clients/max"}> maxi</Link>
        </li>
        <li>
          <Link href={"/clients/manuel"}> Manuel</Link>
        </li>
      </ul>
    </div>
  );
};

export default Clients;

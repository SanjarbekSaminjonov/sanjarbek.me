import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className={"min-h-screen min-w-screen flex items-center justify-center"}>
      <div className={"text-center"}>
        <p className={"text-gray-500 mb-5"}>This web site is still in development mode</p>
        <a className={"text-4xl underline hover:text-blue-600 active:text-sky-700"}
          href={"https://saminjonov.uz"}>Go old version</a>
        <ul>
          <li className={"my-4"}>
            <Link className={"text-2xl text-white hover:text-blue-600 hover:underline"} to="/academy">Academy</Link>
          </li>
          <li className={"my-4"}>
            <Link className={"text-2xl text-white hover:text-blue-600 hover:underline"} to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
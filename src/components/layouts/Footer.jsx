import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-solid border-t-[1px] border-neutral-500">
      <p className="my-4 text-center"><Link to="/about" className="text-balance hover:underline">How to use</Link></p>
    </footer>
  )
}

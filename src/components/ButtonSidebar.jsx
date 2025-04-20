import { Link } from "react-router-dom";

export default function ButtonSidebar({ icon, label, link,type="normal" }) {
  const normalSyle = `bg-white flex gap-4 p-8 py-3 rounded-lg text-black font-medium text-2xl hover:bg-emerald-100 transition duration-200`;
  const logOutStyle = `w-full border-2 border-white text-white rounded-lg font-semibold py-2 px-4 flex gap-2 items-center justify-center text-2xl hover:bg-white hover:text-[#96C576] transition duration-350`
  return (
    <Link to={`/${link}`} className={type === "logout" ? logOutStyle : normalSyle}>
        {icon}
        {label}
    </Link>
  );
}

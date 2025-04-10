function SmallInfoCard({ icon, title, description }) {
  return (
    <div className="bg-gray-100 p-6 flex flex-col items-center text-center w-[400px] h-[200px]">
      <div className="mb-4 text-teal-700">{icon}</div>
      <h3 className="text-gray-800 font-bold mb-3 uppercase text-sm tracking-wide">
        {title}
      </h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}

export default SmallInfoCard;

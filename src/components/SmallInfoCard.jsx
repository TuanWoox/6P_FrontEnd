function SmallInfoCard({ icon: iconUrl, title, description }) {
  return (
    <div className="bg-gray-100 p-6 text-lg flex flex-col items-center text-center w-[400px] h-[200px]">
      <div className="mb-6 text-teal-700">
        <img src={iconUrl} alt={title} className="w-12 h-12 object-contain" />
      </div>
      <h3 className="text-gray-800 font-bold mb-3 uppercase text-md tracking-wide">
        {title}
      </h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}

export default SmallInfoCard;

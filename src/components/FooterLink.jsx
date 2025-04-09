function FooterLink({ title, items }) {
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row justify-around items-start gap-8 text-center md:text-left">
      <div>
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="hover:underline">
                {typeof item === "string" ? item : item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterLink;

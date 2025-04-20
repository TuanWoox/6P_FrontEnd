import Breadcrumbs from "./Breadcrumbs";

function InnerHeader({ title, breadcrumbs }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}

export default InnerHeader;

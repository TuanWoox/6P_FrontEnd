import ConnectCardInfo from "./ConnectCardInfo";
import contactSections from "./contactSection";

function Connect() {
  return (
    <div className="p-8 space-y-8">
      {/* Banner */}
      <div
        className="w-full h-64 rounded-2xl shadow-lg bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/4779/4372/16ad93a83fc693f4733f0aae79a93804?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Yh6bZdThfl6wT117cnYVqKXEg6y~e9qtDVx9Mi62srMFvvUjgjJ-yynrz~i4ECGMnu92brBeODthST4M~HRBL6wjQxrhc39HhLFxEWXGGdMLJLLYk5lxSNJc3h9eTJTv3v2aO18MXG8l~DG7hsShAL~knbSdky0tt8lTzdO37do42Rv3zLY8dSUxzcidljSfY4jTr9MyO~agMGcCqmBffrUjFUt83rNuyb0bhf1emCDVyQqAoqtKCAPwjIHijFoLF0jDr~mXJNJ50I9a4IWNhaEfwCA5NOz4BDSf4sf7KGgrlmaLmaqwwhJMBnbFzxq0Iq2gFgTrjmI46gwxiTTv5Q__')",
        }}
      >
        <div className="text-black ms-32">
          <h2 className="text-4xl font-bold mb-2">Liên hệ</h2>
          <p className="text-lg">Liên hệ 6P Bank để giải đáp thắc mắc</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-between gap-4">
        {contactSections.map((contact, index) => (
          <ConnectCardInfo
            key={index}
            header={contact.header}
            content={contact.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Connect;

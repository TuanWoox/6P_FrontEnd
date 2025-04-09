function HomePage() {
  return (
    <div
      className="w-full h-full bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/df7e/bdb3/c99b1a8b1220f13818c0e285beb0a4e9?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CTrS8NERoQfPO1NCqo1BzFUzB4BzHZfWKahFPUN~dE7poayhSwMkhaQXR3CaWDIcAR9DlbpMRgZuh-OLNLTx4ItHskD7BpI524XGP~IsoktNj7Or-MUf6b8qPPN9lEwGb3SuzNrpczq56gHgFj2tCLn~4frfDfK4UiqpiF8NNI-WExBbL9nMtl5FV8ph2jIUtJw~D8Noqg9EJds86Ys9xb2puVfCXdh9bX7fnQ4VjjCkoXv6aDYQA2XRjqsjMv09zSLVbzX1aqI7Re1oAOX0SryYuzHm4DCfrHdQ1WAZPZRwZgFD-LN4SundcR57Twtjr6BqBZha6YypwFkSTr0gQA__')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 max-w-4xl mx-auto">
        <h1 className="text-white text-5xl font-extrabold mb-4 drop-shadow-lg">
          Chào mừng đến với <span className="text-green-500">6P Bank</span>
        </h1>
        <p className="text-white text-lg leading-relaxed drop-shadow-md">
          Ngân hàng Phú Quý Việt Nam là một tổ chức tài chính tiên phong, cung
          cấp các dịch vụ ngân hàng hiện đại, an toàn và tiện lợi nhằm thúc đẩy
          sự phát triển bền vững và thịnh vượng cho khách hàng.
        </p>
        <button className="mt-6 px-6 py-2 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition duration-300 shadow-lg">
          Khám phá ngay
        </button>
      </div>
    </div>
  );
}

export default HomePage;

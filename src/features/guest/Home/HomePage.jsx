function HomePage() {
    return (
        <div
            className="w-full h-full bg-cover bg-center relative"
            style={{
                backgroundImage: "url('/images/homepage.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 max-w-4xl mx-auto">
                <h1 className="text-white text-5xl font-extrabold mb-4 drop-shadow-lg">
                    Chào mừng đến với{" "}
                    <span className="text-green-500">6P Bank</span>
                </h1>
                <p className="text-white text-lg leading-relaxed drop-shadow-md">
                    Ngân hàng Phú Quý Việt Nam là một tổ chức tài chính tiên
                    phong, cung cấp các dịch vụ ngân hàng hiện đại, an toàn và
                    tiện lợi nhằm thúc đẩy sự phát triển bền vững và thịnh vượng
                    cho khách hàng.
                </p>
                <button className="mt-6 px-6 py-2 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition duration-300 shadow-lg">
                    Khám phá ngay
                </button>
            </div>
        </div>
    );
}

export default HomePage;

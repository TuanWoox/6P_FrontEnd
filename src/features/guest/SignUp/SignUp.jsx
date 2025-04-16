function SignUp(){
    return (
        <section className="flex flex-col items-center justify-center m-6 px-4">
            <div className="w-full max-w-7xl bg-white p-8 rounded-xl shadow-lg shadow-gray-300/60">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Mở tài khoản VFB trực tuyến chỉ trong 1 phút
                </h1>
                <h5 className="text-sm text-gray-700 mb-6">
                Nếu đã có tài khoản tại VFB, vui lòng bấm vào đây để{' '}
                <a href="/signin" style={{ color: '#4525C8' }} className="text-blue-500 hover:underline">đăng nhập</a>
                </h5>

                <form method="post" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Họ và tên */}
                    <div className="col-span-2">
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                        <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Nhập họ và tên"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#96C576] focus:border-[#96C576] transition duration-150"
                        />
                    </div>

                    {/* Ngày sinh */}
                    <div>
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Ngày sinh</label>
                        <input
                        type="text"
                        id="dob"
                        name="dob"
                        placeholder="DD/MM/YYYY"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#96C576] focus:border-[#96C576] transition duration-150"
                        />
                    </div>

                    {/* Giới tính */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Giới tính</label>
                        <div className="flex items-center gap-6">
                            <label className="inline-flex items-center text-gray-700 text-sm">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                className="h-4 w-4 text-[#96C576] focus:ring-[#96C576] border-gray-300"
                            />
                            <span className="ml-2">Nam</span>
                            </label>
                            <label className="inline-flex items-center text-gray-700 text-sm">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                className="h-4 w-4 text-[#96C576] focus:ring-[#96C576] border-gray-300"
                            />
                            <span className="ml-2">Nữ</span>
                            </label>
                        </div>
                    </div>


                    {/* CCCD/CMND */}
                    <div>
                        <label htmlFor="citizenID" className="block text-sm font-medium text-gray-700">CCCD/CMND</label>
                        <input
                        type="text"
                        id="citizenID"
                        name="citizenID"
                        placeholder="Nhập số CCCD hoặc CMND"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#96C576] focus:border-[#96C576] transition duration-150"
                        />
                    </div>

                    {/* SĐT */}
                    <div>
                        <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">Số điện thoại di động</label>
                        <input
                        type="text"
                        id="phonenumber"
                        name="phonenumber"
                        placeholder="Nhập số điện thoại của bạn"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#96C576] focus:border-[#96C576] transition duration-150"
                        />
                    </div>

                    {/* Quốc tịch */}
                    <div>
                        <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Quốc tịch</label>
                        <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        placeholder="Nhập quốc tịch của bạn"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#96C576] focus:border-[#96C576] transition duration-150"
                        />
                    </div>

                    {/* Địa chỉ thường trú */}
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Địa chỉ thường trú</label>
                        <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Nhập địa chỉ của bạn"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#96C576] focus:border-[#96C576] transition duration-150"
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="col-span-2 mt-4 flex items-start">
                        <input
                            type="checkbox"
                            id="isAgree"
                            name="isAgree"
                            className="h-4 w-4 text-[#96C576] focus:ring-[#96C576] border-gray-300 rounded mt-1"
                        />
                        <label htmlFor="isAgree" className="ml-2 text-sm text-gray-700">
                            Bằng cách tạo tài khoản, tôi đồng ý với <span className="underline cursor-pointer">Điều khoản sử dụng</span> và <span className="underline cursor-pointer">Chính sách bảo mật</span>.
                        </label>
                    </div>


                    {/* Submit button */}
                    <div className="col-span-2 mt-4">
                        <button
                        type="submit"
                        style={{ backgroundColor: '#96C576' }}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-200"
                        >
                        Đăng ký
                        </button>
                    </div>
                </form>
            </div>
        </section>

    )
}
  
export default SignUp;
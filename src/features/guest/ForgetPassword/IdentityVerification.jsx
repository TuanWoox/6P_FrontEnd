function IdentityVerification({ onStepChange}) {
  return (
    <>
      <form className="w-full p-4 max-w-md">
        <div className="mt-4 mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="fullName">
            Họ và tên
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full h-10 bg-gray-200 rounded-xl px-4"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="idCard">
            CCCD / CMND
          </label>
          <input
            id="idCard"
            type="text"
            className="w-full h-10 bg-gray-200 rounded-xl px-4"
            required
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email đăng ký
          </label>
          <input
            id="email"
            type="text"
            className="w-full h-10 bg-gray-200 rounded-xl px-4"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#95C475] hover:bg-white hover:text-[#95C475] hover:border-[#95C475] border-2 text-white py-2 px-6 rounded-full w-1/2"
            onClick={() => onStepChange(1)}
          >
            Tiếp tục
          </button>
        </div>

      </form>
    </>
  )
}

export default IdentityVerification
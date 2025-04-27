function ChangePasswordInput({
  register,
  errors,
  placeholder,
  required,
  name,
  validation = {},
}) {
  return (
    <div className="mb-6">
      <input
        type="password"
        placeholder={placeholder}
        className="w-full border-0 border-b-2 border-gray-300 focus:border-[#95C475] focus:outline-none py-2 placeholder-gray-400"
        {...register(name, {
          required: required,
          ...validation,
        })}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}

export default ChangePasswordInput;

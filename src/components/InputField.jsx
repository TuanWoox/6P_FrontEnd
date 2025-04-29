import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
import "react-phone-number-input/style.css";
import "react-datepicker/dist/react-datepicker.css";

const InputField = ({ label, name, defaultValue, rules, control, error, type = "text", ...rest }) => {
  return (
    <div className="mb-2">
      <label className="block text-gray-500 mb-2" htmlFor={name}>
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => {
          if (type === "phone") {
            return (
              <PhoneInput
                international
                defaultCountry="VN"
                id={name}
                value={field.value}
                onChange={field.onChange}
                className="w-full h-10 rounded-xl px-4 border-2 border-gray-300 focus:border-[#95C475] focus:outline-none"
              />
            );
          }

          if (type === "date") {
            return (
              <DatePicker
                id={name}
                placeholderText="Chọn ngày"
                dateFormat="dd/MM/yyyy"
                selected={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className="w-full h-10 rounded-xl px-4 border-2 border-gray-300 focus:border-[#95C475] focus:outline-none"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                maxDate={new Date()}
                {...rest}
              />
            );
          }

          return (
            <input
              id={name}
              type={type}
              value={field.value}
              onChange={field.onChange}
              className="w-full h-10 rounded-xl px-4 border-2 border-gray-300 focus:border-[#95C475] focus:outline-none"
              {...rest}
            />
          );
        }}
      />
      {error && <p className="mt-1 text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default InputField;

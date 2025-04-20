import {
  MagnifyingGlassIcon,
  DevicePhoneMobileIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router";
import HomeButton from "./HomeButton/HomeButton";

function HomePage() {
  return (
    <div className="homepage">
      <form action="" className="mb-7">
        <div className="relative w-full max-w-2xl mx-auto">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 transform -translate-y-1/2" />

          <input
            type="text"
            placeholder="Tìm kiếm trong 6P Bank"
            className="
                        w-full
                        text-lg
                        h-12
                        pl-10 pr-4 py-2
                        bg-gray-100
                        rounded-full
                        placeholder-gray-500
                        hover:bg-gray-200
                        focus:outline-none focus:ring-3 focus:ring-[#96C576]
                        transition duration-200
                        "
          />
        </div>
      </form>
      <div
        className="w-full max-w-5xl h-[320px] mx-auto bg-cover bg-center relative p-15 rounded-2xl drop-shadow-lg flex flex-col justify-center"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/3aa5/6d1c/2c634bf9de47971408fb1fd84a0302a1?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZuOR05J6QOVJpYpOpmpifH3qBh-RvrZVJynPipyrqdOAZ-vVsSpxccPb8TZMKRFdh6BwTXq8bxY6hYms2vg09SdKXF1IwQaG3lqMK9jEBQgulqklgbn1PQLCKVhw8SZ9dG-FgDgqkkq2WEbfQ8nLavwpu4k~i6RJkUARxV6T8f4ZO8EQdr7~afqyIbG2yn8LmWzfPwpLJYl~6UJ54mJzAzkL5F0PApfiaVTllTXJVhhPuWpcLAmq8nZQydCIO65vaGj9UfT1HO-BWlqbK4GwLhWmNHB1dW83dWWEE0U0CwikQAPw~8TzaqSqstEB1wFb7pmGznUSxYuuf-rR8p3d0A__')",
        }}
      >
        <p className="text-green-800 font-semibold text-5xl">
          Ngân hàng 6P Bank
        </p>
      </div>
      <div className="w-full max-w-5xl mx-auto mt-4 p-4 ">
        <h1 className="text-3xl font-semibold">Dịch vụ ngân hàng</h1>
        <div className="flex gap-35 mt-10">
          <HomeButton
            link="customer/saving"
            label={
              <>
                Tiền gửi <br /> Tiết kiệm
              </>
            }
            icon={<BanknotesIcon className="text-emerald-500 w-15" />}
          />
          <HomeButton
            link="customer/loan"
            label={
              <>
                Danh sách <br />
                vay
              </>
            }
            icon={<DocumentTextIcon className="text-emerald-500 w-15" />}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

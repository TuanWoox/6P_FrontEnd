import { useState } from "react";
import listFaq from "./listFaq.js";
import FaqAnswer from "./FaqAnswer.jsx";
import FaqList from "./FaqList.jsx";

function Faq() {
    const [faqTab, setFaqTab] = useState(0);

    return (
        <div className="w-full">
            <div className="p-4 md:p-6 lg:p-8">
                <img
                    src="https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/NEW-DIGI-BANNER-WEB/Cau-hoi-thuong-gap/HB_Cau-hoi-thuong-gap_DT.jpg?h=750&iar=0&w=3936&sc_lang=vi-VN&ts=20240722084151&hash=D45B6AC31546E1EC06F2C54689182B4F"
                    className="object-cover w-full h-32 shadow-lg sm:h-48 md:h-64 rounded-xl md:rounded-2xl"
                    alt="FAQ Banner"
                />
            </div>

            <div className="p-4 md:p-6 lg:p-8">
                <h1 className="text-xl font-bold text-center sm:text-2xl md:text-3xl md:text-left">
                    Các câu hỏi thường gặp
                </h1>
                <div className="flex flex-col gap-4 mt-4 md:flex-row md:gap-6 lg:gap-8">
                    <FaqList
                        listFaq={listFaq}
                        setFaqTab={setFaqTab}
                        faqTab={faqTab}
                    />
                    <FaqAnswer answer={listFaq[faqTab].answer} />
                </div>
            </div>
        </div>
    );
}

export default Faq;

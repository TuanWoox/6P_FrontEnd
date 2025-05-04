import { useState } from "react";
import listFaq from "./listFaq.js";
import FaqAnswer from "./FaqAnswer.jsx";
import FaqList from "./FaqList.jsx";
function Faq() {
    const [faqTab, setFaqTab] = useState(0);

    return (
        <div>
            <div className="p-8">
                <img
                    src="https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/NEW-DIGI-BANNER-WEB/Cau-hoi-thuong-gap/HB_Cau-hoi-thuong-gap_DT.jpg?h=750&iar=0&w=3936&sc_lang=vi-VN&ts=20240722084151&hash=D45B6AC31546E1EC06F2C54689182B4F"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
            </div>

            <div className="p-8">
                <h1 className="font-bold text-3xl">Các câu hỏi thường gặp</h1>
                <div className="mt-4 flex flex-row gap-4  justify-center">
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

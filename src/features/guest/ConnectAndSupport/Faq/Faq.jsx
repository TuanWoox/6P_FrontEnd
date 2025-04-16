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
          src="https://s3-alpha-sig.figma.com/img/96e5/81ed/4cea433244eb0c1a6e87a444aca72698?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sKaQ06clbVm8TqlS4kT~fzlgLXD9y5ZcDp3c3pRAiTXiblUIyfJtD4SSOUgcigMzJfnZHkCSlZWjC8O2ReBfOdp9wwFP3OwSEyHTr1D7lM68-paJ6gI9eeJQXqQ1Db1r-5hERuKWW3QGtmOrB8hBgloS0cv9S8kpj9vpnquFKGlOLInxd2VpAckKswNC67bWq-y8NVMdbYz7KA6Y82ndP7NVmnbSKay-iUhLfmMpBTAjOdDzkOB7V2HceRJ3zvMNFsWlD787YXN0SBfUXLSQABah77yrzN0BcJS5kOdnAY2n11VONZGtz9Q7O~eXchUhNMfI25RthwoFOxfpvJnKCQ__"
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="p-8">
        <h1 className="font-bold text-3xl">Các câu hỏi thường gặp</h1>
        <div className="mt-4 flex flex-row gap-4  justify-center">
          <FaqList listFaq={listFaq} setFaqTab={setFaqTab} faqTab={faqTab} />
          <FaqAnswer answer={listFaq[faqTab].answer} />
        </div>
      </div>
    </div>
  );
}

export default Faq;

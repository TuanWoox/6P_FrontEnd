import Logo from "./Logo";
import { Building, Mail, Phone, Clock } from "lucide-react";

function FooterSection({ title, content, icon }) {
    return (
        <div className="mb-6 md:mb-0 transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-gray-800 mb-3 text-lg flex items-center">
                {icon && <span className="mr-2">{icon}</span>}
                {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
        </div>
    );
}

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-green-50 to-emerald-100 shadow-lg py-8 px-4 md:px-16 text-gray-700 border-t border-green-200">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="flex flex-col items-center md:items-start">
                        <Logo to="/" />
                        <p className="mt-6 text-sm text-gray-600 leading-relaxed">
                            Ngân hàng số hàng đầu Việt Nam với các giải pháp tài
                            chính hiện đại, mang đến trải nghiệm ngân hàng đơn
                            giản và an toàn.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors"
                            >
                                <span className="text-sm font-bold">f</span>
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-green-400 text-white flex items-center justify-center hover:bg-green-500 transition-colors"
                            >
                                <span className="text-sm font-bold">t</span>
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-lime-500 text-white flex items-center justify-center hover:bg-lime-600 transition-colors"
                            >
                                <span className="text-sm font-bold">i</span>
                            </a>
                        </div>
                    </div>

                    <FooterSection
                        icon={<Building size={18} className="text-green-500" />}
                        title="Về Chúng Tôi"
                        content="6P BANK là ngân hàng số tiên phong tại Việt Nam, mang đến trải nghiệm tài chính đơn giản, an toàn và tiện lợi. Chúng tôi cam kết đổi mới liên tục để phục vụ khách hàng tốt nhất."
                    />

                    <FooterSection
                        icon={<Clock size={18} className="text-green-500" />}
                        title="Thời Gian Phục Vụ"
                        content="Dịch vụ ngân hàng số: 24/7 không ngừng nghỉ. Hỗ trợ khách hàng: 8:00 - 20:00 hàng ngày, kể cả ngày lễ và cuối tuần. Chúng tôi luôn sẵn sàng phục vụ bạn."
                    />

                    <div className="mb-6 md:mb-0">
                        <h3 className="font-semibold text-gray-800 mb-3 text-lg flex items-center">
                            <Mail size={18} className="text-green-500 mr-2" />
                            Liên Hệ
                        </h3>
                        <ul className="text-sm text-gray-600 space-y-3">
                            <li className="flex items-center">
                                <Phone
                                    size={16}
                                    className="text-green-500 mr-2"
                                />
                                <span>1900 6868</span>
                            </li>
                            <li className="flex items-center">
                                <Mail
                                    size={16}
                                    className="text-green-500 mr-2"
                                />
                                <span>support@6pbank.vn</span>
                            </li>
                            <li className="flex items-start">
                                <Building
                                    size={16}
                                    className="text-green-500 mr-2 mt-1"
                                />
                                <span>Số 1 Võ Văn Ngân</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-green-200 text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Ngân hàng 6P BANK. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

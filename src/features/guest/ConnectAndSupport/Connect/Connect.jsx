import ConnectCardInfo from "./ConnectCardInfo";
import contactSections from "./contactSection";

function Connect() {
    return (
        <div className="p-8 space-y-8">
            {/* Banner */}
            <div
                className="flex items-center w-full h-64 bg-center bg-cover shadow-lg rounded-2xl"
                style={{
                    backgroundImage:
                        "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/Lien-he-va-Ho-tro/Huong-dan-su-dung/trang-lien-he/Desktop_Trang-lin-h.jpg?h=750&iar=0&w=3936&ts=20230727100640&hash=EE8393C911E967BE04A33DCDDFCCD9DF')",
                }}
            >
                <div className="text-black ms-32">
                    <h2 className="mb-2 text-4xl font-bold">Liên hệ</h2>
                    <p className="text-lg">
                        Liên hệ 6P Bank để giải đáp thắc mắc
                    </p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="flex flex-wrap justify-between gap-4">
                {contactSections.map((contact, index) => (
                    <ConnectCardInfo
                        key={index}
                        header={contact.header}
                        content={contact.content}
                    />
                ))}
            </div>
        </div>
    );
}

export default Connect;

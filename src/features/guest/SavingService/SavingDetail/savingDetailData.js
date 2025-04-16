// Tiết kiệm có kỳ hạn
const dataForTermDeposit = {
    imgData: [
        {
            title: "Tiết kiệm có kỳ hạn",
            content1_title: "Loại tiền tệ",
            content1 :"Đa dạng",
            content2_title: "Kỳ hạn gửi tối đa",
            content2 :"24 tháng",
        }
    ],

    infoCard: [
        {
            title: "Loại tiền gửi đa dạng",
            content: "Gửi tiền bằng nhiều loại ngoại tệ khác nhau: USD, EUR, GBP, AUD, v.v.",
            imgSrc: "https://s3-alpha-sig.figma.com/img/c340/42bc/50a7eea6fcaca63b9b937ff3fc2d8cf7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L7nTZlb5Zyt9HXGbSrDW3wuhHiQRVamL11dKK9-2C5NSwAC9MWwaRtzAvBxsyww~c~MUxG76~4c7HIPkaMPip8dGMUSCp5j4mrbdQOgN8GTUYX79dFxLY07ycZzVTQDbt0u8y7ivggsi5msZsQVhc5Q4MVLNO6~B3zpKe0UXuBu1K9-T6x9YsLFg8tuCN9qM1zGkQ4adqqXCHSaqotTJKZNKR3Jo15jb3Z6VHkxLkcOcJ8m3P2eIAE7VpztewEmQpmLKxGvLnQlvW9I912obwGzfwdHy0wM~8blr7WAxOJpjsD61ibyALFxx3hbYVRpjSzrF6g4XtRc5KzdNMg5GJQ__",
        },
        {
            title: "Kỳ hạn linh hoạt",
            content: "Từ tối thiểu 1 tháng đến tối đa 24 tháng",
            imgSrc: "https://s3-alpha-sig.figma.com/img/d88c/dc47/f808ff6a9bdb700fbb23ea1e7ee6eedc?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FYdx-Zf576P2gqfFIfuIS0cihSbc04jLl8Iijn~Z9a9xd9Lj0006mgg3K89N7Cik-HGA4CmApeRpxdIv4yorg55P1Ikujz8HN~Pynv0XN~T153vs5BRX0NecvFRcdJMG1EpLIz5eIUIe~apzXIe6W-SxrSXqPSlmWg5WcPb54RfS7IxRsUK1gM1-CFQBRYWT5~0cb64d~MnX9Fm7R7kMy0AUxl9HFruaxq5W-lOM7nu77-6UoFd5XCz~qbV2BbKvle7oSZT25TzDfWKAL7ydaabCd-CRlwLdkjruBuZbR-IY-TdFGpfJD9avkUvkcHhOY6VK99pFjoJuDNZWapa0WA__",
        },
        {
            title: "Thủ tục nhanh chóng",
            content: "Gửi và rút dễ dàng tại tất cả điểm giao dịch của 6PBank trên toàn quốc",
            imgSrc: "https://s3-alpha-sig.figma.com/img/0349/2017/d7385cd41888378bb443ea48107757d8?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KnjsH79FOAAVNLqqcEDLRmNZWvBQQTrKoCl7cinI8FRIce2s~VTUj~vDE6JUfifnVzzPISl-SIPVtk0j-X72dBLITqSF4AW1n260Btc7hGYihC6UgzLgUg2EDzttVaXHdfyk8g1frPIq9cDJJdSlGOSHIfdibfamGU~~23P1yrJPpqaif0TEF4dsulvWe9TCGhJD~pyNpxDgTFMyPJvsePMmmH~0QkiNfEVtu1pa6CR3jsIsjsb5OxS0pCe8bRAs9XDxRmC8MAVTzWPrq8uIeevS9TMrxJDaMl9YrQg8TNotOyRfKtYmANW-GWp74q2rbjMryYsR6WqmMOY7Qn7AKw__",
        }
    ],

    listProductInfo: [
        {
            title: "LOẠI TIỀN TỆ",
            content: "VND, USD, EUR, GBP, AUD và các loại ngoại tệ khác theo quy định của 6PBank",
        },
        {
            title: "SỐ TIỀN GỬI",
            content: "Tối đa: không giới hạn số tiền gửi\nTối thiểu: 500.000 VNĐ",
        },
        {
            title: "KỲ HẠN",
            content: "Linh hoạt: theo tháng, theo năm\nCác kỳ hạn gửi: 07 ngày, 14 ngày, từ 01 tháng - 60 tháng",
        },
        {
            title: "LÃI SUẤT",
            content: `Lãi suất cố định trong suốt kỳ hạn gửi. Trong trường hợp rút trước hạn:
                    - Lãi suất rút trước hạn VND: Bằng lãi suất không kỳ hạn thấp nhất tại Vietcombank
                    - Lãi suất rút trước hạn ngoại tệ: 0%/năm`,
        },
        {
            title: "PHƯƠNG THỨC TRẢ LÃI",
            content: "Trả lãi cuối kỳ",
        },
    ],

    listDemandInfo: [
        {
            title: "TIỀN GỬI CÓ KỲ HẠN",
            content: "Khách hàng từ 18 tuổi trở lên, có tài khoản thanh toán tại 6PBank",
        },
    ],
};


// Tiết kiệm không kỳ hạn
const dataForDemandDeposit = {
    imgData: [
        {
            title: "Tiết kiệm không kỳ hạn",
            content1_title: "Tiền gửi tối thiểu",
            content1 :"500.000 VND",
            content2_title: "Số lần rút gốc",
            content2 :"Không giới hạn",
        }
    ],

    infoCard: [
        {
            title: "Tối ưu lợi ích",
            content: "Giữ nguyên lãi suất khoản tiền còn lại, hưởng lãi suất không kỳ hạn khoản tiền rút trước hạn",
            imgSrc: "https://s3-alpha-sig.figma.com/img/8df7/af8c/86feb78f829a19f1457ccabbe1c5d4cd?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=by6qUT8xk2NM1mL5IEiuKkr~NfnN5CJUaYkQwp5SagocFGsBKrjunjy9Ynvui4XbUzfW~9k6o9EBTtQoDG1wAvj7U0Rf~uillZuOIfOyuxH2g0RyLulA4qwDGuYhU9m8eBqm25VeixaEa8I8MQdTc2fHRmvOdVVx3fQsLxeTOs2v5AkKuwxS269~wzb7LlimMkKvbwqDtuQBIHL-B-D8UN2kpc-n1YD~VcGYaYa0cufc71D8vG-XINOSJxUWuQvGPFP0wFmnwZA6vGoEFAxxxHzoc~M3Q6Ak5428z9b-3vmZDWgsmtTwbr-xgg85uDsuc1xxKMcFZCgH5U~h2jX3jg__",
        },
        {
            title: "Rút gốc linh hoạt",
            content: "Rút một phần tiền gửi mà không phải tất toán toàn bộ",
            imgSrc: "https://s3-alpha-sig.figma.com/img/098b/a6aa/97343edd1e9b73294b0e63ba62ffee9d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nGHQ2ab0UmLyghhB-L-wGN~RrJwyN5YRAah6YyQD1xFzep3gliBvwMDicniyxLP01~cuCN96ewJ6WodjHDScQ51i~oOuyoxCLeq5FmMQzJpyDZnrZwiaqSYZCfVIrYgEgM4PPzZAFsQ1~Q96WPUT-ONlHSoBMo~xQHLxX0hfHzvHI1G0GqbMCtqK7PgC6VUaeVg2NHHYV-RZn25v2FOoVwHhv1sj02njiHGC896S3lENVzt9nIi2g8eeBNqUgRlrPmLdAjmk1uiHRJ0c9Z23OHJ5SlvE0igzslcXpdAA1oZ9PXcQQSVTDjDWdtOFhQ3Q0haz7lGYTIX0LaCkPhxz6A__",
        },
        {
            title: "Giao dịch thuận tiện",
            content: "Gửi và rút dễ dàng qua Ngân hàng số 6P Digibank hoặc điểm giao dịch của 6P Bank",
            imgSrc: "https://s3-alpha-sig.figma.com/img/ef18/54ea/4c1f4e3db0bbd9066de112f37ffca00d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k224RxJcNZ5ySZ3cSIJlC1uJZbZwIdqNuxnZjsVvdeuTa-oUlCA5lgLUidUnC84vZrHCAIQcfrIOYCS2XiTcBA~mc83bedh8LlUle2s4of9CZd6EDAlKsVXE7Bp6fuX6SKOmaYHEgU361J5pCk~jg6YpzAZtXdOyiGacrjdGNsDmjr2xnCQ4mNexGwMTTT5dozxl-fYYObEld6QgBBkNMUOyFwZBfav8szPX5RY~ugle9s7uBGXVS8Me7mGI1NUwTidAa78XghiFzHjAoFSD9unZw82r1CYl31gRTDZEuW5UXK0gmHfk89QKLGH2QUtEDTLnhYBzOR-Icix~wdQD5g__",
        }
    ],

    listProductInfo: [
        {
            title: "LOẠI TIỀN TỆ",
            content: "VND, USD, EUR, GBP, AUD và các loại ngoại tệ khác theo quy định của 6PBank",
        },
        {
            title: "SỐ TIỀN GỬI",
            content: "Tối đa: không giới hạn số tiền gửi\nTối thiểu: 50.000 VNĐ",
        },
        {
            title: "LÃI SUẤT",
            content: "Lãi suất tính theo số dư cuối ngày: (1%/năm)",
        },
        {
            title: "PHƯƠNG THỨC TRẢ LÃI",
            content: "Theo từng ngày hoặc theo tháng",
        },
    ],

    listDemandInfo: [
        {
            title: "TIỀN GỬI KHÔNG KỲ HẠN",
            content: "Khách hàng từ 18 tuổi trở lên, có tài khoản thanh toán tại 6PBank",
        },
    ],
};

export function getSavingDetailDataByType(type) {
    switch (type) {
        case 1:
            return dataForTermDeposit;
        case 2:
            return dataForDemandDeposit;
        default:
            return null;
    }
}
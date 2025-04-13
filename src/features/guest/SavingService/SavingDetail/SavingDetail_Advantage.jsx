
function SavingDetail_Advantage({
    // Advantages title
    title = "Advantages of Saving",
    // Advantages content
    content = "Saving is a great way to secure your financial future and achieve your goals.",
    // Image
    imgSrc = "https://s3-alpha-sig.figma.com/img/c340/42bc/50a7eea6fcaca63b9b937ff3fc2d8cf7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L7nTZlb5Zyt9HXGbSrDW3wuhHiQRVamL11dKK9-2C5NSwAC9MWwaRtzAvBxsyww~c~MUxG76~4c7HIPkaMPip8dGMUSCp5j4mrbdQOgN8GTUYX79dFxLY07ycZzVTQDbt0u8y7ivggsi5msZsQVhc5Q4MVLNO6~B3zpKe0UXuBu1K9-T6x9YsLFg8tuCN9qM1zGkQ4adqqXCHSaqotTJKZNKR3Jo15jb3Z6VHkxLkcOcJ8m3P2eIAE7VpztewEmQpmLKxGvLnQlvW9I912obwGzfwdHy0wM~8blr7WAxOJpjsD61ibyALFxx3hbYVRpjSzrF6g4XtRc5KzdNMg5GJQ__",
}) {
  return (
    <div className="w-[420px] p-5 bg-gray-200 border border-gray-200 rounded-2xl shadow-sm">
        <img src={imgSrc} alt="" className="mx-auto mb-4" />
        <h3 className="uppercase font-semibold mb-1 text-lg text-center">{title}</h3>
        <p className="text-gray-700 text-md text-center">{content}</p>
    </div>
  );
}

export default SavingDetail_Advantage;
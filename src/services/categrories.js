const categrories=["Gấu bông","Balo","Văn phòng phẩm","Trang trí","Phụ kiện thời trang","Phụ kiện điện thoại","Đồ chơi"]
const bearCategrories=["Gấu bông cute","Gấu bông idol","Gấu bông khác"]
const baloCategrories=["Balo","Túi đeo chéo","Ví"]
const stationeryCategrories=["Hộp bút","Lịch","Notebooks","Bút","Thước"]
const decorateCategrories=["Tượng","Chuông gió","Banner","Đèn ngủ","Đồ trang trí khác"]
const fashionCategrories=["Phụ kiện","Quần áo"]
const phoneCategrories=["Tai nghe","Dây đeo điện thoại","Ốp điện thoại","Sản phẩm khác"]
const toyCategrories=["Tô tranh màu","Mô hình nhà","Đồ chơi xếp hình"]
const routeBear=["/Gau-bong/gau-bong-cute","/Gau-bong/gau-bong-idol","/Gau-bong/gau-bong-khac"]
const routeBalo=["/Balo/Balo","Balo/tui-deo-cheo","Balo/vi"]
const routeDecor=["/Trang-tri/tuong","/Trang-tri/chuong-gio","/Trang-tri/banner","/Trang-tri/đen-ngu","Trang-tri/đo-trang-tri-khac"]
const routeFashion=["/Phu-kien-thoi-trang/phu-kien","/Phu-kien-thoi-trang/quan-ao"]
const routePhone=["/Phu-kien-dien-thoai/tai-nghe","/Phu-kien-dien-thoai/day-đeo-đien-thoai","/Phu-kien-dien-thoai/op-đien-thoai","/Phu-kien-dien-thoai/san-pham-khac"]
const routeToy=["/Do-choi/to-tranh-mau","/Do-choi/mo-hinh-nha","/Do-choi/đo-choi-xep-hinh"]
export function handleCategrories(){
    return{
        categrories,
        bearCategrories,
        baloCategrories,
        stationeryCategrories,
        decorateCategrories,
        fashionCategrories,
        phoneCategrories,
        toyCategrories,
        routeBear,
        routeBalo,
        routeDecor,
        routeFashion,
        routePhone,
        routeToy
    }
}
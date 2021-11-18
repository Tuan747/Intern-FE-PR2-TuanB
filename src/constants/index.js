export const HOST_API = "https://naht-cinema-api.herokuapp.com";
export const FETCH_DATA_SUCCESS = 200;
export const FETCH_DATA_ERROR = 201;
export const PLACEHOLDER_SEARCH = "Tìm Kiếm...";
export const MOVIES = {
    title: {
        comming: 'Phim sắp chiếu',
        now: 'Phim đang chiếu'
    },
    status: {
        now: 'now',
        comming: 'comming'
    },
    trailer: 'Trailer',
    byeTicket: 'Mua vé',
    detail: {
        line1: 'Khởi chiếu:',
        line2: 'Thể loại:',
        line3: 'Diễn viên:',
        line4: 'Đạo diễn:',
        line5: 'Đánh giá:',
    }
}
export const TICKET = {
    theater: 'Chọn rạp',
    date: 'Chọn ngày',
    hours: 'Chọn Giờ',
    requiredGetSeats: 'Hãy chọn rạp, ngày, giờ để hiển thị suất chiếu',
    seat_disabled: 'Ghế đã chọn',
    seat_available: 'Ghế chưa chọn',
    seat_selected: 'Ghế đang chọn',
    titlePayment: 'Thông tin vé',
    minute: 'phút',
    seat: 'Ghế',
    unit_price: 'Đơn giá vé',
    quantity: 'Số lượng vé',
    total: 'Tổng tiền',
    methodPayment: 'Phương thức thanh toán',
    select: 'Chọn',
    unit_VND: 'VND',
    gift: 'Mã giảm giá',
    add_gift: 'Chọn mã giảm giá',
    btn: 'Mua',
    required_method: 'Yêu cầu chọn phương thức thanh toán'
}
export const MANAGER = {
    user: {
        table_no: 'No',
        table_name: 'Tên',
        table_date: 'Ngày sinh',
        table_email: 'Email',
        table_btn_delete: 'Xóa',
        title: 'Thống kê người dùng',
        title_week: 'Đã tạo trong tuần này',
        title_month: 'Đã tạo trong tháng này',
        title_year: 'Đã tạo trong năm này',
        question_delete_1: 'Bạn có muốn xóa người dùng',
        question_delete_2: 'không ?',
        btn_yes: 'Có',
        btn_close: 'Đóng',
    },
    movies: {
        title: 'Thống kê phim',
        nowMoviesTitle: 'Số lượng phim đang chiếu',
        commingMoviesTitle: 'Số lượng phim sắp chiếu',
        totalMovies: 'Số lượng tất cả phim',
        table_no: 'No',
        table_name: 'Tên phim',
        table_date: 'Ngày khởi chiếu',
        table_length: 'Độ dài',
        table_status: 'Đang chiếu',
        table_action: 'Hành động',
        notify_error_date: 'Nhập lại ngày kết thúc phải lớn hơn ngày bắt đầu',
        notify_error_video: 'Video sai định dạng',
        notify_error_img: 'Ảnh không đúng',
        notify_add_success: 'Tạo thành công',
        notify_add_error: 'Tạo không thành công',
        title_add_movie: 'Thêm phim',
        title_add_desc: 'Mô tả',
        title_add_director: 'Đạo diễn',
        title_add_actor: 'Diễn viên',
        title_add_start_date: 'Ngày khởi chiếu',
        title_add_start_end: 'Ngày kết thúc',
        title_add_language: 'Ngôn ngữ',
        title_add_type: 'Thể loại',
        title_add_lenth: 'Độ dài phim',
        title_add_rating: 'Đánh giá',
        title_add_trailer: 'Trailer',
        title_add_img: 'Chọn ảnh',
        title_add_status: 'Trạng thái',
        notify_error_name: 'Nhập tên phim',
        notify_error_desc: 'Nhập Mô tả',
        notify_error_director: 'Nhập Đạo diễn',
        notify_error_actor: 'Nhập Diễn viên',
        notify_error_start_date: 'Nhập Ngày khởi chiếu',
        notify_error_start_end: 'Nhập Ngày kết thúc',
        notify_error_language: 'Nhập Ngôn ngữ',
        notify_error_type: 'Nhập Thể loại',
        notify_error_lenth: 'Nhập Độ dài phim',
        notify_error_rating: 'Nhập Đánh giá',
        notify_error_trailer: 'Nhập Trailer',
        notify_error_stauts: 'Nhập Trạng thái',
        btn_create: 'Tạo mới',
        btn_yes: 'Có',
        btn_close: 'Đóng',
        question_delete_1: 'Bạn có muốn xóa phim',
        question_delete_2: 'không ?',
        title_edit: 'Chỉnh Sửa phim',
        delete_success: 'Xóa thành công',
        delete_error_now: 'Phim đang chiếu ko thể xóa',
    },
    movie_time: {
        table_no: 'No',
        table_name: 'Tên phim',
        table_date: 'Ngày',
        table_hours: 'Giờ',
        table_price: 'Giá tiền',
        table_action: 'Hành động',
        title_add_movie_time: 'Tạo xuất chiếu mới',
        title_select_movie: 'Chọn phim',
        title_select_theater: 'Chọn rạp',
        title_select_date: 'Chọn ngày',
        title_select_hours: 'Giờ chiếu',
        title_select_price: 'Giá vé',
        title_total_time: 'Tổng suất chiếu',
        title_filter_name: 'Chọn tên phim',
        title_filter_theater: 'Chọn rạp',
        title_filter_date: 'Chọn ngày',
        title: 'Thống kê xuất chiếu',
        title_delete_QA: 'Bạn có muốn xóa xuất chiếu này không ?',
        empty_title_filter_date: 'Hiện tại không có',
        empty_movies: 'Hiện tại phim này chưa có suất chiếu',
        empty_input: 'Bắt buộc nhập trường này',
        notify_add_success: 'Thêm thành công',
        notify_add_error: 'Thêm không thành công',
        notify_delete_success: 'Xóa thành công',
        btn_delete: 'Xóa',
        btn_create: 'Tạo mới',
        btn_close: 'Hủy',
    },
    gift: {
        title: 'Thống kê mã quà tặng',
        title_week: 'Số lượng đã lấy trong tuần này',
        title_month: 'Số lượng đã lấy trong tháng này',
        title_year: 'Số lượng đã lấy trong năm này',
        title_edit: 'Chỉnh sữa mã',

        title_add: 'Tạo mã quà tặng mới',
        title_add_name: 'Tên mã quà tặng',
        title_add_desc: 'Mô tả',
        title_add_date_start: 'Ngày bắt đầu',
        title_add_date_end: 'Ngày kết thúc',
        title_add_quantity: 'Số lượng',
        title_add_point: 'Điểm',
        title_add_price: 'Giảm tiền',

        title_delete_QA_1: 'Bạn có muốn xóa mã giảm giá',
        title_delete_QA_2: 'này không ?',

        placeholder_add_name: 'Nhập tên mã quà tặng',
        placeholder_add_desc: 'Nhập mô tả',
        placeholder_add_quantity: 'Nhập số lượng',
        placeholder_add_point: 'Nhập điểm để lấy',
        placeholder_add_price: 'Nhập giảm tiền',

        table_no: 'No',
        table_name: 'Tên',
        table_date_start: 'Ngày bắt đầu',
        table_date_end: 'Ngày kết thúc',
        table_quantity: 'Số lượng',
        table_point: 'Điểm',
        table_price: 'Giá',
        table_action: 'Hành động',

        btn_delete: 'Xóa',
        btn_create: 'Tạo mới',
        btn_close: 'Hủy',
        btn_edit: 'Chỉnh sửa',

        notify_add_error: 'Tên xuất chiếu này đã tồn tại hãy tạo xuất chiếu mới',
        notify_add_success: 'Tạo xuất chiếu thành công',
        notify_add_error_date_end: 'Nhập ngày kết thúc lớn hơn ngày bắt đầu',
        notify_edit_error: 'Chỉnh sửa không thành công',
        notify_edit_success: 'Chỉnh sửa thành công',
        notify_delete_success: 'Xóa thành công',

        empty_input: 'Bắt buộc nhập trường này',
        empty_list_girt: 'Hiện tại chưa có mã giảm giá nào. Hãy tạo mã giảm giá !!!'
    }
}
export const TAB_ADMIN_MOVIE = 'ADMIN_MOVIE'
export const TAB_ADMIN_USER = 'ADMIN_USER'
export const TAB_ADMIN_GIFT = 'ADMIN_GIFT'
export const TAB_ADMIN_MOVIETIME = 'ADMIN_MOVIETIME'
export const TAB_ADMIN_REVENUE = 'ADMIN_REVENUE'
export const METHOD_PAYMENT_MOMO = 'Momo'
export const ERROR_MESSAGE = "F5 lại trang!!!"
export const AUTHORS = {
    register: 'Đăng ký thành viên',
    login: 'Đăng nhập',
    phone: '028 7300 8881',
    success: 'Đăng nhập thành công',
    error: 'Tài khoản không đúng',
    not_found: 'Tài khoản không tồn tại',
    not_empty: 'Không để trống',
    required_login: 'Bạn cần đăng nhập',
    user: {
        infoUser: 'Thông tin cá nhân',
        logOut: 'Đăng xuất',
    }
}
export const NAVBAR_TITLE = {
    movies: 'Phim',
    schedule: 'Lịch',
    promotion: 'Khuyến mãi',
    news: 'Tin Tức',
    contact: 'Liên hệ',
    manager: 'Quản lý',
};
export const FOOTER = {
    line1: "CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO",
    line2: "ĐỊA CHỈ: 135 HAI BÀ TRƯNG, PHƯỜNG BẾN NGHÉ, QUẬN 1, TP.HCM",
    line3: "GIẤY CNĐKDN SỐ: 0312742744, ĐĂNG KÝ LẦN ĐẦU NGÀY 18/04/2014, ĐĂNG KÝ THAY ĐỔI LẦN THỨ 2 NGÀY 15/09/2014, CẤP BỞI SỞ KH & ĐT TP.HCM",
    line4: "2015 ©",
    line5: "CINESTAR",
    line6: ". All rights reserved.",
};
export const CONTACT = {
    line1: "LIÊN HỆ",
    line2: "CINESTAR CINEMAS",
    line3: "HEADQUATERS",
    line4: "Địa chỉ: 135 Hai Bà Trưng, P. Bến Nghé, Q.1, TP.HCM",
    line5: "Hotline: 028 7300 8881",
    line6: "LIÊN HỆ QUẢNG CÁO - SỰ KIỆN - GROUPSALE",
    line7: "THÔNG TIN LIÊN HỆ:",
    line8: "SỐ ĐIỆN THOẠI: +84 966 252 325",
    line9: "EMAIL: ads@cinestar.com.vn",
}

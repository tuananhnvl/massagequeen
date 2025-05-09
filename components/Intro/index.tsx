import React from 'react'

export default function Intro() {
    return (
        <section className="section-full-ct bg-flower-add">
            <div className="container welcome-detail ">
                <img src="./logo-long-custom.png" />
                <div className="box-full-video" style={{ margin: " 2rem auto" }}>
                    <video style={{ width: "100%", margin: "0 auto", display: "block" }}   autoPlay={true}
    muted // Ensure video can autoplay
    controls // Optionally add controls for manual play
  >
                        <source
                            src="./video-queen.mp4"
                            type="video/mp4" />
                    </video>
                </div>
                <div className="row welcome-detail-content">
                    <div className="welcome-detail-content--style">
                        <span className="custom-stdh">Massage Queen</span> là một địa điểm đến rất quen thuộc của quý anh trong
                        thời gian gần đây là một địa điểm Massage thư giãn cho Nam giới hấp dẫn đạt chuẩn TOP tại Sài Thành
                        <br />Một trong những con đường rất mát mẻ với những hàng cây cao rợp bóng mát làm cho ngày cũng như
                        đêm con đường Trần Quang Khải luôn mang đến một cảm giác nhẹ nhàng thư thái
                        <br />Sau những cuộc vui ấy thì chỉ đến với massge là một cách làm cho quý anh được trọn vẹn cuộc vui
                        khi được sự chăm sóc tận tình của các bé kỹ thuật viên vừa xoa bóp,tâm sự,và cuối cùng chính là một
                        happy ending thoải mái nhất
                        <br /><span className="custom-stdh">Massge Queen</span> luôn chăm chút từng chi tiết nhỏ nhất nhằm mang
                        lại sự hài lòng tốt nhất đối với quý khách khi đến thư giãn luôn cần một không gian nhẹ nhàng,thế
                        nên cách sắp xếp,bài trí tại Queen luôn cập nhập và thay đổi tạo nên sự mới mẻ theo từng thời điểm
                        để mỗi khi quý khách đến đều luôn cảm nhận những phút giây thoải mái nhất ..
                        <br /><span className="custom-stdh">Massge Queen</span> đầu tư 100% là phòng VIP thiết kế theo phong cách
                        hoàng gia với tông màu vàng sang trọng
                        <br />Với các loại phòng <span className="custom-stdh">SUPER - KING - QUEEN</span>
                        <br />Thiết kế sang trọng và hài hòa với đội ngũ nhân viên đông đảo của Queen massage đều được tuyển
                        chọn và huấn luyện kĩ càng nhằm giúp quý khách có những giây phút thư giãn và thăng hoa nhất có thể
                    </div>
                </div>
            </div>
        </section>
    )
}

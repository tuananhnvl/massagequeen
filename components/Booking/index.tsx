"use client"
import { useRouter } from 'next/navigation';
import {useState,FormEvent,useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './style.module.css'

export default function Booking() {
    const router = useRouter()
    const [value, setValue] = useState({
        fullName: "",
        phone: "",
        date: "",
        typeService: ""
      });
      const thisDate = useRef<HTMLInputElement>(null)
      const thisTypeService = useRef<HTMLInputElement>(null)
      const thisForm = useRef<HTMLFormElement>(null)
      const handleSubmitBooking = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        thisForm.current?.style.setProperty("pointer-events", "none");
        const promise = fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: value.fullName,
            phone: value.phone,
            date: thisDate.current?.value,
            typeService: thisTypeService.current?.innerHTML
          }),
        }).then((response) => {
          if (!response.ok) {
            throw new Error("Có lỗi, vui lòng thừ lại");
          }
          return response;
        });
        
        toast.promise(
          promise,
          {
            pending: 'Đang gửi thông tin...',
            success: 'Chúng tôi đã nhận được thông tin! 🎉',
            error: 'Có lỗi, vui lòng thừ lại',
          }
        );
    
        promise.then(() => {
          setValue({
            fullName: "",
            phone: "",
            date: "",
            typeService: "",
            
          });
         
          setTimeout(() => {
            thisForm.current?.style.setProperty("pointer-events", "auto");
            router.push("/")
        }, 1000)
        });
    
      };

     
    return (
        <>
     
          <div className="appointments-wrap normal-wrap">
          <ToastContainer />
            <div className="container--ct-1200px positionrelative form-custom-wp">

                <img className="bgof-appointments-form" src="/bg-modal-ct.png" alt="" />
                <form className="appointments-form"  style={{ background: "unset !important" }} name="sentMessageBooking"  onSubmit={(e) => handleSubmitBooking(e)}>
              
                    <h2>Đặt&nbsp;Phòng</h2>
                    <p>Chúc Quý Khách Hàng có những trải nghiệm thư giãn tuyệt vời</p>
                    <div className="d-flex justify-content-between appointments-div defend-style-sdgh">
                        <div className="calendar-dropdown-wrap flex-fill ">
                            <span className="span-booking-date-meterial custom-input-dgfh hovaten-input-style-defend">
                                <img src="/hovaten-form.png"
                                    alt="calendar-dropdown-icon" />
                                <input 
                                
                                value={value.fullName}
                                onChange={(e) =>
                                  setValue((prev) => ({
                                    ...prev,
                                    fullName: e.target.value,
                                  }))
                                }
                                required
                                type="text" className="hk-input flex-fill"
                                    placeholder="Họ tên" id="value-nameclient" />
                            </span>
                        </div>
                        <div className="calendar-dropdown-wrap flex-fill">
                            <span className="span-booking-date-meterial custom-input-dgfh contact-input-style-defend">
                                <img src="/contact-form.png"
                                    alt="calendar-dropdown-icon" />
                                <input type="text" className="hk-input flex-fill"

                                        value={value.phone}
                                        onChange={(e) =>
                                        setValue((prev) => ({
                                            ...prev,
                                            phone: e.target.value,
                                        }))
                                        }
                                        required

                                    placeholder="Thông tin liên hệ" id="value-contactclient" />
                            </span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between appointments-div ">

                        <div className="calendar-dropdown-wrap flex-fill" >
                            <span className="span-booking-date-meterial">
                                <img src="/calendar-dropdown-icon.svg"
                                    alt="calendar-dropdown-icon" />
                                <input ref={thisDate} type="text" className="hk-input flex-fill" id="booking-date-meterial" name="booking-date"
                      
                                 required
                                    placeholder="Chọn ngày đến" />
                                <i className="fas fa-chevron-down"></i>
                            </span>
                        </div>
                        <div className="service-dropdown-wrap flex-fill">
                            <div className="service-dropdown-wrap-selected dropdown-selected">
                                <img src="/service-dropdown-icon.svg"
                                    alt="service-dropdown-icon" />
                                <span id="value-typeservices" ref={thisTypeService}>Chọn gói dịch vụ</span>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <input type="hidden" name="booking-service" />
                            <div className="dropdown-content" id="customSelectsdfghb">
                                <div className="dropdoen-content-bg">
                                    <ul>
                                        <li className="custom-title-onListSerPick">
                                            <p className="custom-title-onListSerPick--childtit">VÉ VIP</p>
                                        </li>
                                        <li >
                                            <span className="small-title">Vé VIP</span>
                                            <span className="float-right small-info">
                                                <span className="green">600K</span><span>/70 phút</span>
                                            </span>
                                        </li>
                                    
                                        <li >
                                            <span className="small-title">Vé VIP NURU 1</span>
                                            <span className="float-right small-info">
                                                <span className="green">1.100K</span><span>/90 phút</span>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="small-title">Vé VIP NURU 2</span>
                                            <span className="float-right small-info">
                                                <span className="green">1.300K</span><span>/100 phút</span>
                                            </span>
                                        </li>
                                        <li >
                                            <span className="small-title">Vé VIP QUEEN</span>
                                            <span className="float-right small-info">
                                                <span className="green">1.600K</span><span>/120 phút</span>
                                            </span>
                                        </li>
                                        <li >
                                            <span className="small-title">Vé VVIP QUEEN</span>
                                            <span className="float-right small-info">
                                                <span className="green">2.000K</span><span>/140 phút</span>
                                            </span>
                                        </li>
                                    </ul>

                                    <a className="btn-close-dropdown-content" id="close-dropdown-content">
                                        <img src="/close.png" />
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                    <button className={`${s.mt1} flex-fill`} type="submit">Đặt phòng</button>
                </form>
            </div>
        </div>
        </>
       
    )
}

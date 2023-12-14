
export default function RegisterModal({ isRegister, handleRegister }) {
    return (
        <>
            <div className={`modal fade popup ${isRegister ? "show d-block" : ""}`} id="popup_bid2" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content ">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleRegister}>
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="modal-body space-y-20 pd-40 style2">
                            <div className="wrap-modal flex">
                                <div className="images flex-none relative">
                                    <img src="assets/images/section/bg-register.jpg" alt="images" />
                                    <div className="mark-logo">
                                        <img src="assets/images/logo/logo2.png" alt="images" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="title-login fs-30 fw-7 lh-45">Register</div>
                                    <div className="comments">
                                        <div className="respond-comment">
                                            <form method="post" className="comment-form form-submit" action="#" acceptCharset="utf-8" noValidate="novalidate">
                                                <fieldset className>
                                                    <label className="fw-6">User name</label>
                                                    <input type="text" className="tb-my-input" name="text" placeholder="User name" />
                                                    <img className="img-icon img-name" src="assets/images/icon/login-user.svg" alt="images" />
                                                </fieldset>
                                                <fieldset className="t">
                                                    <label className="fw-6">Email</label>
                                                    <input type="email" className="tb-my-input" name="email" placeholder="Email" />
                                                    <img className="img-icon" src="assets/images/icon/icon-gmail.svg" alt="images" />
                                                </fieldset>
                                                <fieldset className>
                                                    <label className="fw-6">Password</label>
                                                    <input type="password" className="input-form password-input" placeholder="Your password" />
                                                    <img className="img-icon" src="assets/images/icon/icon-password.svg" alt="images" />
                                                </fieldset>
                                                <fieldset className>
                                                    <label className="fw-6">Confirm password</label>
                                                    <input type="password" className="input-form password-input" placeholder="Confirm password" />
                                                    <img className="img-icon" src="assets/images/icon/icon-password.svg" alt="images" />
                                                </fieldset>
                                                <button className="sc-button" name="submit" type="submit">
                                                    <span>Sign Up</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="text-box text-center fs-13">Allready have an account? <a className="font-2 fw-7 fs-13 color-popup text-color-3" data-toggle="modal" data-target="#popup_bid" data-dismiss="modal" aria-label="Close">Login</a></div>
                                    <p className="texts fs-13 text-center">or Register with</p>
                                    <div className="button-box flex">
                                        <a href="#" className="flex align-center">
                                            <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.43242 12.5863L3.73625 15.1852L1.19176 15.239C0.431328 13.8286 0 12.2149 0 10.5C0 8.84179 0.403281 7.27804 1.11812 5.90112H1.11867L3.38398 6.31644L4.37633 8.56815C4.16863 9.17366 4.05543 9.82366 4.05543 10.5C4.05551 11.2341 4.18848 11.9374 4.43242 12.5863Z" fill="#FBBB00" />
                                                <path d="M19.8242 8.6319C19.939 9.23682 19.9989 9.86155 19.9989 10.5C19.9989 11.216 19.9236 11.9143 19.7802 12.588C19.2934 14.8803 18.0214 16.8819 16.2594 18.2984L16.2588 18.2978L13.4055 18.1522L13.0017 15.6314C14.1709 14.9456 15.0847 13.8726 15.566 12.588H10.2188V8.6319H19.8242Z" fill="#518EF8" />
                                                <path d="M16.2595 18.2978L16.2601 18.2984C14.5464 19.6758 12.3694 20.5 9.99965 20.5C6.19141 20.5 2.88043 18.3715 1.19141 15.239L4.43207 12.5863C5.27656 14.8401 7.45074 16.4445 9.99965 16.4445C11.0952 16.4445 12.1216 16.1484 13.0024 15.6313L16.2595 18.2978Z" fill="#28B446" />
                                                <path d="M16.382 2.80219L13.1425 5.45437C12.2309 4.88461 11.1534 4.55547 9.99906 4.55547C7.39246 4.55547 5.17762 6.23348 4.37543 8.56812L1.11773 5.90109H1.11719C2.78148 2.6923 6.13422 0.5 9.99906 0.5C12.4254 0.5 14.6502 1.3643 16.382 2.80219Z" fill="#F14336" />
                                            </svg>
                                            <span className="fw-6">Google</span>
                                        </a>
                                        <a href="#" className="flex align-center">
                                            <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.5 10.5C20.5 15.4914 16.843 19.6285 12.0625 20.3785V13.3906H14.3926L14.8359 10.5H12.0625V8.62422C12.0625 7.8332 12.45 7.0625 13.6922 7.0625H14.9531V4.60156C14.9531 4.60156 13.8086 4.40625 12.7145 4.40625C10.4305 4.40625 8.9375 5.79063 8.9375 8.29688V10.5H6.39844V13.3906H8.9375V20.3785C4.15703 19.6285 0.5 15.4914 0.5 10.5C0.5 4.97734 4.97734 0.5 10.5 0.5C16.0227 0.5 20.5 4.97734 20.5 10.5Z" fill="#1877F2" />
                                                <path d="M14.3926 13.3906L14.8359 10.5H12.0625V8.62418C12.0625 7.83336 12.4499 7.0625 13.6921 7.0625H14.9531V4.60156C14.9531 4.60156 13.8088 4.40625 12.7146 4.40625C10.4304 4.40625 8.9375 5.79063 8.9375 8.29688V10.5H6.39844V13.3906H8.9375V20.3785C9.44664 20.4584 9.96844 20.5 10.5 20.5C11.0316 20.5 11.5534 20.4584 12.0625 20.3785V13.3906H14.3926Z" fill="white" />
                                            </svg>
                                            <span className="fw-6">Facebook</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isRegister &&
                <div className="modal-backdrop fade show" onClick={handleRegister} />
            }
        </>
    )
}

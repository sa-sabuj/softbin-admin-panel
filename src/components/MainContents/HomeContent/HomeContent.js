import React from 'react';
import galaryImg from '../../../images/gallery-img.png';
import './HomeContent.css';

const HomeContent = () => {
    return (
        <div class="content-area">
        <form action className="row theme-form">
            <div className="col-xxl-9 col-xl-8 col-lg-8">
                <div className="content-inner">
                    <div className="custom-card">
                        <div className="custom-card-header">
                            <div className="heading">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1456 22.6459C19.3223 20.335 21.2 17.9807 23.6264 18.2696L23.8575 18.3129C24.2475 18.3707 24.6374 18.154 24.7674 17.7785C25.1574 16.7241 25.4029 15.5976 25.4896 14.4277C25.5185 14.0377 25.2585 13.6911 24.8974 13.5611L24.7097 13.5033C22.3987 12.7089 21.7344 9.77695 23.4675 8.0582L23.5542 7.97154C23.8431 7.69712 23.9008 7.24938 23.6986 6.91719C23.092 5.9206 22.3554 5.02512 21.5177 4.24519C21.2288 3.97077 20.81 3.95632 20.4778 4.15853L20.42 4.20186C18.3546 5.51619 15.6393 4.20186 15.3793 1.77539V1.76095C15.336 1.37098 15.0471 1.05323 14.6572 0.995459C14.1083 0.923243 13.5595 0.879913 12.9817 0.879913C12.3607 0.879913 11.7685 0.923243 11.1763 0.995459C10.8008 1.05323 10.512 1.37098 10.4686 1.76095C10.2086 4.18742 7.47887 5.50175 5.42793 4.18742C5.09574 3.98521 4.66244 4.0141 4.38802 4.27407C3.55031 5.06845 2.8137 5.97838 2.20709 6.9894C2.00488 7.3216 2.0771 7.7549 2.35152 8.02932L2.36596 8.04376C4.09915 9.74806 3.43476 12.6945 1.12384 13.4889L1.05163 13.5177C0.676104 13.6477 0.430569 13.9944 0.459455 14.3843C0.546115 15.5542 0.79165 16.6808 1.18162 17.7496C1.31161 18.1107 1.70157 18.3273 2.0771 18.284L2.20709 18.2696C4.63355 17.9807 6.51117 20.3494 5.68791 22.6459L5.61569 22.8336C5.4857 23.1947 5.61569 23.6136 5.93344 23.8302C6.87225 24.4657 7.89772 24.9857 8.99541 25.3468C9.37094 25.4623 9.78979 25.3034 9.99199 24.9712L10.122 24.769C11.4074 22.6892 14.4261 22.6892 15.7115 24.769L15.856 25.0001C16.0582 25.3323 16.4626 25.4912 16.8381 25.3756C17.9358 25.0146 18.9757 24.5091 19.9145 23.888C20.2323 23.6713 20.3622 23.2525 20.2323 22.8914L20.1456 22.6459ZM18.1578 13.229C18.1578 16.0717 15.8533 18.3762 13.0106 18.3762C10.1679 18.3762 7.8634 16.0717 7.8634 13.229C7.8634 10.3863 10.1679 8.0818 13.0106 8.0818C15.8533 8.0818 18.1578 10.3863 18.1578 13.229Z" fill="#FFCC04"/>
                                </svg>
                                <h1>Site Settings</h1>
                            </div>
                            <div className="header-rigth">
                                <p>Fields marked with *  must be filled</p>
                            </div>
                        </div>
                        <div className="custom-card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group custom-form-group">
                                        <label for="">Site Name <sup>*</sup></label>
                                        <input type="text" className="form-control" placeholder="Softbin Ltd" />
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group custom-form-group">
                                        <label for="">Tagline <sup>*</sup></label>
                                        <input type="text" className="form-control" placeholder="Think out of the circle."/>
                                      
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="form-group custom-form-group">
                                        <label for="">Telephone </label>
                                        <input type="text" className="form-control" placeholder="Enter your official Number" />
                               
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group custom-form-group">
                                        <label for="">Mobile Number </label>
                                        <input type="text" className="form-control" placeholder="Enter your official Number"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group custom-form-group">
                                        <label for="">Slider</label>
                                        <input type="text" className="form-control" placeholder="Homepage Slider" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group custom-form-group">
                                        <label for="">Email Address</label>
                                        <input type="text" className="form-control" placeholder="softbinbd@gmail.com"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group custom-form-group">
                                        <label for="">Address</label>
                                        <input type="text" className="form-control" placeholder="Enter your Address"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group custom-form-group">
                                        <label for="">Site Description</label>
                                        <textarea name="" id="" rows="5" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group custom-form-group">
                                        <label for="">Copyright</label>
                                        <input type="text" className="form-control" placeholder="Softbin © 2021 All Right Reserved"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group custom-form-group">
                                        <label for="">Terms</label>
                                        <input type="text" className="form-control" placeholder="www.softbin.com/terms.html" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn theme-btn">
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42754 19.0284C14.5865 19.0284 18.7686 14.8462 18.7686 9.68724C18.7686 4.52829 14.5865 0.34613 9.42754 0.34613C4.26858 0.34613 0.0864258 4.52829 0.0864258 9.68724C0.0864258 14.8462 4.26858 19.0284 9.42754 19.0284ZM8.64483 12.812L13.8724 7.58449L12.74 6.45217L8.07868 11.1135L5.99029 9.02507L4.85796 10.1574L7.51251 12.812L8.07867 13.3782L8.64483 12.812Z" fill="white"/>
                        </svg>                          
                        Update Settings
                    </button>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4" style={{paddingRight: 0 + 'em'}} >
                <div className="sidebar-widgets">
                    <div className="sidebar-widgets-inner">
                        <div className="image-uploader">
                            <label for="">Favicon
                                <p>Size should be <span>512 X 512px</span></p>
                            </label>
                            <div className="preview">
                                <img src={galaryImg} alt="" />
                            </div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="image-uploader">
                            <label for="">Logo
                                <p>Size should be <span>512 X 512px</span></p>
                            </label>
                            <div className="preview">
                                <img src={galaryImg} alt="" />
                            </div>
                          <input type="file" className="form-control"/>
                        </div>
                        <div className="image-uploader">
                            <label for="">Footer Logo
                                <p>Size should be <span>1000 X 512px</span></p>
                            </label>
                            <div className="preview">
                            <img src={galaryImg} alt="" />
                            </div>
                            <input type="file" className="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    );
};

export default HomeContent;
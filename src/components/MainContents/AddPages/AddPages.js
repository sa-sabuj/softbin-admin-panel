import React from 'react';
import './AddPages.css';
import galleryImg from '../../../images/gallery-img.png'


// IMPORTENT NOTE
// This is add-pages page from moin vi html css design. I Use it in pages link

const AddPages = () => {
    return (
        <div>
             <div class="content-area">
        <form action="" class="row theme-form">
            <div class="col-xxl-9 col-xl-8 col-lg-8">
                <div class="content-inner">
                    <div class="custom-card">
                        <div class="custom-card-header">
                            <div class="heading">
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 0C0.897 0 0 0.897 0 2V18C0 19.103 0.897 20 2 20H8.03906C8.12806 19.357 8.41191 18.76 8.87891 18.293L9.17188 18H2V2H9V7H14V10.3496C14.627 10.1266 15.298 9.99805 16 9.99805V6L10 0H2ZM16 12C13.791 12 12 13.791 12 16C12 16.586 12.1324 17.1396 12.3594 17.6406L10.293 19.707C9.90197 20.098 9.90197 20.7311 10.293 21.1211L10.8789 21.707C11.2689 22.098 11.902 22.098 12.293 21.707L14.3594 19.6406C14.8604 19.8676 15.414 20 16 20C18.209 20 20 18.209 20 16C20 15.414 19.8676 14.8604 19.6406 14.3594L17 17L15 15L17.6406 12.3594C17.1396 12.1324 16.586 12 16 12Z" fill="#FEC601"/>
                                </svg>                                    
                                <h1>Add Page</h1>
                            </div>
                            <div class="header-rigth">
                                <p>Fields marked with * must be filled</p>
                            </div>
                        </div>
                        <div class="custom-card-body">
                            <div class="form-group custom-form-group">
                                <label for="">Enter Page Title</label>
                                <input type="text" class="form-control" placeholder="About us" />
                            </div>
                            <div class="form-group custom-form-group">
                                <div id="editor"></div>
                            </div>
                            <div class="form-group custom-form-group">
                                <label for="">Enter Excerpt</label>
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn theme-btn">
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42754 19.0284C14.5865 19.0284 18.7686 14.8462 18.7686 9.68724C18.7686 4.52829 14.5865 0.34613 9.42754 0.34613C4.26858 0.34613 0.0864258 4.52829 0.0864258 9.68724C0.0864258 14.8462 4.26858 19.0284 9.42754 19.0284ZM8.64483 12.812L13.8724 7.58449L12.74 6.45217L8.07868 11.1135L5.99029 9.02507L4.85796 10.1574L7.51251 12.812L8.07867 13.3782L8.64483 12.812Z" fill="white"/>
                        </svg>                          
                        Add Page
                    </button>
                </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-lg-4" style={{paddingRight: 0 + 'em'}}>
                <div class="sidebar-widgets">
                    <div class="custom-card" style={{paddingRight: 0 + 'em'}}>
                        <div class="custom-card-body">
                            <div class="form-group custom-form-group">
                                <label for="">Page Url</label>
                                <input type="text" class="form-control" placeholder="Post Unique URL"/>
                            </div>
                            <div class="form-group custom-form-group">
                                <label for="">Template</label>
                                <select name="" id="" class="form-control">
                                    <option value="">Blog</option>
                                    <option value="">Post</option>
                                </select>
                            </div>
                            <div class="form-group custom-form-group">
                                <label for="">Page Banner</label>
                                <select name="" id="" class="form-control">
                                    <option value="">Choose page banner</option>
                                    <option value="">Post</option>
                                </select>
                            </div>
                            <div class="form-group custom-form-group">
                                <label for="">Select Status</label>
                                <select name="" id="" class="form-control">
                                    <option value="">Active</option>
                                    <option value="">Inactive</option>
                                </select>
                            </div>
                            <div class="image-uploader">
                                <label for="">Favicon
                                    <p>Size should be <span>512 X 512px</span></p>
                                </label>
                                <div class="preview">
                                    <img src={galleryImg} alt="" />
                                </div>
                                <input type="file" class="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
        </div>
    );
};

export default AddPages;
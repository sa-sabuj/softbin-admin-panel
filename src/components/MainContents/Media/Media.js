import React from 'react';
import './Media.css';
import galleryImg from '../../../images/gallery-img.png';



// IMPORTENT NOTE
// This is media page from moin vi html css design. I Use it in media link

const Media = () => {
    return (
        <div>
            <div class="content-area">
        <div class="content-inner">
            <div class="custom-card">
                <div class="custom-card-header">
                    <div class="heading">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.489 0 0 4.489 0 10C0 15.511 4.489 20 10 20C13.2714 20 16.1741 18.4111 18 15.9727V20H20V10C20 4.489 15.511 0 10 0ZM10 2C14.4301 2 18 5.56988 18 10C18 14.4301 14.4301 18 10 18C5.56988 18 2 14.4301 2 10C2 5.56988 5.56988 2 10 2ZM10 3C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5C8 5.53043 8.21071 6.03914 8.58579 6.41421C8.96086 6.78929 9.46957 7 10 7C10.5304 7 11.0391 6.78929 11.4142 6.41421C11.7893 6.03914 12 5.53043 12 5C12 4.46957 11.7893 3.96086 11.4142 3.58579C11.0391 3.21071 10.5304 3 10 3ZM5 8C4.46957 8 3.96086 8.21071 3.58579 8.58579C3.21071 8.96086 3 9.46957 3 10C3 10.5304 3.21071 11.0391 3.58579 11.4142C3.96086 11.7893 4.46957 12 5 12C5.53043 12 6.03914 11.7893 6.41421 11.4142C6.78929 11.0391 7 10.5304 7 10C7 9.46957 6.78929 8.96086 6.41421 8.58579C6.03914 8.21071 5.53043 8 5 8ZM15 8C14.4696 8 13.9609 8.21071 13.5858 8.58579C13.2107 8.96086 13 9.46957 13 10C13 10.5304 13.2107 11.0391 13.5858 11.4142C13.9609 11.7893 14.4696 12 15 12C15.5304 12 16.0391 11.7893 16.4142 11.4142C16.7893 11.0391 17 10.5304 17 10C17 9.46957 16.7893 8.96086 16.4142 8.58579C16.0391 8.21071 15.5304 8 15 8ZM10 9C9.73478 9 9.48043 9.10536 9.29289 9.29289C9.10536 9.48043 9 9.73478 9 10C9 10.2652 9.10536 10.5196 9.29289 10.7071C9.48043 10.8946 9.73478 11 10 11C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10C11 9.73478 10.8946 9.48043 10.7071 9.29289C10.5196 9.10536 10.2652 9 10 9ZM10 13C9.46957 13 8.96086 13.2107 8.58579 13.5858C8.21071 13.9609 8 14.4696 8 15C8 15.5304 8.21071 16.0391 8.58579 16.4142C8.96086 16.7893 9.46957 17 10 17C10.5304 17 11.0391 16.7893 11.4142 16.4142C11.7893 16.0391 12 15.5304 12 15C12 14.4696 11.7893 13.9609 11.4142 13.5858C11.0391 13.2107 10.5304 13 10 13Z" fill="#B5B5B8"/>
                        </svg>        
                        <h1>Media Library</h1>
                    </div>
                    <div class="header-rigth">
                        <form action="" class="search-bar">
                            <div class="form-group">
                                <input type="text" placeholder="Search Items"/>
                             
                                <button class="btn">
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9.52167" cy="9.65552" r="5.48622" transform="rotate(-45 9.52167 9.65552)" stroke="#060610" stroke-width="1.33444"/>
                                        <path d="M13.541 13.5239L16.606 16.4231" stroke="#060610" stroke-width="1.33444" stroke-linecap="round"/>
                                    </svg>                                        
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="custom-card-body">
                    <div class="row">
                        <div class="col-lg-9">
                            <ul class="medias">
                                <li><img src={galleryImg} alt="" /></li>
                                <li><img src={galleryImg} alt="" /></li>
                                <li><img src={galleryImg} alt="" /></li>
                                <li><img src={galleryImg} alt="" /></li>
                                <li><img src={galleryImg} alt="" /></li>
                                <li><img src={galleryImg} alt="" /></li>
                                <li><img src={galleryImg} alt="" /></li>
                                <li><img src={galleryImg} alt="" /></li>
                                <li><img src={galleryImg} alt="" /></li>
                                <li><img src={galleryImg} alt="" /></li>
                                <li><img src={galleryImg} alt="" /></li>
                                <li><img src={galleryImg} alt="" /></li>
                                <li><img src={galleryImg} alt="" /></li>
                                
                            </ul>
                        </div>
                        <div class="col-lg-3">
                            <div class="sidebar-widgets-inner">
                                <div class="image-uploader">
                                    <label for="">Upload Photo
                                        <p>Choose or drag here</p>
                                    </label>
                                    {/* <!-- <div class="preview">
                                        <img src="img/gallery-img.png" alt="">
                                    </div> --> */}
                                    <input type="file" class="form-control" />
                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Media;
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userImg from '../../images/users.jpg';
import './Header.css';


const Header = () => {
    return (
        <div>
            <header>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-9 d-flex align-items-center justify-content-between">
                            <i class="fa fa-bars" id="hamburger"></i>
                            <a class="logo">
                                <svg width="159" height="43" viewBox="0 0 159 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M46.6059 9.58761L43.1008 13.677C43.8706 14.8949 44.3155 16.3418 44.3155 17.8904C44.3155 22.2311 40.823 25.7481 36.5197 25.7481C32.2164 25.7481 28.7207 22.2311 28.7207 17.8904C28.7207 14.4529 30.9102 11.5306 33.9642 10.4653L34.7466 4.88129C28.3895 5.75259 23.493 11.2475 23.493 17.8936C23.493 25.1439 29.3265 31.0236 36.5197 31.0236C43.7129 31.0236 49.5463 25.1439 49.5463 17.8936C49.5432 14.7423 48.4421 11.8517 46.6059 9.58761Z" fill="#2E4452" />
                                    <path d="M42.1922 12.6562L46.4766 9.40628C44.4007 7.86719 43.1261 5.32323 43.3154 2.54078C43.3753 1.64085 43.5835 0.785447 43.9148 0L38.3338 0.407033C38.2139 0.985783 38.135 1.57725 38.094 2.18144C37.8195 6.27403 39.438 10.055 42.1922 12.6562Z" fill="#FFCC04" />
                                    <path d="M130.852 1.3197L125.539 4.54099L129.255 6.75741L130.852 7.69867V6.76377L128.659 5.48225L130.852 4.20073V1.3197Z" fill="#FFCC04" />
                                    <path d="M0.5 26.7974L3.68646 22.9496C5.89175 24.7845 8.20115 25.9483 11.0027 25.9483C13.208 25.9483 14.5394 25.0675 14.5394 23.6206V23.5507C14.5394 22.1737 13.7002 21.4678 9.60193 20.4089C4.66449 19.1401 1.48118 17.7663 1.48118 12.8597V12.7897C1.48118 8.30917 5.05254 5.34546 10.0594 5.34546C13.6308 5.34546 16.6752 6.47434 19.1613 8.48725L16.3598 12.5798C14.1892 11.063 12.0533 10.144 9.98683 10.144C7.92036 10.144 6.83507 11.098 6.83507 12.2968V12.3668C6.83507 13.9886 7.88566 14.5196 12.1227 15.6135C17.0949 16.9205 19.8933 18.7171 19.8933 23.0228V23.0927C19.8933 27.9962 16.1831 30.7501 10.8954 30.7501C7.18526 30.7501 3.44038 29.4431 0.5 26.7974Z" fill="#2E4452" />
                                    <path d="M54.3448 5.69531H73.0062V10.6369H59.7366V15.8934H71.4287V20.835H59.7366V30.3971H54.3448V5.69531Z" fill="#2E4452" />
                                    <path d="M83.0168 10.7069H75.5617V5.69531H95.8667V10.7069H88.4085V30.3971H83.0168V10.7069Z" fill="#2E4452" />
                                    <path d="M99.9966 5.69531H111.373C114.175 5.69531 116.38 6.47122 117.781 7.88312C118.901 9.012 119.462 10.3889 119.462 12.0806V12.1506C119.462 14.9394 117.992 16.4912 116.241 17.4802C119.078 18.5741 120.828 20.2308 120.828 23.5507V23.6207C120.828 28.1362 117.188 30.3971 111.657 30.3971H99.9997V5.69531H99.9966ZM114.105 12.9997C114.105 11.3747 112.847 10.4589 110.569 10.4589H105.246V15.6803H110.219C112.6 15.6803 114.105 14.9044 114.105 13.0696V12.9997ZM111.477 20.199H105.246V25.6336H111.654C114.036 25.6336 115.471 24.7877 115.471 22.9529V22.8829C115.468 21.223 114.244 20.199 111.477 20.199Z" fill="#2E4452" />
                                    <path d="M125.517 6.11188V30.3971H130.905V9.32044L125.517 6.11188Z" fill="#2E4452" />
                                    <path d="M137.035 5.69531H142.007L153.491 20.905V5.69531H158.814V30.3971H154.226L142.358 14.6946V30.3971H137.035V5.69531Z" fill="#2E4452" />
                                    <path d="M3.66761 41.9149C3.52249 41.9499 3.36159 41.9658 3.18491 41.9658C2.96407 41.9658 2.75584 41.9372 2.56339 41.8767C2.37094 41.8163 2.20373 41.7209 2.05861 41.5905C1.91348 41.4602 1.80306 41.298 1.72103 41.0977C1.639 40.9005 1.59799 40.6684 1.59799 40.3981V36.6648H0.77771V36.1624H1.59799V34.3434H2.14063V36.1656H4.12507V36.668H2.14379V40.3376C2.14379 40.7479 2.2479 41.0341 2.45928 41.1962C2.67066 41.3584 2.94198 41.4411 3.27325 41.4411C3.41206 41.4411 3.54773 41.4284 3.67392 41.3997C3.80012 41.3711 3.94209 41.3234 4.10614 41.2535V41.7686C3.95786 41.8322 3.81274 41.8831 3.66761 41.9149Z" fill="#2E4452" />
                                    <path d="M11.5233 41.864V38.4774C11.5233 37.8891 11.3687 37.4185 11.0564 37.0623C10.7472 36.7093 10.3024 36.5313 9.72503 36.5313C9.44425 36.5313 9.18554 36.5821 8.94893 36.6807C8.71231 36.7825 8.50408 36.9224 8.32741 37.1005C8.15073 37.2785 8.01192 37.4948 7.91096 37.7428C7.81 37.9908 7.76268 38.2675 7.76268 38.5632V41.8608H7.22003V33.7075H7.76268V37.2277C7.95513 36.8938 8.21383 36.6108 8.53879 36.3786C8.86374 36.1465 9.2865 36.032 9.80391 36.032C10.1573 36.032 10.4759 36.0892 10.7567 36.2037C11.0375 36.3182 11.2773 36.4804 11.4729 36.6902C11.6685 36.9001 11.8167 37.1482 11.9177 37.4344C12.0187 37.7206 12.066 38.0354 12.066 38.3788V41.864H11.5233Z" fill="#2E4452" />
                                    <path d="M15.5143 34.6805V33.9333H16.1894V34.6805H15.5143ZM15.5805 41.864V36.1656H16.1232V41.864H15.5805Z" fill="#2E4452" />
                                    <path d="M24.0514 41.864V38.4774C24.0514 37.8891 23.8968 37.4185 23.5845 37.0623C23.2753 36.7093 22.8305 36.5313 22.2531 36.5313C21.9723 36.5313 21.7136 36.5821 21.477 36.6807C21.2404 36.7825 21.0322 36.9224 20.8555 37.1005C20.6788 37.2786 20.54 37.4948 20.439 37.7428C20.3381 37.9909 20.2908 38.2675 20.2908 38.5633V41.8609H19.7481V36.1624H20.2908V37.2245C20.4832 36.8906 20.7419 36.6076 21.0669 36.3755C21.3918 36.1433 21.8146 36.0288 22.332 36.0288C22.6853 36.0288 23.004 36.0861 23.2848 36.2006C23.5656 36.315 23.8053 36.4772 24.0009 36.6871C24.1965 36.897 24.3448 37.145 24.4458 37.4312C24.5467 37.7174 24.5941 38.0322 24.5941 38.3756V41.8609H24.0514V41.864Z" fill="#2E4452" />
                                    <path d="M32.1913 41.864L29.9513 39.0816L28.5757 40.4776V41.864H28.0331V33.7075H28.5757V39.8193L32.0808 36.1656H32.8002L30.3267 38.6904L32.8759 41.864H32.1913Z" fill="#2E4452" />
                                    <path d="M45.7447 40.1564C45.5995 40.5125 45.3976 40.8305 45.1358 41.1072C44.8739 41.3838 44.5647 41.6001 44.2114 41.7622C43.858 41.9212 43.47 42.0039 43.0472 42.0039C42.6245 42.0039 42.2396 41.9244 41.8894 41.7622C41.5392 41.6032 41.2331 41.387 40.9744 41.1199C40.7157 40.8528 40.5138 40.538 40.3687 40.1818C40.2236 39.8256 40.151 39.4441 40.151 39.0434V39.0211C40.151 38.6204 40.2236 38.2389 40.3687 37.8827C40.5138 37.5265 40.7157 37.2085 40.9776 36.9319C41.2394 36.6552 41.5486 36.439 41.902 36.2768C42.2553 36.1178 42.6434 36.0383 43.0661 36.0383C43.4889 36.0383 43.8738 36.1178 44.224 36.2768C44.5742 36.4358 44.8802 36.6521 45.1389 36.9192C45.3976 37.1863 45.5995 37.5011 45.7447 37.8573C45.8898 38.2134 45.9624 38.595 45.9624 38.9957V39.0179C45.9592 39.4186 45.8898 39.797 45.7447 40.1564ZM45.385 39.0148C45.385 38.6745 45.3251 38.3533 45.2083 38.0512C45.0884 37.7523 44.9244 37.4884 44.713 37.2658C44.5016 37.0432 44.2524 36.8683 43.9653 36.7443C43.6782 36.6171 43.3722 36.5567 43.0472 36.5567C42.7128 36.5567 42.4036 36.6203 42.1165 36.7506C41.8294 36.881 41.5865 37.0559 41.3814 37.2721C41.1763 37.4884 41.0186 37.7491 40.9019 38.0449C40.7883 38.3406 40.7284 38.6554 40.7284 38.9893V39.0116C40.7284 39.3518 40.7883 39.673 40.905 39.9751C41.0249 40.274 41.189 40.538 41.4003 40.7605C41.6117 40.9831 41.861 41.158 42.1481 41.2821C42.4352 41.4093 42.7412 41.4697 43.0661 41.4697C43.4006 41.4697 43.7097 41.4061 43.9968 41.2757C44.2839 41.1453 44.5269 40.9704 44.7319 40.7542C44.937 40.5348 45.0948 40.2772 45.2115 39.9815C45.3251 39.6857 45.385 39.3709 45.385 39.037V39.0148Z" fill="#2E4452" />
                                    <path d="M53.3103 41.864V40.8019C53.1178 41.1358 52.8591 41.422 52.5341 41.651C52.2092 41.8831 51.7864 41.9976 51.269 41.9976C50.9157 41.9976 50.597 41.9404 50.3162 41.8259C50.0355 41.7114 49.7957 41.5492 49.6001 41.3394C49.4045 41.1295 49.2562 40.8814 49.1552 40.5952C49.0543 40.3091 49.007 39.9942 49.007 39.6508V36.1656H49.5496V39.5522C49.5496 40.1405 49.7042 40.6111 50.0165 40.9673C50.3257 41.3203 50.7706 41.4984 51.3479 41.4984C51.6224 41.4984 51.8779 41.4475 52.1177 41.3489C52.3575 41.2471 52.5657 41.1072 52.7455 40.9291C52.9222 40.7511 53.061 40.5348 53.162 40.2868C53.2629 40.0356 53.3103 39.7621 53.3103 39.4664V36.1688H53.8529V41.8672H53.3103V41.864Z" fill="#2E4452" />
                                    <path d="M59.7715 41.9149C59.6264 41.9499 59.4655 41.9658 59.2888 41.9658C59.068 41.9658 58.8597 41.9372 58.6673 41.8767C58.4748 41.8163 58.3076 41.7209 58.1625 41.5905C58.0174 41.4602 57.9069 41.298 57.8249 41.0977C57.7429 40.9005 57.7019 40.6684 57.7019 40.3981V36.6648H56.8816V36.1624H57.7019V34.3434H58.2445V36.1656H60.229V36.668H58.2445V40.3376C58.2445 40.7479 58.3486 41.0341 58.56 41.1962C58.7714 41.3584 59.0427 41.4411 59.374 41.4411C59.5128 41.4411 59.6485 41.4284 59.7747 41.3997C59.9009 41.3711 60.0428 41.3234 60.2069 41.2535V41.7686C60.0586 41.8322 59.9135 41.8831 59.7715 41.9149Z" fill="#2E4452" />
                                    <path d="M66.9551 41.0023C66.8541 41.2058 66.7153 41.3807 66.5386 41.5269C66.362 41.6732 66.1537 41.7845 65.9171 41.8608C65.6805 41.9403 65.425 41.9785 65.1536 41.9785C64.7403 41.9785 64.3271 41.899 63.9106 41.7432C63.4973 41.5874 63.1376 41.387 62.8348 41.139L63.1566 40.7033C63.4658 40.9418 63.7907 41.1263 64.1314 41.2566C64.4722 41.387 64.8224 41.4506 65.1852 41.4506C65.5701 41.4506 65.8919 41.3552 66.1569 41.1612C66.4188 40.9673 66.5513 40.7033 66.5513 40.3694V40.3472C66.5513 40.185 66.5103 40.0419 66.4282 39.9242C66.3462 39.8066 66.2358 39.7017 66.097 39.6126C65.955 39.5236 65.7972 39.4504 65.6206 39.39C65.4439 39.3296 65.2546 39.2724 65.0558 39.2119C64.8255 39.1452 64.5952 39.0752 64.3618 38.9989C64.1283 38.9257 63.9201 38.8303 63.7339 38.7159C63.5478 38.6014 63.3995 38.4583 63.2859 38.2866C63.1724 38.1149 63.1156 37.905 63.1156 37.6506V37.6283C63.1156 37.3994 63.1629 37.1895 63.2544 36.9987C63.3459 36.8079 63.4752 36.6425 63.6361 36.5026C63.8002 36.3627 63.9958 36.2514 64.2229 36.1751C64.4532 36.0956 64.7025 36.0574 64.977 36.0574C65.3177 36.0574 65.6647 36.1147 66.0244 36.2292C66.3841 36.3436 66.7027 36.4994 66.9835 36.6934L66.6964 37.1513C66.4377 36.9796 66.1601 36.8429 65.8603 36.7379C65.5606 36.633 65.2609 36.5821 64.958 36.5821C64.5668 36.5821 64.2545 36.6775 64.021 36.8651C63.7876 37.0559 63.6708 37.2913 63.6708 37.5743V37.5965C63.6708 37.7523 63.715 37.8891 63.8033 38.0036C63.8917 38.118 64.0084 38.2166 64.1535 38.2993C64.2987 38.382 64.4659 38.4519 64.6583 38.5155C64.8508 38.5791 65.0464 38.6395 65.2451 38.7C65.4754 38.7667 65.6994 38.8399 65.9203 38.9162C66.1411 38.9957 66.343 39.0943 66.5197 39.2183C66.6964 39.3423 66.8384 39.4886 66.9456 39.6571C67.0529 39.8288 67.1065 40.0387 67.1065 40.2931V40.3154C67.1034 40.5698 67.0529 40.7956 66.9551 41.0023Z" fill="#2E4452" />
                                    <path d="M70.331 34.6805V33.9333H71.0061V34.6805H70.331ZM70.3972 41.864V36.1656H70.9399V41.864H70.3972Z" fill="#2E4452" />
                                    <path d="M79.2783 41.864V40.5889C79.1521 40.7765 79.0133 40.9546 78.8619 41.1263C78.7104 41.298 78.5401 41.4474 78.3508 41.5746C78.1615 41.7018 77.9501 41.8036 77.7198 41.8831C77.4863 41.9626 77.2308 42.0008 76.95 42.0008C76.6093 42.0008 76.2748 41.934 75.9467 41.8004C75.6186 41.6669 75.3252 41.4729 75.0665 41.2185C74.8078 40.9641 74.5996 40.6525 74.4387 40.2868C74.2809 39.9179 74.1989 39.5013 74.1989 39.0402V39.018C74.1989 38.5569 74.2778 38.1403 74.4387 37.7714C74.5964 37.4026 74.8078 37.0909 75.0665 36.8333C75.3252 36.5758 75.6186 36.3786 75.9467 36.2419C76.2748 36.1051 76.6093 36.0352 76.95 36.0352C77.2308 36.0352 77.4895 36.0733 77.7261 36.1465C77.9627 36.2196 78.1741 36.3214 78.3634 36.4486C78.5527 36.5758 78.7231 36.722 78.8745 36.8842C79.0259 37.0496 79.1616 37.2181 79.2783 37.3994V33.7075H79.821V41.8672H79.2783V41.864ZM79.313 39.0052C79.313 38.6396 79.2468 38.3057 79.1174 38.0036C78.9881 37.7015 78.8146 37.4439 78.6 37.234C78.3855 37.0241 78.1394 36.8556 77.8618 36.7379C77.5841 36.6203 77.297 36.5599 77.0005 36.5599C76.6881 36.5599 76.3979 36.6171 76.1266 36.7284C75.8552 36.8397 75.6218 37.0019 75.4199 37.2086C75.2211 37.4185 75.0634 37.6729 74.9466 37.9749C74.833 38.277 74.7731 38.6173 74.7731 38.9989V39.0211C74.7731 39.3932 74.833 39.7335 74.9498 40.0387C75.0697 40.344 75.2306 40.6016 75.4325 40.8146C75.6376 41.0277 75.8742 41.1899 76.1423 41.3075C76.4137 41.422 76.6976 41.4792 76.9942 41.4792C77.2907 41.4792 77.5778 41.4188 77.8555 41.3012C78.1331 41.1835 78.3792 41.015 78.5937 40.7987C78.8082 40.5825 78.9818 40.3249 79.1111 40.0292C79.2405 39.7303 79.3067 39.3996 79.3067 39.0339V39.0052H79.313Z" fill="#2E4452" />
                                    <path d="M83.7929 40.185C83.9254 40.4585 84.0926 40.6938 84.2945 40.8846C84.4933 41.0786 84.7236 41.2249 84.9791 41.3234C85.2347 41.4252 85.5029 41.4729 85.7836 41.4729C86.2285 41.4729 86.6039 41.387 86.9131 41.2153C87.2223 41.0436 87.4936 40.8306 87.7302 40.5793L88.1057 40.9132C87.8186 41.2249 87.4904 41.4856 87.1213 41.6891C86.7553 41.8927 86.301 41.9976 85.7616 41.9976C85.3924 41.9976 85.0359 41.9276 84.7015 41.7845C84.3639 41.6446 84.0674 41.4411 83.8118 41.1804C83.5563 40.9196 83.3543 40.608 83.2061 40.2423C83.0578 39.8766 82.9852 39.4727 82.9852 39.0243V39.0021C82.9852 38.5919 83.0546 38.2071 83.1903 37.8446C83.326 37.4821 83.5153 37.1673 83.755 36.9001C83.9948 36.633 84.2787 36.42 84.6037 36.2642C84.9286 36.1083 85.2852 36.0288 85.6669 36.0288C86.0676 36.0288 86.4241 36.1052 86.7427 36.2578C87.0614 36.4104 87.3327 36.6203 87.5567 36.8906C87.7807 37.1577 87.9574 37.4725 88.0773 37.835C88.2003 38.1976 88.2602 38.5887 88.2602 39.0148V39.0371C88.2602 39.0752 88.2602 39.107 88.2602 39.1388C88.2602 39.1611 88.2571 39.1961 88.2476 39.2406H83.5563C83.5815 39.5936 83.6572 39.9116 83.7929 40.185ZM87.6829 38.7477C87.6608 38.4583 87.604 38.1785 87.5094 37.9145C87.4179 37.6506 87.2854 37.4153 87.1213 37.2118C86.9541 37.0083 86.749 36.8429 86.503 36.7189C86.2569 36.5949 85.9729 36.5344 85.648 36.5344C85.3672 36.5344 85.1022 36.5917 84.8592 36.703C84.6163 36.8143 84.4018 36.9701 84.2188 37.1673C84.0358 37.3644 83.8875 37.5997 83.7676 37.87C83.6478 38.1435 83.5784 38.4361 83.5563 38.7477H87.6829Z" fill="#2E4452" />
                                    <path d="M98.5107 41.9149C98.3656 41.9499 98.2047 41.9658 98.028 41.9658C97.8071 41.9658 97.5989 41.9372 97.4065 41.8767C97.214 41.8163 97.0468 41.7209 96.9017 41.5905C96.7566 41.4602 96.6461 41.298 96.5641 41.0977C96.4821 40.9005 96.4411 40.6684 96.4411 40.3981V36.6648H95.6208V36.1624H96.4411V34.3434H96.9837V36.1656H98.9681V36.668H96.9837V40.3376C96.9837 40.7479 97.0878 41.0341 97.2992 41.1962C97.5106 41.3584 97.7819 41.4411 98.1132 41.4411C98.252 41.4411 98.3876 41.4284 98.5138 41.3997C98.64 41.3711 98.782 41.3234 98.9461 41.2535V41.7686C98.8009 41.8322 98.6527 41.8831 98.5107 41.9149Z" fill="#2E4452" />
                                    <path d="M106.366 41.864V38.4774C106.366 37.8891 106.212 37.4185 105.899 37.0623C105.59 36.7093 105.145 36.5313 104.568 36.5313C104.287 36.5313 104.029 36.5821 103.792 36.6807C103.555 36.7825 103.347 36.9224 103.17 37.1005C102.994 37.2785 102.855 37.4948 102.754 37.7428C102.653 37.9908 102.606 38.2675 102.606 38.5632V41.8608H102.063V33.7075H102.606V37.2277C102.798 36.8938 103.057 36.6108 103.382 36.3786C103.707 36.1465 104.13 36.032 104.647 36.032C105 36.032 105.319 36.0892 105.6 36.2037C105.881 36.3182 106.12 36.4804 106.316 36.6902C106.512 36.9001 106.66 37.1482 106.761 37.4344C106.862 37.7206 106.909 38.0354 106.909 38.3788V41.864H106.366Z" fill="#2E4452" />
                                    <path d="M110.767 40.185C110.9 40.4585 111.067 40.6938 111.269 40.8846C111.468 41.0786 111.698 41.2249 111.954 41.3234C112.209 41.4252 112.477 41.4729 112.758 41.4729C113.203 41.4729 113.579 41.387 113.888 41.2153C114.197 41.0436 114.468 40.8306 114.705 40.5793L115.08 40.9132C114.793 41.2249 114.465 41.4856 114.096 41.6891C113.73 41.8927 113.276 41.9976 112.736 41.9976C112.367 41.9976 112.011 41.9276 111.676 41.7845C111.339 41.6446 111.042 41.4411 110.786 41.1804C110.531 40.9196 110.329 40.608 110.181 40.2423C110.032 39.8766 109.96 39.4727 109.96 39.0243V39.0021C109.96 38.5919 110.029 38.2071 110.165 37.8446C110.301 37.4821 110.49 37.1673 110.73 36.9001C110.969 36.633 111.253 36.42 111.578 36.2642C111.903 36.1083 112.26 36.0288 112.642 36.0288C113.042 36.0288 113.399 36.1052 113.717 36.2578C114.036 36.4104 114.307 36.6203 114.531 36.8906C114.755 37.1577 114.932 37.4725 115.052 37.835C115.175 38.1976 115.235 38.5887 115.235 39.0148V39.0371C115.235 39.0752 115.235 39.107 115.235 39.1388C115.235 39.1611 115.232 39.1961 115.222 39.2406H110.531C110.556 39.5936 110.635 39.9116 110.767 40.185ZM114.658 38.7477C114.635 38.4583 114.579 38.1785 114.484 37.9145C114.392 37.6506 114.26 37.4153 114.096 37.2118C113.929 37.0083 113.724 36.8429 113.478 36.7189C113.231 36.5949 112.948 36.5344 112.623 36.5344C112.342 36.5344 112.077 36.5917 111.834 36.703C111.591 36.8143 111.376 36.9701 111.193 37.1673C111.01 37.3644 110.862 37.5997 110.742 37.87C110.622 38.1435 110.553 38.4361 110.531 38.7477H114.658Z" fill="#2E4452" />
                                    <path d="M126.927 41.6764C126.561 41.8926 126.119 42.0008 125.602 42.0008C125.195 42.0008 124.816 41.9213 124.466 41.7591C124.116 41.6001 123.81 41.3839 123.551 41.1167C123.292 40.8496 123.091 40.5348 122.945 40.1787C122.8 39.8225 122.728 39.4409 122.728 39.0402V39.018C122.728 38.6173 122.8 38.2357 122.945 37.8796C123.091 37.5234 123.292 37.2054 123.551 36.9288C123.81 36.6521 124.113 36.4359 124.466 36.2737C124.816 36.1147 125.195 36.0352 125.602 36.0352C125.867 36.0352 126.11 36.0638 126.327 36.121C126.545 36.1783 126.747 36.2546 126.933 36.3564C127.119 36.4549 127.287 36.5694 127.438 36.6966C127.589 36.8238 127.731 36.9574 127.864 37.1005L127.476 37.5043C127.233 37.2499 126.962 37.0305 126.665 36.8461C126.368 36.6585 126.012 36.5662 125.589 36.5662C125.264 36.5662 124.961 36.6298 124.687 36.7539C124.409 36.8811 124.17 37.0528 123.968 37.2722C123.763 37.4916 123.605 37.7492 123.485 38.0449C123.365 38.3406 123.308 38.6618 123.308 39.0021V39.0243C123.308 39.3646 123.368 39.6858 123.491 39.9879C123.614 40.29 123.778 40.5507 123.99 40.7733C124.201 40.9959 124.447 41.1708 124.728 41.2948C125.009 41.422 125.312 41.4824 125.637 41.4824C126.037 41.4824 126.394 41.3902 126.706 41.209C127.022 41.0277 127.296 40.8019 127.533 40.5316L127.908 40.8655C127.621 41.1867 127.293 41.4602 126.927 41.6764Z" fill="#2E4452" />
                                    <path d="M130.946 34.6805V33.9333H131.622V34.6805H130.946ZM131.013 41.864V36.1656H131.555V41.864H131.013Z" fill="#2E4452" />
                                    <path d="M138.174 36.6807C137.849 36.6807 137.537 36.7411 137.243 36.8652C136.947 36.9892 136.688 37.1704 136.461 37.4121C136.237 37.6538 136.057 37.9527 135.925 38.3057C135.792 38.6587 135.726 39.0689 135.726 39.53V41.864H135.183V36.1656H135.726V37.7873C135.836 37.533 135.978 37.2976 136.149 37.0846C136.319 36.8683 136.512 36.6839 136.726 36.5313C136.941 36.3786 137.174 36.2642 137.43 36.1847C137.685 36.1052 137.953 36.0702 138.234 36.0797V36.6839H138.174V36.6807Z" fill="#2E4452" />
                                    <path d="M144.635 41.6764C144.27 41.8926 143.828 42.0008 143.31 42.0008C142.903 42.0008 142.525 41.9213 142.175 41.7591C141.824 41.6001 141.518 41.3839 141.26 41.1167C141.001 40.8496 140.799 40.5348 140.654 40.1787C140.509 39.8225 140.436 39.4409 140.436 39.0402V39.018C140.436 38.6173 140.509 38.2357 140.654 37.8796C140.799 37.5234 141.001 37.2054 141.26 36.9288C141.518 36.6521 141.821 36.4359 142.175 36.2737C142.525 36.1147 142.903 36.0352 143.31 36.0352C143.575 36.0352 143.818 36.0638 144.036 36.121C144.254 36.1783 144.456 36.2546 144.642 36.3564C144.828 36.4549 144.995 36.5694 145.147 36.6966C145.298 36.8238 145.44 36.9574 145.572 37.1005L145.184 37.5043C144.942 37.2499 144.67 37.0305 144.374 36.8461C144.077 36.6585 143.721 36.5662 143.298 36.5662C142.973 36.5662 142.67 36.6298 142.395 36.7539C142.118 36.8811 141.878 37.0528 141.676 37.2722C141.471 37.4916 141.313 37.7492 141.193 38.0449C141.074 38.3406 141.017 38.6618 141.017 39.0021V39.0243C141.017 39.3646 141.077 39.6858 141.2 39.9879C141.323 40.29 141.487 40.5507 141.698 40.7733C141.91 40.9959 142.156 41.1708 142.437 41.2948C142.717 41.422 143.02 41.4824 143.345 41.4824C143.746 41.4824 144.102 41.3902 144.415 41.209C144.73 41.0277 145.005 40.8019 145.241 40.5316L145.617 40.8655C145.326 41.1867 144.998 41.4602 144.635 41.6764Z" fill="#2E4452" />
                                    <path d="M148.721 41.864V33.7075H149.264V41.8672H148.721V41.864Z" fill="#2E4452" />
                                    <path d="M153.312 40.185C153.444 40.4585 153.611 40.6938 153.813 40.8846C154.012 41.0786 154.242 41.2249 154.498 41.3234C154.753 41.4252 155.022 41.4729 155.302 41.4729C155.747 41.4729 156.123 41.387 156.432 41.2153C156.741 41.0436 157.012 40.8306 157.249 40.5793L157.624 40.9132C157.337 41.2249 157.009 41.4856 156.64 41.6891C156.274 41.8927 155.82 41.9976 155.28 41.9976C154.911 41.9976 154.555 41.9276 154.22 41.7845C153.883 41.6446 153.586 41.4411 153.331 41.1804C153.075 40.9196 152.873 40.608 152.725 40.2423C152.576 39.8766 152.504 39.4727 152.504 39.0243V39.0021C152.504 38.5919 152.573 38.2071 152.709 37.8446C152.845 37.4821 153.034 37.1673 153.274 36.9001C153.513 36.633 153.797 36.42 154.122 36.2642C154.447 36.1083 154.804 36.0288 155.186 36.0288C155.586 36.0288 155.943 36.1052 156.261 36.2578C156.58 36.4104 156.851 36.6203 157.075 36.8906C157.299 37.1577 157.476 37.4725 157.596 37.835C157.719 38.1976 157.779 38.5887 157.779 39.0148V39.0371C157.779 39.0752 157.779 39.107 157.779 39.1388C157.779 39.1611 157.776 39.1961 157.766 39.2406H153.075C153.1 39.5936 153.176 39.9116 153.312 40.185ZM157.202 38.7477C157.18 38.4583 157.123 38.1785 157.028 37.9145C156.937 37.6506 156.804 37.4153 156.64 37.2118C156.473 37.0083 156.268 36.8429 156.022 36.7189C155.776 36.5949 155.492 36.5344 155.167 36.5344C154.886 36.5344 154.621 36.5917 154.378 36.703C154.135 36.8143 153.92 36.9701 153.737 37.1673C153.554 37.3644 153.406 37.5997 153.286 37.87C153.166 38.1435 153.097 38.4361 153.075 38.7477H157.202Z" fill="#2E4452" />
                                </svg>
                            </a>
                        </div>
                        <div class="col-xxl-6 col-xl-7 col-lg-6 header-middle-top">
                            <div class="header-middle">
                                <Form className='search-bar'>
                                    <Form.Group className="mb-3 form-group" controlId="">
                                        <input type="text" name="" placeholder="Search Settings" />
                                        <Button variant="light">
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.52167" cy="9.65552" r="5.48622" transform="rotate(-45 9.52167 9.65552)" stroke="#060610" stroke-width="1.33444" />
                                            <path d="M13.541 13.5239L16.606 16.4231" stroke="#060610" stroke-width="1.33444" stroke-linecap="round" />
                                        </svg>
                                    </Button>
                                    </Form.Group>
                                    
                                </Form>

                                {/* <form action="" class="search-bar">
                                    <div class="form-group">
                                        <input type="text" placeholder="Search Settings">
                                            <button class="btn">
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="9.52167" cy="9.65552" r="5.48622" transform="rotate(-45 9.52167 9.65552)" stroke="#060610" stroke-width="1.33444" />
                                                    <path d="M13.541 13.5239L16.606 16.4231" stroke="#060610" stroke-width="1.33444" stroke-linecap="round" />
                                                </svg>
                                            </button>
                                    </div>
                                </form> */}
                                <ul class="menu">
                                    <li><Link to="dashboard">Main Site</Link></li>
                                    <li><Link to="news">News</Link></li>
                                    <li><Link to="policy">User Policy</Link></li>
                                    <li><Link to="contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-3 col-lg-3 col-md-8 col-sm-8 col-3">
                            <div class="profile-thumb">
                                <a href="#" className="notification">
                                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 20.6667H22.3747L21.3333 16.5027V11.3334C21.3307 9.09089 20.5208 6.92434 19.0518 5.23006C17.5827 3.53577 15.5528 2.42704 13.3333 2.10669V0.666687H10.6667V2.10669C8.4472 2.42704 6.41727 3.53577 4.94824 5.23006C3.47921 6.92434 2.66929 9.09089 2.66667 11.3334V16.5027L1.62533 20.6667H0V23.3334H6.856C7.14703 24.4768 7.81074 25.4907 8.74229 26.2148C9.67383 26.939 10.8201 27.3321 12 27.3321C13.1799 27.3321 14.3262 26.939 15.2577 26.2148C16.1893 25.4907 16.853 24.4768 17.144 23.3334H24V20.6667ZM5.29333 16.9907L5.33333 11.3334C5.33333 9.56524 6.03571 7.86955 7.28595 6.61931C8.5362 5.36907 10.2319 4.66669 12 4.66669C13.7681 4.66669 15.4638 5.36907 16.714 6.61931C17.9643 7.86955 18.6667 9.56524 18.6667 11.3334V16.6667L19.6373 20.6667H4.37467L5.29333 16.9907ZM12 24.6667C11.534 24.6653 11.0765 24.5414 10.6735 24.3073C10.2706 24.0733 9.93619 23.7374 9.704 23.3334H14.296C14.0638 23.7374 13.7294 24.0733 13.3265 24.3073C12.9235 24.5414 12.466 24.6653 12 24.6667Z" fill="#B5B5B8" />
                                    </svg>
                                    <span></span>
                                </a>
                                <div class="mini-profile">
                                    <img src={userImg} alt="AH" />
                                    <div class="mini-profile-info">
                                        <h3>Shamsul Alam Sabuj</h3>
                                        <p>sasabuj321@gmail.com</p>
                                    </div>
                                </div>
                                <div class="mini-dropdown">
                                    <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.99997 10.414L0.292969 1.70703L1.70697 0.29303L8.99997 7.58603L16.293 0.29303L17.707 1.70703L8.99997 10.414Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
import React from 'react';
import clsx from 'clsx';
import styles from './Home.module.css';
import Product from './Product';

function Home() {
    return (
        <div className={`${clsx(styles.home)} container`}>
            <div className={`${clsx(styles.home_container)}`}>
                <div className={`${clsx(styles.home_image)}`}></div>
                <div
                    className={`${clsx(styles.mr_0)} row container-fluid mb-3`}
                >
                    <div className='col-sm-6 col-12'>
                        <Product
                            id='A5162HAGSH'
                            title='iPhone 13 Pro Max 128GB'
                            price={29990000}
                            image='https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/iphone-13-pro-max-2.jpg'
                            rating={5}
                            quantity={0}
                        />
                    </div>
                    <div className='col-sm-6 col-12'>
                        <Product
                            id='AGYQ789102'
                            title='iPhone 11 64GB Chính hãng (VN/A)'
                            price={11890000}
                            image='https://www.xtmobile.vn/vnt_upload/product/12_2021/thumbs/600_12121.jpg'
                            rating={3}
                            quantity={0}
                        />
                    </div>
                </div>
                <div
                    className={`${clsx(styles.mr_0)} row container-fluid mb-3`}
                >
                    <div className='col-12 col-sm-4'>
                        <Product
                            id='AGUIWO234T'
                            title='iPhone 12 Pro Max 128GB (Cũ 99%)'
                            price={21390000}
                            image='https://www.xtmobile.vn/vnt_upload/product/12_2021/thumbs/600_600_600_12PM_V_min_4_2_4.jpg'
                            rating={4}
                            quantity={0}
                        />
                    </div>
                    <div className='col-12 col-sm-4'>
                        <Product
                            id='12HJIO90WE'
                            title='iPhone Xs 256GB (Cũ 99%)'
                            price={8390000}
                            image='https://www.xtmobile.vn/vnt_upload/product/12_2019/thumbs/600_600_600_XSMAX_1.jpg'
                            rating={5}
                            quantity={0}
                        />
                    </div>
                    <div className='col-12 col-sm-4'>
                        <Product
                            id='12GHAYUWSF'
                            title='MYD92 - MACBOOK PRO 13" 2020 - Apple M1 - 512GB - NEW 99%'
                            price={32990000}
                            image='https://onewaymacbook.vn/images/products/2020/11/24/resized/mgn63_1606205616.jpg'
                            rating={4}
                            quantity={0}
                        />
                    </div>
                </div>
                <div
                    className={`${clsx(styles.mr_0)} row container-fluid mb-3`}
                >
                    <div className='col-12'>
                        <Product
                            id='12SERUIOA'
                            title='MK1E3 - MACBOOK PRO 16" RETINA 2021 - Apple M1 PRO - 512GB - NEW 100%'
                            price={59490000}
                            image='https://laptopvang.com/wp-content/uploads/2022/02/MacBook-Pro-16-inch-2021-1024x1024.png'
                            rating={3}
                            quantity={0}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

import React from "react";
import {PageHeader} from "antd";
import img from "./Tes.jpg";
import img2 from "./90S VALASION SHOES.jpg";
import img3 from "./COURTJAM BOUNCE SHOES.jpg";
import img4 from "./GAMECOURT TENNIS SHOES.jpg";
import img5 from "./NIZZA HI ALIFE SHOES.jpg";

export const Home = () => {
    return <div>
        <PageHeader
            style={{
                padding: 0,
                margin: 0,
                height: 40,
                backgroundColor: "transparent",
            }}
            // title={"Home"}
        >
        </PageHeader>
        <section class="section-intro padding-y-sm">
            <div class="container">
                <div class="intro-banner-wrap">
                    <img src={img} style={{ height: 300, width: 1024, border: 2, borderRadius: 10}} class="img-fluid rounded" alt="tes.jpg"></img>
                </div>
            </div> 
        </section>
        <section class="section-intro padding-y-sm">
            <div class="container mt-3">
                <div class="intro-banner-wrap">
                    <h4>Selamat datang di SNEAKERS</h4>
                </div>
            </div> 
        </section>
        <section class="section-content padding-bottom-sm">
            <div class="container">
                <header class="section-heading">
                    <a href="" class="btn btn-outline-primary pull-right">See all</a>
                    <h4 class="section-title">Our Products</h4>
                </header>

                <div class="row">
                    <div class="col-md-3">
                        <div href="#" class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src={img2} style={{ height: 200, width: 230 }}></img> </a>
                            <figcaption class="info-wrap">
                            <a href="#" class="title">90S VALASION SHOES</a>
                            <div class="price mt-1">Rp. 500.000</div>
                            </figcaption>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div href="#" class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src={img3} style={{ height: 200, width: 230 }}></img> </a>
                            <figcaption class="info-wrap">
                            <a href="#" class="title">COURTJAM BOUNCE SHOES</a>
                            <div class="price mt-1">Rp. 700.000</div>
                            </figcaption>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div href="#" class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src={img4} style={{ height: 200, width: 230 }}></img> </a>
                            <figcaption class="info-wrap">
                            <a href="#" class="title">GAMECOURT TENNIS SHOES</a>
                            <div class="price mt-1">Rp. 400.000</div> 
                            </figcaption>
                        </div>
                    </div> 
                    <div class="col-md-3">
                        <div href="#" class="card card-product-grid">
                            <a href="#" class="img-wrap"> <img src={img5} style={{ height: 200, width: 230 }}></img></a>
                            <figcaption class="info-wrap">
                            <a href="#" class="title">NIZZA HI ALIFE SHOES</a>
                            <div class="price mt-1">Rp. 900.000</div> 
                            </figcaption>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    </div>
};

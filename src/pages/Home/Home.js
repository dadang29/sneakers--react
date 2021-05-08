import React from "react";
import {PageHeader, Card} from "antd";
import img from "./Tes.jpg";
import { Barang } from "../Barang/Barang";

export const Home = () => {
    return <div>
        <section class="section-intro padding-y-sm">
            <div class="container">
                <div class="intro-banner-wrap">
                    <img src={img} style={{ height: 300, width: 1024, border: 2, borderRadius: 10}} class="img-fluid rounded" alt="tes.jpg"></img>
                </div>
            </div> 
        </section>
        <section class="section-intro padding-y-sm">
            <div class="container mt-3 mb-4">
                <div class="intro-banner-wrap">
                    <h4>Selamat datang di SNEAKERS</h4>
                </div>
            </div> 
        </section>
        <section className="section-content padding-bottom-sm">
            <div className="container">
                <header className="section-heading">
                    <div className="row mb-2">
                        <div className="col-md-10">
                            <h4 className="section-title">Our Products</h4>
                        </div>
                        <div className="col-md-2">
                            <a href={"/app/barang"} className="btn btn-outline-primary float-right" style={{ float : "right" }}>See all</a>
                        </div>
                    </div>
                </header>

                <Barang numberOfItems={4} />

            </div>
        </section>
    </div>
};

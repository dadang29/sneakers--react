import React from "react";
import { PageHeader, Card } from "antd";
import { Link } from "react-router-dom";
import {ShoppingCartOutlined} from "@ant-design/icons";
import img1 from "../Image/90S VALASION SHOES.jpg";
import img2 from "../Image/COURTJAM BOUNCE SHOES.jpg";
import img3 from "../Image/GAMECOURT TENNIS SHOES.jpg";
import img4 from "../Image/NIZZA HI ALIFE SHOES.jpg";
import img5 from "../Image/NIZZA HI ALIFE SHOES.jpg";

const { Meta } = Card;

export const Barang = (props) => {
    const {numberOfItems=99} = props;
    const barangs = [
        {
            key : 1,
            img : img1,
            name : "90S VALASION SHOES",
            price : "Rp. 500.000"
        },
        {
            key : 2,
            img : img2,
            name : "COURTJAM BOUNCE SHOES",
            price : "Rp. 700.000"
        },
        {
            key : 3,
            img : img3,
            name : "GAMECOURT TENNIS SHOES",
            price : "Rp. 400.000"
        },
        {
            key : 4,
            img : img4,
            name : "NIZZA HI ALIFE SHOES",
            price : "Rp. 900.000"
        },
        {
            key : 5,
            img : img4,
            name : "NIZZA HI ALIFE SHOES",
            price : "Rp. 900.000"
        },
        {
            key : 6,
            img : img4,
            name : "NIZZA HI ALIFE SHOES",
            price : "Rp. 900.000"
        },
        
    ];

    return(
        <div>
            <div 
                className="row" 
                style={{ paddingBottom : 30, marginTop: 30, }}
            >
            {barangs.slice(0, numberOfItems).map((barang) => {
                return (
                        <Card
                            hoverable
                            key={barang.key}
                            style={{ 
                                width: 230,
                                margin: 7 
                            }}
                            cover={<img alt="..." src={barang.img} />}
                        >
                            <Meta title={barang.name} description={barang.price} />
                            <Link to={"/app/cart"} class="btn btn-warning" style={{ marginRight: 3, marginTop: 5 }}>
                                <ShoppingCartOutlined style={{ fontSize: "18px" }}/>
                            </Link>
                            <Link to={"/app/detail_barang"} class="btn btn-success" style={{ marginTop: 5 }}>
                                Detail 
                            </Link>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
};
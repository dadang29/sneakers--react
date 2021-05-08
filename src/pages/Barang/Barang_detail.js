import React from "react";
import {Card, Row, Col, Divider, Typography, Image } from "antd";
import {Link} from "react-router-dom";
import {ShoppingCartOutlined} from "@ant-design/icons";
import img1 from "../Image/90S VALASION SHOES.jpg";

export const DetailBarang = () => {
    const {Title, Paragraph} = Typography;
    return <div>
        <div className="container" style={{ marginTop: 20}}>
                <Row>
                    <Col span={18} offset={3}>
                        <Title level={3} style={{ textAlign: "center" }} strong>90S VALASION SHOES</Title>
                        <Divider style={{ margin: 0, borderWidth: 1, borderColor: "black" }} />

                        <Row style={{ marginTop: 15 }}>
                            <Col span={9}>
                                <Image src={img1} />
                            </Col>

                            <Col span={14} style={{ marginLeft: 30 }}>
                                <Title level={5} strong>Harga</Title>
                                <Divider style={{ margin: 0, borderWidth: 1, borderColor: "black" }} />
                                <Paragraph style={{ fontSize: "20px", margin: 0 }}>
                                    Rp. 500.000,-
                                </Paragraph>
                                <Title level={5} strong>Stok</Title>
                                <Divider style={{ margin: 0, borderWidth: 1, borderColor: "black" }} />
                                <Paragraph style={{ fontSize: "20px", margin: 0 }}>
                                    10
                                </Paragraph>
                                <Title level={5} strong>Toko</Title>
                                <Divider style={{ margin: 0, borderWidth: 1, borderColor: "black" }} />
                                <Paragraph style={{ fontSize: "20px", margin: 0}}>
                                    Chan's Room
                                </Paragraph>
                            </Col>

                            <Title level={5} style={{ marginTop: 20 }} strong>Deskripsi</Title>
                            <Divider style={{ margin: 0, borderWidth: 1, borderColor: "black" }} />
                            <Paragraph style={{ fontSize: "20px", margin: 0}}>
                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </Paragraph>
                        </Row>

                        <Row style={{ marginTop: 20}}>
                            <Link to={"/app/home"} className="btn btn-warning" style={{marginRight:20}}> Kembali</Link>
                            <Link to={"/app/cart"} className="btn btn-success" ><ShoppingCartOutlined style={{ fontSize: "18px" }}/> Tambah Keranjang</Link>
                        </Row>
                    </Col>
                </Row>
        </div>
    </div>
}

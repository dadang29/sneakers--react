import React from "react";
import {Card, Row, Col, Divider, Typography, Image, Form, InputNumber, Button } from "antd";
import {Link} from "react-router-dom";
import {ShoppingCartOutlined} from "@ant-design/icons";
import img1 from "../Image/90S VALASION SHOES.jpg";

export const Keranjang = () => {
    const {Title,Paragraph, Text} = Typography;
    const onFinish = (values) => {
        console.log(values);
    };    
    return <div>
        <div className="container" style={{ marginTop: 20}}>
            <Card>
                <Row>
                    <Col span={18} offset={3}>
                        <Title level={3} style={{ textAlign: "center" }} strong > 90S VALASION SHOES</Title>
                        <Divider />

                        <Row>
                            <Col span={9}>
                                <Image src={img1} style="">Nama</Image>
                            </Col>
                            <Col span={13} style={{ marginLeft: 30 }}>
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
                                <Title level={5} strong>Jumlah Item</Title>
                                <Form
                                    layout="horizontal"
                                    onFinish={onFinish}
                                >
                                    <Form.Item name="qty"> 
                                        <InputNumber />
                                        <Button type="btn-warning" htmlType="submit" style={{ marginLeft:"10px" }}><ShoppingCartOutlined style={{ fontSize: "20px" }}/> Masukkan Keranjang</Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </div>
    </div>
}

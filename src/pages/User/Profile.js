import React, { useState } from "react";
import {Card, Row, Col, Divider, Typography, Form, Input, Button } from "antd";
import {Link} from "react-router-dom";
import {UserOutlined, EditOutlined} from "@ant-design/icons";

export const Profil = () => {
    const {Title, Text} = Typography;
    const [componentSize, setComponentSize] = useState('default');
    return( <div>
                <div className="container" style={{ marginTop: 20}}>
                    <Link to={"/app/home"} className="btn btn-warning" style={{ marginBottom: 5}}> Kembali</Link>
                    <Card>
                        <Row>
                            <Col span={24}>
                                <Title level={3} strong><UserOutlined /> My Profile</Title>
                                <Divider />
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col span={8}>
                                <Text>Nama</Text>
                            </Col>
                            <Col span={2}>
                                <Text>:</Text>
                            </Col>
                            <Col span={14}>
                                <Text>Nisrina Izdihar Ardana Putri</Text>
                            </Col>
                            <br/>
                        </Row>

                        <Row>
                            <Col span={8}>
                                <Text>Nomor Telepon</Text>
                            </Col>
                            <Col span={2}>
                                <Text>:</Text>
                            </Col>
                            <Col span={14}>
                                <Text>089696854881</Text>
                            </Col>
                            <br/>
                        </Row>

                        <Row>
                            <Col span={8}>
                                <Text>Alamat</Text>
                            </Col>
                            <Col span={2}>
                                <Text>:</Text>
                            </Col>
                            <Col span={14}>
                                <Text>Jl. Bendungan Wadas Lintang</Text>
                            </Col>
                            <br/>
                        </Row>

                        <Row>
                            <Col span={8}>
                                <Text>Email</Text>
                            </Col>
                            <Col span={2}>
                                <Text>:</Text>
                            </Col>
                            <Col span={14}>
                                <Text>ardaputt02@gmail.com</Text>
                            </Col>
                            <br/>
                        </Row>
                    </Card>

                    <Card style={{ marginTop: "5px" }}>
                        <Row>
                            <Col span={24}>
                                <Title level={3} strong><EditOutlined /> Edit Profile</Title>
                                <Divider />
                            </Col>
                        </Row>
                        
                        <Form
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 14 }}
                            layout="horizontal"
                            initialValues={{ size: componentSize }}
                        > 

                            <Form.Item label="Nama Lengkap">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Nomor Telepon">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Alamat">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Email">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Password">
                                <Input />
                            </Form.Item>

                            <Form.Item style={{ marginLeft: "150px" }}>
                                <Button type="success">Simpan</Button>
                            </Form.Item>
                        </Form>
                    </Card>

            </div>
        </div>
    );
}

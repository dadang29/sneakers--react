import React, {useState} from "react";
import {Button, Layout, Menu, PageHeader, Popover, Typography, Input, Badge} from "antd";
import {MenuList} from "./MenuList";
import {Link} from "react-router-dom";
import {UserOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {AppRoute} from "../../routes/app";

const {Text, Paragraph} = Typography;
const {Header, Content, Sider} = Layout;
const { Search } = Input;
const onSearch = value => console.log(value);

export const DesktopLayout = () => {
    const [clicked, setClicked] = useState(false);

    return <Layout
        theme={"light"}
        className={"transparent"}
        hasSider={true}
        style={{
            paddingLeft: 0,
            display: "flex",
            width: "100vw",
            height: "100vh",
        }}>

        <Sider
            className={"transparent"}
            width={240}
            style={{
                overflowX: "hidden",
                bottom: 0,
                justifyContent: "flex-start",
                paddingTop: 20,
                paddingLeft: 20,
                position: "fixed",
                top: 0,
                zIndex: 10,
                backgroundColor: "#2e9dfe"
            }}
        >
            <div style={{
                paddingLeft: 20,
                marginBottom: 40,
            }}>
                <Paragraph
                    style={{
                        margin: 0,
                        padding: 0,
                        fontSize: 30,
                        // marginLeft: 5,
                        fontWeight: 600,
                        color: "white",
                    }}
                >
                    SNEAKERS
                </Paragraph>
            </div>
            <MenuList 
                    closeLeftDrawer={() => {}}
                />
            
        </Sider>


        <Layout style={{
            paddingLeft: 240
        }}>
            <Header
                theme={"light"}
                style={{
                    height: 70,
                    paddingLeft: 0,
                    paddingRight: 0,
                    backgroundColor: "white",
                    width: "1000px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    position: "fixed",
                    zIndex: 10,
                }}
            >
                    <Search
                        style={{
                            marginTop : 20,
                            marginRight : 380,
                            maxWidth : 500,
                            paddingLeft: 0,
                        }}
                        placeholder="Search..."
                        allowClear
                        enterButton="Search"
                        // size="small"
                        onSearch={onSearch}
                    />

                    <Badge 
                        count={0} 
                        showZero
                        style={{
                            fontSize: "12px",
                            marginRight: 30,
                            marginTop: 20
                        }}
                    >
                        <Link to="/app/keranjang">
                            <ShoppingCartOutlined 
                                style={{
                                    fontSize: "30px",
                                    marginRight: 30,
                                    marginTop: 20,
                                    color: "black"
                                }}
                            />
                        </Link>
                    </Badge>

                    <Popover
                        autoAdjustOverflow={true}
                        placement="bottomRight"
                        content={
                            <Menu
                                type={"line"}
                                inlineIndent={0}
                                theme="light"
                                style={{
                                    backgroundColor: "white",
                                    borderRightWidth: 0,
                                }}
                                mode="inline"
                            >
                                <Menu.Item>
                                    <Link to="/app/profil">
                                        <span>Profile</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item
                                    onClick={() => {
                                        // store.authentication.logout();
                                        // return history.push("/login");
                                    }}
                                >
                                    <span>Sign out</span>
                                </Menu.Item>
                            </Menu>
                        }
                        title={
                            <Text>
                                info@bangun-kreatif.com
                                {/*{store.userData.email}{" "}*/}
                                <Paragraph style={{fontWeight: 400}} type={"secondary-dark"}>
                                    Administrator
                                    {/*{store.userData.role}*/}
                                </Paragraph>
                            </Text>
                        }
                        trigger="click"
                        visible={clicked}
                        onVisibleChange={() => setClicked(!clicked)}
                    >
                        <Button
                            size={"default"}
                            style={{ marginTop : 20 }}
                            icon={
                                <UserOutlined style={{fontSize: "17px"}}/>
                            }
                        />
                    </Popover>
            </Header>
            <Content style={{
                width: 1024,
                padding: 20,
                marginTop: "60px",
                backgroundColor: "white"
            }}>
                <AppRoute/>
            </Content>
        </Layout>
    </Layout>
};

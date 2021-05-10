import React, { useState } from 'react';
import { Table, Radio, Divider, Typography } from 'antd';
import img1 from "../Image/90S VALASION SHOES.jpg";

const data = [
    {
        key : 1,
        img : img1,
        name : "90S VALASION SHOES",
        price : "Rp. 500.000",
        qty : 1,
    },
];

const columns = [
    {
        title: "Gambar",
        render: (data) => <img src={data.img} style={{ width: "130px" }} />
    },
    {
        title: "Nama Produk",
        render: (data) => <a>{data.name}</a>
    },
    {
        title: "Kuantitas",
        render: (data) => <a>{data.qty}</a>,
    },
    {
        title: "Subtotal",
        render: (data) => <a>{data.price}</a>,
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        name: record.name
    })
};

export const Checkout = () => {
    const {Text} = Typography;
    const [selectionType, setSelectionType] = useState('checkbox');
    return(
        <div style={{ marginTop: 30 }}>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                size="middle"

                // summary={pageData => {
                //     let total = 0;

                //     pageData.forEach(({ price }) => {
                //         total += price;
                //     });

                //     return(
                //         <>
                //             <Table.Summary.Row>
                //                 <Table.Summary.Cell colspan={4}>Total</Table.Summary.Cell>
                //                 <Table.Summary.Cell>
                //                     <Text strong>{total}</Text>
                //                 </Table.Summary.Cell>
                //             </Table.Summary.Row>
                //         </>
                //     );
                // }}
            />
        </div>
    );
}
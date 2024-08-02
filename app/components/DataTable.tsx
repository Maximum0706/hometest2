import { Space, Table } from "antd";
import React from "react";

function DataTable() {
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>View</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      firstName: "Ikhsan",
      lastName: "Wahyudiandra",
      age: 21,
      address: "Samarinda, Indonesia",
    },
    {
      id: "2",
      firstName: "Aninda",
      lastName: "Putri",
      age: 20,
      address: "Tanggerang, Indonesia",
    },
    {
      id: "3",
      firstName: "Firzian",
      lastName: "Caesar",
      age: 20,
      address: "Samarinda, Indonesia",
    },
    {
      id: "4",
      firstName: "Rayhan",
      lastName: "Rifqi",
      age: 21,
      address: "Samarinda, Indonesia",
    },
    {
      id: "5",
      firstName: "Febri",
      lastName: "Irawan",
      age: 22,
      address: "Samarinda, Indonesia",
    },
    {
      id: "6",
      firstName: "Adnan",
      lastName: "Fathurrizky",
      age: 20,
      address: "Bekasi, Indonesia",
    },
    {
      id: "7",
      firstName: "Mikael ",
      lastName: "Glann",
      age: 20,
      address: "Bekasi, Indonesia",
    },
    {
      id: "8",
      firstName: "Daffa",
      lastName: "Febrian",
      age: 32,
      address: "Bekasi, Indonesia",
    },
  ];

  const rowClassName = (record: any, index: number) => 
    index % 2 === 0 ? 'table-row-even' : 'table-row-odd';

  return (
    <Table
      className="mt-4"
      columns={columns}
      dataSource={data}
      rowKey="id"
      rowClassName={rowClassName}
    />
  );
}

export default DataTable;

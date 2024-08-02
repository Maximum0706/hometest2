import { Header } from "antd/es/layout/layout";
import React from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

function AppHeader() {
  return (
    <Header style={{ backgroundColor: "#87CEEB", borderBottom: "1px solid #f1f1f1" }} className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <HomeOutlined className="text-3xl" />
        <div>Home Test</div>
      </div>
      
      <div className="flex items-center gap-2">
        <Avatar size={38} icon={<UserOutlined />} />
        <div>Ikhsan W.P</div>
      </div>
    </Header>
  );
}

export default AppHeader;

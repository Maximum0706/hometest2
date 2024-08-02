"use client";
import DataTable from "./components/DataTable";
import AppFooter from "./components/AppFooter"; // Import footer component
import { Row, Col, Layout } from "antd";

const { Content } = Layout;

export default function Home() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <Row gutter={16}>
            <Col span={24}>
              <DataTable />
            </Col>
          </Row>
        </Content>
        <AppFooter /> {/* Add the footer component here */}
      </Layout>
    </Layout>
  );
}

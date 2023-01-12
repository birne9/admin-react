import { Layout } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
const { Header } = Layout;
const Navbar = () => {
  return (
    <div
      style={{
        height: "80px",
        lineHeight: "80px",
        boxSizing: "border-box",
        padding: "0px 10px",
      }}
    >
      <Header>
        <MenuFoldOutlined style={{ fontSize: "25px" ,cursor:'pointer'}} />
      </Header>
    </div>
  );
};

export default Navbar;

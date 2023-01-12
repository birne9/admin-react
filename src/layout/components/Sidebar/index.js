import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
function getItem(label, key, icon, children, type) {
  return {
    label,
    key,
    icon,
    children,
    type,
  };
}
const items = [
  getItem("首页", "1", <PieChartOutlined />),
  getItem("文档", "2", <DesktopOutlined />),
  getItem("引导页", "3", <ContainerOutlined />),
  getItem("权限测试页", "sub1", <MailOutlined />, [
    getItem("页面权限", "5"),
    getItem("指令权限", "6"),
    getItem("角色权限", "7"),
  ]),
  getItem("图标", "8", <ContainerOutlined />),
  getItem("组件", "sub2", <AppstoreOutlined />, [
    getItem("富文本编辑器", "9"),
    getItem("Markdown", "10"),
    getItem("JSON编辑器", "11"),
    getItem("Splitpane", "12"),
    getItem("头像上传", "13"),
    getItem("Dropzone", "14"),
    getItem("Sticky", "15"),
    getItem("Count To", "16"),
    getItem("小组件", "17"),
    getItem("返回顶部", "18"),
    getItem("拖拽Dialog", "19"),
    getItem("列表拖拽", "20"),
    getItem("可拖拽看版", "21"),
  ]),
  getItem("图表", "sub3", <MailOutlined />, [
    getItem("键盘图表", "22"),
    getItem("折线图", "23"),
    getItem("混合图表", "24"),
  ]),
  getItem("路由嵌套", "sub4", <MailOutlined />, [
    getItem("菜单1", "sub5", null, [
      getItem("菜单1-1", "25"),
      getItem("菜单1-2", "sub6", null, [
        getItem("菜单1-2-1", "26"),
        getItem("菜单1-2-2", "27"),
      ]),
      getItem("菜单1-3", "28"),
    ]),
    getItem("菜单2", "29"),
  ]),
  getItem("Table", "sub7", <MailOutlined />, [
    getItem("动态 Table", "30"),
    getItem("拖拽 Table", "31"),
    getItem("Table 内编辑", "32"),
    getItem("综合 Table", "33"),
  ]),
  getItem("综合实力", "sub8", <MailOutlined />, [
    getItem("创建文章", "34", <PieChartOutlined />),
    getItem("文章列表", "35", <PieChartOutlined />),
  ]),
  getItem("Tab", "sub9", <MailOutlined />),
  getItem("错误页面", "sub10", <MailOutlined />, [
    getItem("401", "36", <PieChartOutlined />),
    getItem("404", "37", <PieChartOutlined />),
  ]),
  getItem("错误日志", "sub11", <MailOutlined />),
  getItem("Excel", "sub12", <MailOutlined />, [
    getItem("导出 Excel", "38", <PieChartOutlined />),
    getItem("导出 已选择项", "39", <PieChartOutlined />),
    getItem("导出 多级表头", "40", <PieChartOutlined />),
    getItem("上传 Excel", "41", <PieChartOutlined />),
  ]),
  getItem("错误页面", "sub13", <MailOutlined />, [
    getItem("Export Zip", "42", <PieChartOutlined />),
  ]),
  getItem("PDF", "sub14", <MailOutlined />),
  getItem("换肤", "sub15", <MailOutlined />),
  getItem("Clipboard", "sub16", <MailOutlined />),
  getItem("国际化", "sub17", <MailOutlined />),
  getItem("外链", "sub18", <MailOutlined />),
  getItem("打赏", "sub19", <MailOutlined />),
];

const { Sider } = Layout;

const Siderbar = () => {
  return (
    <Sider>
      <Menu
        style={{height:'100vh'}}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </Sider>
  );
};

export default Siderbar;

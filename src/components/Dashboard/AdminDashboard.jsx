import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Dashboardtable from "./common/Dashboardtable";
import Producttable from "./common/Producttable";
import EnhancedTable from "./common/Usertable";
import "./dashboard.css";
import DashboardHome from "./pages/DashboardHome";
function AdminDashboard() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col lg={2}>
          <div className="sidebar">
            <h2>Sen Ji</h2>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="forth">Settings</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="fifth">Profile</Nav.Link>
              </Nav.Item> */}
              {/* <Nav.Item>
                <Nav.Link eventKey="sixth">Users</Nav.Link>
              </Nav.Item> */}
            </Nav> 
          </div>
        </Col>
        <Col lg={10}>
          <div className="content">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <DashboardHome />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Dashboardtable className="usertable" />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Producttable />
              </Tab.Pane>
              <Tab.Pane eventKey="forth">Setting</Tab.Pane>
              {/* <Tab.Pane eventKey="fifth">msdj</Tab.Pane>
              <Tab.Pane eventKey="sixth">msdj</Tab.Pane> */}
            </Tab.Content>
          </div>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default AdminDashboard;

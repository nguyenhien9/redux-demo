import "./App.css";
import { Typography, Divider } from "antd";
import HobbyList from "./components/HobbyList";
import Filters from "./components/Filter";
const { Title } = Typography;
function App() {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }} type="success">
        Hobbies List with REDUX
      </Title>
      <Filters />
      <Divider />
      <HobbyList />
    </div>
  );
}

export default App;

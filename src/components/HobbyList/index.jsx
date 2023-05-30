import { Col, Space, Row, Input, Button, message } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import Hobby from "../Hobby";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeHobby, addHobby, removeHobby } from "../../actions";

export default function HobbyList() {
  const [hobbyName, setHobbyName] = useState("");

  const handleChange = (e) => {
    const newHobbyName = e.target.value;
    setHobbyName(newHobbyName);
  };
  const dispatch = useDispatch();
  const handleAddHobby = () => {
    dispatch(
      addHobby({
        id: new Date().getTime().toString(),
        name: hobbyName,
      })
    );
    setHobbyName("");
  };
  const searchText = useSelector((state) => state.hobby.filter.search);
  const hobbyList = useSelector((state) => {
    const hobbySearchRemaining = state.hobby.hobbyList.filter((hobby) => {
      return hobby.name.includes(searchText);
    });
    return hobbySearchRemaining;
  });
  const hobbyID = useSelector((state) => state.hobby.activeID);
  const remove = (id) => {
    const removeID = id;
    message.success("Successful");
    dispatch(removeHobby(removeID));
  };
  const clickHobby = (id) => {
    const activeID = id;
    console.log(activeID);
    dispatch(activeHobby(activeID));
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col
        span={24}
        style={{
          height: "calc(100% - 40px)",
          overflowY: "auto",
        }}
      >
        <Hobby
          hobbyList={hobbyList}
          deleteHobby={remove}
          onClickActive={clickHobby}
          hobbyID={hobbyID}
        />
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }}>
          <Input
            value={hobbyName}
            onChange={handleChange}
            placeholder="Enter hobby"
            prefix={<HeartTwoTone twoToneColor="#eb2f96" />}
          />

          <Button type="primary" onClick={handleAddHobby}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}

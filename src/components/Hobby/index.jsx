import { Row, Col, List, Button, Typography } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import React from "react";
import "./hobby.css";
const { Text } = Typography;
export default function Hobby({
  hobbyList,
  deleteHobby,
  hobbyID,
  onClickActive,
}) {
  const active = (hobbyID) => {
    if (onClickActive) {
      onClickActive(hobbyID);
      console.log(hobbyID);
    }
  };

  return (
    <Row>
      <Col span={24}>
        <List>
          {hobbyList.map((hobby) => {
            return (
              <List.Item
                // actions={[
                //   <Button
                //     type="text"
                //     danger
                //     onClick={() => deleteHobby(hobby.id)}
                //   >
                //     Delete
                //   </Button>,
                // ]}

                actions={[
                  <Button
                    style={{ color: "orange" }}
                    type="text"
                    icon={<EditTwoTone twoToneColor="orange" />}
                  >
                    Edit
                  </Button>,
                  <Button
                    icon={<DeleteTwoTone twoToneColor="red" />}
                    type="text"
                    danger
                    onClick={() => deleteHobby(hobby.id)}
                  >
                    Delete
                  </Button>,
                ]}
                key={hobby.id}
              >
                <Text
                  id="text"
                  onClick={() => {
                    active(hobby.id);
                  }}
                  className={hobby.id === hobbyID ? "active" : ""}
                >
                  {hobby.name}
                </Text>
              </List.Item>
            );
          })}
        </List>
      </Col>
    </Row>
  );
}

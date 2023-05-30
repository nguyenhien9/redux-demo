import React, { useState } from "react";
import { Col, Row, Input, Typography } from "antd";
import { useDispatch } from "react-redux";
import { searchFilterChange } from "../../actions";
const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    dispatch(searchFilterChange(newSearchText));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Col>
    </Row>
  );
}

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./home.scss";

// Components
import { Form, Input, Button, DatePicker, Row, Col, Spin } from "antd";
import CountrySelect from "../../components/CountrySelect";
import { useSetResponse } from "../../components/ResponseContext";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Home = () => {
  const history = useHistory();
  const setResponse = useSetResponse();
  const [fetchingResponse, setFetchingResponse] = useState(false);
  const onFinish = async (values) => {
    // console.log("Success:", values);
    setFetchingResponse(true);
    const response = await axios.post("/surprise", values);
    setFetchingResponse(false);
    console.log(response);
    setResponse(response.data);
    history.push(`/response#${response.data.type}`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="home">
      <Row justify="center">
        <Col span={5}>
          <Spin spinning={fetchingResponse}>
            <Form
              {...layout}
              name="surpriseData"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              colon={false}
              labelAlign="left"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Date of Birth"
                name="dateOfBirth"
                rules={[
                  {
                    required: true,
                    message: "Please input your date of birth!",
                  },
                ]}
              >
                <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
              </Form.Item>

              <Form.Item
                label="Country"
                name="country"
                rules={[
                  {
                    required: true,
                    message: "Please select your country!",
                  },
                ]}
              >
                <CountrySelect />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Spin>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

import React from "react";
import moment from "moment";
import "./home.scss";

// Components
import { Form, Input, Button, DatePicker, Row, Col } from "antd";
import CountrySelect from "../../components/CountrySelect";

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
  const onFinish = (values) => {
    // TODO: Call BE with data
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="home">
      <Row justify="center">
        <Col span={5}>
          <Form
            {...layout}
            name="surpriseData"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            colon={false}
            labelAlign="left"
            initialValues={{
              name: "omri",
              dateOfBirth: moment(),
              country: "Israel",
            }}
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
        </Col>
      </Row>
    </div>
  );
};

export default Home;

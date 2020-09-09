import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./stats.scss";

// Components
import { Row, Col } from "antd";

const Stats = () => {
  const [stats, setStats] = useState(undefined);
  useEffect(() => {
    axios.get("/stats").then((res) => {
      setStats(res.data);
    });
    return () => {
      setStats(undefined);
    };
  }, []);

  if (!stats) {
    return null;
  }

  console.log(stats);

  return (
    <div className="stats">
      <Row justify="center">
        <Col>
          <div className="stats__age">
            <div>Average Users Age: </div>
            <div className="stats__age--big">500</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={Object.entries(stats.countries).map(([country, val]) => ({
                name: country,
                count: val,
              }))}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
        <Col span={12}>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={Object.entries(stats.types).map(([type, val]) => ({
                name: type,
                count: val,
              }))}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </div>
  );
};

export default Stats;

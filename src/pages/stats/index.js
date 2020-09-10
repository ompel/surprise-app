import React, { useEffect, useState } from "react";
import axios from "axios";

import "./stats.scss";

// Components
import { Row, Col } from "antd";
import GenericBarChart from "./GenericBarChart";

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

  return (
    <div className="stats">
      <Row justify="center" gutter={[8, 48]}>
        <Col>
          <div className="stats__age">
            <div>Average Users Age: </div>
            <div className="stats__age--big">
              {stats.averageAge == null ? "N/A" : stats.averageAge}
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ height: 250 }} gutter={[8, 48]}>
        <Col span={12}>
          <GenericBarChart
            data={stats.countries}
            name="Countries Distribution"
          />
        </Col>
        <Col span={12}>
          <GenericBarChart data={stats.types} name="Types Distribution" />
        </Col>
      </Row>
    </div>
  );
};

export default Stats;

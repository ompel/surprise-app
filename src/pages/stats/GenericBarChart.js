import React from "react";
import randomcolor from "randomcolor";
import { isEmpty } from "lodash";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Label,
} from "recharts";

// Components
import { Empty } from "antd";

const GenericBarChart = ({ data, name }) => {
  if (isEmpty(data)) {
    return <Empty description={`No data for ${name}`} />;
  }

  return (
    <ResponsiveContainer>
      <BarChart data={data} margin={{ bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
          <Label value={name} position="bottom" />
        </XAxis>
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" barSize={20}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={randomcolor()} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GenericBarChart;

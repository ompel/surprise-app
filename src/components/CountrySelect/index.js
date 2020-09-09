import React from "react";
import { Select } from "antd";
import countries from "./countries.json";
import "flag-icon-css/sass/flag-icon.scss";

const { Option } = Select;

const CountrySelect = (props) => {
  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      placeholder="Select a country"
      optionFilterProp="value"
      {...props}
    >
      {countries.map((country) => (
        <Option value={country.name} key={country.code}>
          <div>
            <span
              style={{ marginRight: 10 }}
              className={`flag-icon flag-icon-${country.code.toLocaleLowerCase()}`}
            ></span>
            <span>{country.name}</span>
          </div>
        </Option>
      ))}
    </Select>
  );
};

export default CountrySelect;

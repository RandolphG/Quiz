import React, { Component } from "react";
import { Chart, Geom, Tooltip, Coord, Label, View, Guide } from "bizcharts";
import DataSet from "@antv/data-set";
const { Text } = Guide;
const text = [
  "MIDNIGHT",
  "3 AM",
  "6 AM",
  "9 AM",
  "NOON",
  "3 PM",
  "6 PM",
  "9 PM",
];

const data = [];

for (let i = 0; i < 24; i++) {
  const item = {};
  item.type = i + "";
  item.value = 10;
  data.push(item);
}

const { DataView } = DataSet;
const dv = new DataView();

dv.source(data).transform({
  type: "percent",
  field: "value",
  dimension: "type",
  as: "percent",
});

const userData = [
  {
    type: "TRIES",
    value: 70,
  },
  {
    type: "CORRECT",
    value: 10,
  },
  {
    type: "WRONG",
    value: 10,
  },
];

const userDv = new DataView();

userDv.source(userData).transform({
  type: "percent",
  field: "value",
  dimension: "type",
  as: "percent",
});

console.log(`userDv is type of`, typeof userDv);
console.log(`userDv is type of`, typeof userDv);
console.log(userDv);
console.log(userData);

const cols = {
  percent: {
    formatter: (val) => {
      return (val * 100).toFixed(2) + "%";
    },
  },
};

export default class Data extends Component {
  /**
   * TODO
   *
   * @param {TODO} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * TODO
   * @return {!*}
   */
  render(props) {
    return (
      <div>
        <Chart height={200} data={data} padding={40} forceFit>
          <Coord type="theta" radius={0.9} />
          <Tooltip showTitle={false} />
          <View data={dv}>
            <Coord type="theta" innerRadius={0.9} />
            <Geom
              type="intervalStack"
              position="percent"
              color={["type", ["rgba(255, 255, 255, 0)"]]}
              style={{
                stroke: "#444",
                lineWidth: 2,
              }}
            />
            <Guide>
              <Text
                position={["50%", "50%"]}
                content="results"
                style={{
                  lineHeight: "240px",
                  fontSize: "24",
                  fill: "#262626",
                  textAlign: "center",
                }}
              />
            </Guide>
          </View>
          <View data={data}>
            <Coord type="polar" innerRadius={0.9} />
            <Geom
              type="interval"
              position="type*value"
              color="#444"
              size={[
                "type",
                function (val) {
                  if (val % 4 === 0) {
                    return 4;
                  } else {
                    return 0;
                  }
                },
              ]}
              style={{
                stroke: "#444",
                lineWidth: 1,
              }}
            >
              <Label
                content={[
                  "type",
                  function (val) {
                    if (val % 11 === 0) {
                      return;
                      // return text[val / 3];
                    }

                    return "";
                  },
                ]}
                offset={15}
                textStyle={{
                  fontSize: 12,
                  fontWeight: "bold",
                  fill: "#bfbfbf",
                }}
              />
            </Geom>
          </View>
          <View data={userDv} scale={cols}>
            <Coord type="theta" innerRadius={0.65} />
            <Geom type="intervalStack" position="percent" color={"type"}>
              <Label content="type" offset={40} />
            </Geom>
          </View>
        </Chart>
      </div>
    );
  }
}

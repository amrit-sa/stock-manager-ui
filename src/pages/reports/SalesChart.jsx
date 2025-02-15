import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";
import eChart from "./configs/eChart";

function EChart() {
  const { Title, Paragraph } = Typography;

  const items = [
    {
      Title: "3.6K",
      user: "Users",
    },
    {
      Title: "2M",
      user: "Clicks",
    },
    {
      Title: "$772",
      user: "Sales",
    },
    {
      Title: "82",
      user: "Items",
    },
  ];

  return (
    <>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={180} // Reduced height
        />
      </div>
      {/* <div className="chart-visitor">
        <Title level={5}>Active Users</Title>
        <Paragraph className="lastweek">
          Compared to last week <span className="bnb2">+30%</span>
        </Paragraph>
        <Row gutter={[16, 16]}>
          {items.map((v, index) => (
            <Col xs={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div> */}
    </>
  );
}

export default EChart;

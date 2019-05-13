import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Recommended Visualization"
                category="This is the recommended visualization based on dataset you uploaded and your preferences."
                stats="Updated 2 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                //legend={
                //   <div className="legend">{this.createLegend(legendBar)}</div>
                //}
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-history"
                title="Alternative Visualization"
                category="These is an alternative visualization you can select from."
                stats="Updated 2 minutes ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                //legend={
                //  <div className="legend">{this.createLegend(legendPie)}</div>
                //}
              />
            </Col>
          </Row>

          <Row>
            <Col md={5}>
              <Card
                id="chartActivity"
                title="Explanation of the Recommendation"
                category=""
                statsIcon="fa fa-hisory"
                stats="Updated 2 minutes ago"
                content={
                    <div>
                      Pie chart and bar chart are our recommending visualizations. 
                    <ol>
                    <li>Based on our rule-based engine, Pie Chart is the most suitable visualization for ordinal qualitative variables.</li>
                    <li>Your personality type is outgoing and sensational.</li>
                    <li>Your preferences for visualizations are charts which require little complexity.</li>
                    <li>The process of PerRec is explained in flow chart on the Flow section.</li>
                    </ol>
                  </div>
                }
              />
            </Col>
      
            <Col md={7}>
              <Card
                title="Flow"
                category="Checklist for Recommendations"
                stats="Updated 2 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;

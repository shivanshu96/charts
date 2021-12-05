import React from "react";
import Chart from "react-google-charts";

//component to show piechart
class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
    };
  }
  componentDidMount() {
    const { data } = this.props;
    if (data && data.elements && data.elements.length > 0) {
      this.formPieData();
    }
  }
  formPieData = () => {
    const { data } = this.props;
    let len = data.elements.length;
    let i = 0;
    let values = [["index", "value"]];

    for (i = 0; i < len; i++) {
      values.push([(i + 1).toString(), data.elements[i]]);
    }
    console.log(values);
    this.setState({ values });
  };
  componentDidUpdate(prevProps, prevState) {
    const { data } = this.props;
    if (
      prevProps.data !== data &&
      data &&
      data.elements &&
      data.elements.length > 0
    ) {
      this.formPieData();
    }
  }
  render() {
    let { values } = this.state;

    return (
      <div>
        {values && values.length > 0 && (
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={values}
          />
        )}
      </div>
    );
  }
}
export default PieChart;

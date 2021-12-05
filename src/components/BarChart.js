import React from "react";
import Chart from "react-google-charts";

//component to show bar chart
class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { data } = this.props;
    if (data && data.elements && data.elements.length > 0) {
      this.formBarData();
    }
  }
  formBarData = ()=>{
    const {data}= this.props;
    let len = data.elements.length;
    let values = [["index", "value"]];
    let i=0;
    for (i = 0; i < len; i++) {
      values.push([(i + 1).toString(), data.elements[i]]);
    }
      this.setState({values});
  }
  componentDidUpdate(prevProps,prevState){
    const{data}= this.props;
    if(prevProps.data !==data && data && data.elements && data.elements.length > 0) {
        this.formBarData();
      
    }
  }
  render() {
    const {values} = this.state;
    return (
      <div>
        {values && values.length > 0 && (
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={values}
          />
        )}
      </div>
    );
  }
}

export default BarChart;

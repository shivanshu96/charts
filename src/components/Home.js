import React, { Component } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { getChartData } from "../selectors/chartSelector";
import * as actions from "../actions/index";
import { connect } from "react-redux";

//dashboard component
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChart: "",
      selectedValue: "",
      data: [],
    };
  }
  componentDidMount() {
    const { chartData } = this.props;
    if(chartData && chartData.length<1)
    this.props.fetchChartData();
    if (chartData && chartData.length > 0) {
      this.setState({ data: chartData });
    }
  }
  /* componentDidUpdate(prevProps, prevState) {
    const { chartData } = this.state;
    if (
      chartData !== prevProps.chartData &&
      chartData &&
      !(this.state.data && this.state.data.length > 0)
    ) {
      this.setState({ data: chartData });
    }
  } */

  handleChange = (event, id) => {
    console.log(event.target.value);
    if (id === "chart")
      this.setState({ selectedChart: event.target.value, selectedValue: "" });
    else if (id === "value")
      this.setState({ selectedValue: event.target.value });
  };
  render() {
    const { selectedChart, selectedValue, data } = this.state;
    const { chartData } = this.props;
    const dropdownListBar =
      chartData && chartData.filter((x) => x.type === "Bar");
    const dropdownListPie =
      chartData && chartData.filter((x) => x.type === "Pie");
    let list =
      selectedChart === "Bar"
        ? dropdownListBar
        : selectedChart === "Pie"
        ? dropdownListPie
        : [];
    console.log(dropdownListBar, dropdownListPie, data, this.props.chartData);
    return (
      <React.Fragment>
        <Box sx={{ minWidth: 60 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Chart Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedChart}
              label="Chart Type"
              onChange={(e) => this.handleChange(e, "chart")}
            >
              <MenuItem value={"Bar"}>Bar</MenuItem>
              <MenuItem value={"Pie"}>Pie</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 60 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {'Value'}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedValue}
              label="Chart Type"
              onChange={(e) => this.handleChange(e, "value")}
            >
              {list &&
                list.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {index}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
        {selectedChart === "Bar" && selectedValue && (
          <BarChart data={selectedValue} />
        )}
        {selectedChart === "Pie" && selectedValue && (
          <PieChart data={selectedValue} />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  chartData: getChartData(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChartData: (data) => dispatch(actions.fetchChartData(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

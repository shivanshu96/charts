import React from "react";
import { connect } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getChartData } from "../selectors/chartSelector";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as actions from '../actions/index';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Footer = styled.div`
padding-left:80%;
margin:20px;
`;
const LinkItem = styled(Link)`
color:white !important;
text-decoration:none;
`;

//component to update fetched data
class UpdateSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
  componentDidMount(){
    const{chartData}= this.props;
    this.setState({data:chartData});
  }
  handleButton=()=>{
    this.props.storeChartData(this.state.data);
  }
  updateTable = (e,parentIndex,childIndex)=>{
    console.log(e.target.value,parentIndex,childIndex);
    let{data} = this.state;
    
      data = data && data.map((val,index)=>{
        if(index===parentIndex){
          let element = val.elements && val.elements.map((num,idx)=>{
            if(childIndex===idx){
              if(e.target.value)
              return Number(e.target.value);
              else return Number(0);
            }
            return num;
          })
          val.elements = element;
          return val;
        }
        return val;
      })
      console.log(data);
      this.setState({data});
    
   
  }
  render() {
    const {data} = this.state;
    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Index</TableCell>
                <TableCell>Type</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">2</TableCell>
                <TableCell align="right">3</TableCell>
                <TableCell align="right">4</TableCell>
                <TableCell align="right">5</TableCell>
                <TableCell align="right">6</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.length>0 && data.map((row,index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index+1}</TableCell>
                  <TableCell>
                    {row.type}
                  </TableCell>
                  {row.elements && row.elements.map((item,idx)=>(
                    <TableCell align="right">
                      <TextField value={item} style = {{width: 60}} onChange={(e)=>this.updateTable(e,index,idx)} >{item}</TextField>
                                </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Footer>
        <Button variant="contained" color="success"onClick={()=>this.handleButton()}><LinkItem to='/home'>Save</LinkItem></Button>
        </Footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chartData: getChartData(state),
});


const mapDispatchToProps = (dispatch) => {
  return {
    storeChartData: (data) => dispatch(actions.storeChartData(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateSection);

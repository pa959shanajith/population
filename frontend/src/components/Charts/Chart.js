import React from 'react'
import {Chart,Coordinate,Interval} from 'bizcharts';
import './Chart.css';

export default function NewChart(props) {
  return (
    <>
            <Chart height={400} width={"100%"} data={props.populationData} autoFit>
              <Coordinate transpose />
              <Interval position="country*population" />
            </Chart>
    </>
  )
}

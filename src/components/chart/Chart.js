import React from 'react'
import "./chart.css"
import {ResponsiveContainer,LineChart,XAxis,Line,Tooltip,CartesianGrid} from 'recharts'


const Chart = ({title,UserData,dataKey1,dataKey2,grid}) => {


  return (
    <div className="chart">
        <h3 className="chart-title">
            {title}
        </h3>

        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={UserData}>
                <XAxis dataKey="name"  stroke="#5550bd" />
                <Line type="monotone" dataKey={dataKey1} stroke="#8884d8" />
                <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" />
                    <Tooltip/>
                    {grid && <CartesianGrid strokeDasharray="3 3" /> }
                    
            </LineChart>

        </ResponsiveContainer>
    
    </div>
  )
}

export default Chart
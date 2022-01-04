import React, { PureComponent } from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { gpuData } from '/gpu-data'
import { newGpuData } from '../newGpuData';

class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, stroke, payload } = this.props;
  
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
            {payload.value}
          </text>
        </g>
      );
    }
  }

export default function Chart() {
    return (
        <ResponsiveContainer width="100%" aspect={3}>
            
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 70,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="Model" name="Model"  interval={0} minTickGap={20} tick={<CustomizedAxisTick />}/>
          <YAxis type="number" dataKey="Benchmark" name="Benchmark"  />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} payload={[{ Name: 'Model'}]}/>
          <Scatter name="A school" data={newGpuData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    )
}

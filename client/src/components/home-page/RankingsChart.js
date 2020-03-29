import React, { PureComponent } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

class RankingsChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={this.props.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="month" />
          <YAxis type="number" domain={[1, 'dataMax + 10']} reversed={true}/>
          <Tooltip />
          <Line type="monotone" dataKey="Rank" stroke="#49A067" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default RankingsChart

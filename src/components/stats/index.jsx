import React, { useContext } from 'react';
import { Card, Statistic, Typography } from 'antd';
import { ThemeContext } from '../../layout';

const { Title } = Typography;

const Stats = ({ title, value, darkBg, lightBg, icon }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <Card style={
      dark ? { background: darkBg, border: '1px solid #d1d1d1', padding: '12px'}
      : 
      {background: lightBg, border: '1px solid #d1d1d1', padding: '12px'}
    }>
      <Statistic title={
        <Title style={{ color: '#4b5563' }} level={3}>{title}</Title>
      } value={value} suffix={icon} />
    </Card>
  )
}

export default Stats;

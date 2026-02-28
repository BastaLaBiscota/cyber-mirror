import React from 'react';
import {
  Radar, RadarChart as RechartsRadar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';

const RadarChart = ({ data }) => {
  // Transformation des données pour Recharts
  const chartData = [
    { subject: 'Mots de passe', A: data.password, fullMark: 100 },
    { subject: 'Navigation', A: data.browsing, fullMark: 100 },
    { subject: 'Réseaux Sociaux', A: data.social, fullMark: 100 },
    { subject: 'Emails', A: data.email, fullMark: 100 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsRadar cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Niveau de Risque"
          dataKey="A"
          stroke="#4f46e5"
          fill="#4f46e5"
          fillOpacity={0.6}
        />
      </RechartsRadar>
    </ResponsiveContainer>
  );
};

export default RadarChart;

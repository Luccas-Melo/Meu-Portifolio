import React, { useEffect, useRef } from 'react';
import { ChartData } from '../../types';

interface LineChartProps {
  data: ChartData;
  height?: number;
  className?: string;
}

// This is a simplified chart component using canvas
// In a real app, you'd use a library like Chart.js or Recharts
const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  height = 300,
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set dimensions
    const chartWidth = canvas.width;
    const chartHeight = canvas.height;
    const padding = 40;
    const availableWidth = chartWidth - (padding * 2);
    const availableHeight = chartHeight - (padding * 2);
    
    // Find the max value in the data
    const maxValue = Math.max(...data.datasets[0].data);
    
    // Draw line
    ctx.strokeStyle = data.datasets[0].borderColor as string || '#7c3aed';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    data.datasets[0].data.forEach((value, index) => {
      const x = padding + (index * (availableWidth / (data.labels.length - 1)));
      const y = chartHeight - padding - ((value / maxValue) * availableHeight);
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      
      // Draw points
      ctx.fillStyle = data.datasets[0].borderColor as string || '#7c3aed';
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw label
      ctx.fillStyle = '#666';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(data.labels[index], x, chartHeight - padding + 15);
      
      // Draw value
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(value.toString(), x, y - 15);
    });
    
    ctx.stroke();
    
    // Draw area under the line if background color is provided
    if (data.datasets[0].backgroundColor) {
      ctx.lineTo(padding + availableWidth, chartHeight - padding);
      ctx.lineTo(padding, chartHeight - padding);
      ctx.closePath();
      ctx.fillStyle = data.datasets[0].backgroundColor as string;
      ctx.globalAlpha = 0.1;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    
    // Draw axes
    ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, chartHeight - padding);
    ctx.lineTo(chartWidth - padding, chartHeight - padding);
    ctx.stroke();
    
    // Draw title
    ctx.fillStyle = '#333';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(data.datasets[0].label, chartWidth / 2, 20);
  }, [data]);
  
  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        height={height}
        width={500}
        className="w-full"
      />
    </div>
  );
};

export default LineChart;
import React, { useEffect, useRef } from 'react';
import { ChartData } from '../../types';

interface BarChartProps {
  data: ChartData;
  height?: number;
  className?: string;
}

// This is a simplified chart component using canvas
// In a real app, you'd use a library like Chart.js or Recharts
const BarChart: React.FC<BarChartProps> = ({ 
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
    
    // Draw bars
    const barWidth = availableWidth / data.labels.length - 10;
    
    data.datasets[0].data.forEach((value, index) => {
      const barHeight = (value / maxValue) * availableHeight;
      const x = padding + (index * (barWidth + 10));
      const y = chartHeight - padding - barHeight;
      
      // Draw bar
      ctx.fillStyle = Array.isArray(data.datasets[0].backgroundColor) 
        ? data.datasets[0].backgroundColor[index] as string
        : data.datasets[0].backgroundColor as string || '#7c3aed';
      ctx.fillRect(x, y, barWidth, barHeight);
      
      // Draw label
      ctx.fillStyle = '#666';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(data.labels[index], x + barWidth / 2, chartHeight - padding + 15);
      
      // Draw value
      ctx.fillStyle = '#333';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(value.toString(), x + barWidth / 2, y - 5);
    });
    
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

export default BarChart;
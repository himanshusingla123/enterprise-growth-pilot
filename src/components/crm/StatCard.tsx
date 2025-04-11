
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  className?: string;
}

const StatCard = ({ title, value, change, trend, icon, className }: StatCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            
            {typeof change !== 'undefined' && trend && (
              <div className="flex items-center mt-2">
                <div className={cn(
                  "flex items-center text-xs font-medium rounded-full px-1.5 py-0.5",
                  trend === 'up' ? "text-green-700 bg-green-100" : 
                  trend === 'down' ? "text-red-700 bg-red-100" : 
                  "text-gray-700 bg-gray-100"
                )}>
                  {trend === 'up' ? <ArrowUp size={12} /> : 
                   trend === 'down' ? <ArrowDown size={12} /> : null}
                  <span className="ml-0.5">{change}%</span>
                </div>
                <span className="text-xs text-gray-500 ml-1.5">from last month</span>
              </div>
            )}
          </div>
          
          {icon && (
            <div className="p-2 bg-crm-50 rounded-lg">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;

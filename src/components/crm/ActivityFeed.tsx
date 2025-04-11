
import { ActivityItem } from '@/types/crm';
import { cn } from '@/lib/utils';
import { format, formatDistanceToNow } from 'date-fns';

interface ActivityFeedProps {
  activities: ActivityItem[];
  className?: string;
}

const ActivityFeed = ({ activities, className }: ActivityFeedProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-lg font-medium">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const date = new Date(activity.timestamp);
          const formattedDate = formatDistanceToNow(date, { addSuffix: true });
          
          return (
            <div key={activity.id} className="flex gap-3">
              <div className="relative flex-shrink-0">
                <div className="h-9 w-9 rounded-full bg-crm-100 flex items-center justify-center">
                  <span className="text-crm-600 text-sm font-medium">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-crm-500" />
              </div>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.user}</p>
                  <time className="text-xs text-gray-500" dateTime={activity.timestamp}>
                    {formattedDate}
                  </time>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;

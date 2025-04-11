
import React from 'react';
import { Users, DollarSign, CheckCircle2, BarChart2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatCard from '@/components/crm/StatCard';
import StatusBadge from '@/components/crm/StatusBadge';
import ActivityFeed from '@/components/crm/ActivityFeed';

import { dashboardStats, leads, tasks, activities } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';

const Dashboard = () => {
  const recentLeads = leads.slice(0, 5);
  const upcomingTasks = tasks
    .filter(task => task.status !== 'completed')
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 5);
  
  const icons = [
    <Users size={20} className="text-crm-500" />,
    <CheckCircle2 size={20} className="text-crm-500" />,
    <BarChart2 size={20} className="text-crm-500" />,
    <DollarSign size={20} className="text-crm-500" />,
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((stat, index) => (
          <StatCard
            key={stat.label}
            title={stat.label}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            icon={icons[index]}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Tabs defaultValue="recent" className="col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Leads</h2>
            <TabsList>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="hot">Hot</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="recent">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Name</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Company</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Value</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Created</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentLeads.map((lead) => (
                        <tr key={lead.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-900">{lead.name}</td>
                          <td className="px-4 py-3 text-gray-600">{lead.company}</td>
                          <td className="px-4 py-3">
                            <StatusBadge status={lead.status} />
                          </td>
                          <td className="px-4 py-3 text-gray-600">${lead.value.toLocaleString()}</td>
                          <td className="px-4 py-3 text-gray-500">
                            {formatDistanceToNow(new Date(lead.createdAt), { addSuffix: true })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="hot">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-4">
                  <p className="text-gray-500">Filtering by high-value leads...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-start gap-2 pb-4 border-b last:border-0 last:pb-0">
                    <div className={`mt-0.5 w-2 h-2 rounded-full ${
                      task.priority === 'high' 
                        ? 'bg-red-500' 
                        : task.priority === 'medium' 
                          ? 'bg-amber-500' 
                          : 'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{task.title}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Due {formatDistanceToNow(new Date(task.dueDate), { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <ActivityFeed activities={activities.slice(0, 3)} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

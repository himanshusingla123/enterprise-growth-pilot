
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, RefreshCcw } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

import { leads } from '@/data/mockData';

// Transform data for charts
const leadsStatusData = [
  { name: 'New', value: leads.filter(lead => lead.status === 'new').length },
  { name: 'Contacted', value: leads.filter(lead => lead.status === 'contacted').length },
  { name: 'Qualified', value: leads.filter(lead => lead.status === 'qualified').length },
  { name: 'Proposal', value: leads.filter(lead => lead.status === 'proposal').length },
  { name: 'Negotiation', value: leads.filter(lead => lead.status === 'negotiation').length },
  { name: 'Won', value: leads.filter(lead => lead.status === 'won').length },
  { name: 'Lost', value: leads.filter(lead => lead.status === 'lost').length },
];

const leadSourceData = [
  { name: 'Website', value: leads.filter(lead => lead.source === 'Website').length },
  { name: 'Referral', value: leads.filter(lead => lead.source === 'Referral').length },
  { name: 'Google Ads', value: leads.filter(lead => lead.source === 'Google Ads').length },
  { name: 'LinkedIn', value: leads.filter(lead => lead.source === 'LinkedIn').length },
  { name: 'Trade Show', value: leads.filter(lead => lead.source === 'Trade Show').length },
  { name: 'Direct Mail', value: leads.filter(lead => lead.source === 'Direct Mail').length },
  { name: 'Email Campaign', value: leads.filter(lead => lead.source === 'Email Campaign').length },
];

const monthlyData = [
  { name: 'Jan', leads: 8, value: 12000 },
  { name: 'Feb', leads: 12, value: 18000 },
  { name: 'Mar', leads: 15, value: 22000 },
  { name: 'Apr', leads: 10, value: 15000 },
  { name: 'May', leads: 0, value: 0 },
  { name: 'Jun', leads: 0, value: 0 },
  { name: 'Jul', leads: 0, value: 0 },
  { name: 'Aug', leads: 0, value: 0 },
  { name: 'Sep', leads: 0, value: 0 },
  { name: 'Oct', leads: 0, value: 0 },
  { name: 'Nov', leads: 0, value: 0 },
  { name: 'Dec', leads: 0, value: 0 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ff6b6b'];

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Reports & Analytics</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <RefreshCcw className="h-4 w-4" />
            <span>Refresh</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="leads">Lead Reports</TabsTrigger>
          <TabsTrigger value="sales">Sales Reports</TabsTrigger>
          <TabsTrigger value="performance">Performance Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="leads">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lead Status Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={leadsStatusData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#4095eb" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Lead Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={leadSourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {leadSourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Monthly Lead Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="leads"
                        stroke="#1259b3"
                        activeDot={{ r: 8 }}
                        name="New Leads"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="value"
                        stroke="#00C49F"
                        name="Lead Value ($)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="sales">
          <div className="flex items-center justify-center p-12">
            <div className="text-center space-y-3">
              <h3 className="text-xl font-medium">Sales Reports Coming Soon</h3>
              <p className="text-gray-500">
                We're working on comprehensive sales reports and analytics.
                <br />Check back later for detailed insights on your sales performance.
              </p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="performance">
          <div className="flex items-center justify-center p-12">
            <div className="text-center space-y-3">
              <h3 className="text-xl font-medium">Performance Reports Coming Soon</h3>
              <p className="text-gray-500">
                Team and individual performance metrics are currently in development.
                <br />These reports will help you track productivity and success rates.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;

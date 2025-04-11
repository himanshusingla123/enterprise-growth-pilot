
import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Calendar, 
  Clock, 
  User, 
  CheckCircle2, 
  Circle, 
  XCircle,
  AlertCircle,
  MoreHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { tasks, users } from '@/data/mockData';
import { Task } from '@/types/crm';

const Tasks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const pendingTasks = tasks.filter(task => task.status === 'pending' || task.status === 'in-progress');
  const completedTasks = tasks.filter(task => task.status === 'completed');
  
  const getAssignedUser = (userId: string) => {
    return users.find(user => user.id === userId)?.name || 'Unassigned';
  };
  
  const getPriorityIcon = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'medium':
        return <Clock className="h-4 w-4 text-amber-500" />;
      case 'low':
        return <Circle className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };
  
  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-amber-500" />;
      case 'in-progress':
        return <Circle className="h-4 w-4 text-blue-500" />;
      case 'deferred':
        return <XCircle className="h-4 w-4 text-gray-500" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
        <Button className="bg-crm-600 hover:bg-crm-700">
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search tasks..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="pending" className="flex gap-2">
            <Circle className="h-4 w-4" />
            Pending
          </TabsTrigger>
          <TabsTrigger value="completed" className="flex gap-2">
            <CheckCircle2 className="h-4 w-4" />
            Completed
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Task</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Priority</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Due Date</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Assigned To</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Related To</th>
                      <th className="px-4 py-3 text-center font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingTasks.map((task) => (
                      <tr key={task.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">
                          {task.title}
                          {task.description && (
                            <p className="text-xs text-gray-500 mt-1">{task.description}</p>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            {getPriorityIcon(task.priority)}
                            <span className="ml-1.5 capitalize">{task.priority}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            {getStatusIcon(task.status)}
                            <span className="ml-1.5 capitalize">{task.status.replace('-', ' ')}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="mr-1.5 h-4 w-4 text-gray-500" />
                            {new Date(task.dueDate).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <User className="mr-1.5 h-4 w-4 text-gray-500" />
                            {getAssignedUser(task.assignedTo)}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {task.relatedTo 
                            ? `${task.relatedTo.type.charAt(0).toUpperCase() + task.relatedTo.type.slice(1)} #${task.relatedTo.id}`
                            : '-'}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-36">
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Complete</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Task</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Priority</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Due Date</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Completed On</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-500">Assigned To</th>
                      <th className="px-4 py-3 text-center font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {completedTasks.map((task) => (
                      <tr key={task.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">
                          <span className="line-through">{task.title}</span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            {getPriorityIcon(task.priority)}
                            <span className="ml-1.5 capitalize">{task.priority}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {new Date(task.dueDate).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {new Date(task.updatedAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {getAssignedUser(task.assignedTo)}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-36">
                              <DropdownMenuItem>Reopen</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tasks;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Save, Bell, Lock, Users, Globe, Database, Wrench } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      </div>
      
      <Tabs defaultValue="profile" className="w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-64 flex-shrink-0">
            <TabsList className="flex flex-col w-full h-auto bg-transparent space-y-1">
              <TabsTrigger 
                value="profile" 
                className="justify-start px-3 py-2 h-9 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger 
                value="account" 
                className="justify-start px-3 py-2 h-9 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
              >
                Account
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="justify-start px-3 py-2 h-9 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
              >
                Notifications
              </TabsTrigger>
              <Separator className="my-2" />
              <TabsTrigger 
                value="team" 
                className="justify-start px-3 py-2 h-9 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
              >
                Team Members
              </TabsTrigger>
              <TabsTrigger 
                value="integrations" 
                className="justify-start px-3 py-2 h-9 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
              >
                Integrations
              </TabsTrigger>
              <TabsTrigger 
                value="api" 
                className="justify-start px-3 py-2 h-9 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
              >
                API
              </TabsTrigger>
              <Separator className="my-2" />
              <TabsTrigger 
                value="system" 
                className="justify-start px-3 py-2 h-9 data-[state=active]:bg-gray-100 data-[state=active]:shadow-none"
              >
                System Settings
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="flex-1">
            <TabsContent value="profile" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                  <CardDescription>
                    Manage your personal information and preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="https://ui-avatars.com/api/?name=John+Smith&background=0D8ABC&color=fff" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-xl font-medium">John Smith</h3>
                      <p className="text-sm text-gray-500">Administrator</p>
                      <Button variant="outline" size="sm">Change Photo</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" defaultValue="John Smith" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input id="jobTitle" defaultValue="Sales Director" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.smith@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <select 
                        id="timezone" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crm-400"
                        defaultValue="America/New_York"
                      >
                        <option value="America/New_York">Eastern Time (US & Canada)</option>
                        <option value="America/Chicago">Central Time (US & Canada)</option>
                        <option value="America/Denver">Mountain Time (US & Canada)</option>
                        <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                        <option value="Europe/London">London</option>
                        <option value="Europe/Paris">Paris</option>
                        <option value="Asia/Tokyo">Tokyo</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-crm-600 hover:bg-crm-700">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="account" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Account Security</CardTitle>
                  <CardDescription>
                    Manage your password and security settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Security</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-sm font-medium">Two-factor Authentication</div>
                        <div className="text-sm text-gray-500">
                          Add an extra layer of security to your account
                        </div>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-sm font-medium">Active Sessions</div>
                        <div className="text-sm text-gray-500">
                          Manage your active sessions on different devices
                        </div>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-crm-600 hover:bg-crm-700">
                      <Lock className="mr-2 h-4 w-4" />
                      Update Security
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Control how and when you receive notifications.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-sm font-medium">New Leads</div>
                          <div className="text-xs text-gray-500">
                            Receive email notifications when new leads are created
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-sm font-medium">Task Assignments</div>
                          <div className="text-xs text-gray-500">
                            Receive email notifications when you are assigned a task
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-sm font-medium">Task Reminders</div>
                          <div className="text-xs text-gray-500">
                            Receive email reminders for upcoming tasks
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-sm font-medium">Deal Updates</div>
                          <div className="text-xs text-gray-500">
                            Receive emails when deals change status
                          </div>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">In-App Notifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-sm font-medium">Lead Activity</div>
                          <div className="text-xs text-gray-500">
                            Show notifications for lead updates and activity
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-sm font-medium">Team Mentions</div>
                          <div className="text-xs text-gray-500">
                            Get notified when someone mentions you in comments
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-sm font-medium">System Updates</div>
                          <div className="text-xs text-gray-500">
                            Receive notifications about system updates and maintenance
                          </div>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-crm-600 hover:bg-crm-700">
                      <Bell className="mr-2 h-4 w-4" />
                      Save Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="team" className="mt-0">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Team Members</CardTitle>
                      <CardDescription>
                        Manage your team and their permissions.
                      </CardDescription>
                    </div>
                    <Button className="bg-crm-600 hover:bg-crm-700">
                      <Users className="mr-2 h-4 w-4" />
                      Invite User
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">
                      You have 4 team members in your organization.
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-gray-50">
                            <th className="px-4 py-3 text-left font-medium text-gray-500">User</th>
                            <th className="px-4 py-3 text-left font-medium text-gray-500">Role</th>
                            <th className="px-4 py-3 text-left font-medium text-gray-500">Department</th>
                            <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                            <th className="px-4 py-3 text-left font-medium text-gray-500">Last Active</th>
                            <th className="px-4 py-3 text-right font-medium text-gray-500">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src={user.avatar} />
                                    <AvatarFallback>
                                      {user.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <div className="font-medium">{user.name}</div>
                                    <div className="text-xs text-gray-500">{user.email}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3 capitalize">{user.role}</td>
                              <td className="px-4 py-3">{user.department}</td>
                              <td className="px-4 py-3">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Active
                                </span>
                              </td>
                              <td className="px-4 py-3 text-gray-500">
                                {new Date(user.lastActive || '').toLocaleString()}
                              </td>
                              <td className="px-4 py-3 text-right">
                                <Button variant="ghost" size="sm">Edit</Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="integrations" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Integrations & Add-ons</CardTitle>
                  <CardDescription>
                    Connect with other services and extend functionality.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
                          <Globe className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email Integration</h3>
                          <p className="text-sm text-gray-500">Connect with Gmail, Outlook, or SMTP</p>
                        </div>
                      </div>
                      <Button variant="outline">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.87207 10.5683C4.72463 10.3282 4.8472 10.0222 5.1049 9.912L22.2944 2.13948C22.529 2.0381 22.7814 2.22662 22.7556 2.47729L20.0822 21.6296C20.0589 21.8516 19.8274 21.9915 19.6214 21.9013L14.2641 19.6851C14.1265 19.6244 13.9697 19.6511 13.858 19.755L9.39988 23.8266C9.19607 24.0135 8.87492 23.8755 8.86374 23.6067L8.51552 13.1686C8.51106 13.0553 8.55959 12.9461 8.64727 12.8697L14.6659 7.67703C14.9243 7.45445 14.8293 7.02232 14.5046 6.93144L5.3729 4.22695C5.14806 4.16535 5.04573 3.92356 5.15517 3.72274L9.00865 -3.05176e-05C9.1436 -0.245471 9.50467 -0.243211 9.63623 0.00393133L19.4012 19.3184C19.5064 19.5155 19.3703 19.7568 19.1486 19.782L9.17378 20.9704C9.00259 20.9892 8.84244 20.8947 8.78657 20.7336L4.87207 10.5683Z" fill="#7540EE" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Slack</h3>
                          <p className="text-sm text-gray-500">Get real-time notifications in your Slack workspace</p>
                        </div>
                      </div>
                      <Button variant="outline">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.1787 11.5216V5.95613C23.1787 4.84262 22.2756 3.93945 21.1621 3.93945H11.5966C10.9145 3.93945 10.2638 4.21079 9.7955 4.68308L0.797876 13.6807C-0.265959 14.7446 -0.265959 16.4589 0.797876 17.5228L6.47711 23.2021C7.54094 24.266 9.25525 24.266 10.3191 23.2021L19.3167 14.2045C19.789 13.7362 20.0603 13.0856 20.0603 12.4035V11.5216H23.1787ZM17.0235 6.98184C18.137 6.98184 19.0401 7.885 19.0401 8.99851C19.0401 10.112 18.137 11.0152 17.0235 11.0152C15.91 11.0152 15.0068 10.112 15.0068 8.99851C15.0068 7.885 15.91 6.98184 17.0235 6.98184Z" fill="#FF8900"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Zapier</h3>
                          <p className="text-sm text-gray-500">Create automations with 3000+ apps</p>
                        </div>
                      </div>
                      <Button variant="outline">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.01 21.86C13.01 22.0117 12.8932 22.1667 12.7245 22.2245C12.5559 22.2823 12.3658 22.2308 12.25 22.1L8 17.15H5C3.34 17.15 2 15.81 2 14.15V6.84998C2 5.18998 3.34 3.84998 5 3.84998H19C20.66 3.84998 22 5.18998 22 6.84998V14.15C22 15.81 20.66 17.15 19 17.15H16L13.1 20.74C13.05 20.8 13.01 20.87 13.01 20.95V21.86Z" fill="#22C55E"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium">Twilio</h3>
                          <p className="text-sm text-gray-500">Send SMS and voice calls to leads</p>
                        </div>
                      </div>
                      <Button variant="outline">Connect</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="api" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>API Access</CardTitle>
                  <CardDescription>
                    Generate and manage API keys for developers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                      <div>
                        <h3 className="font-medium">Your API Key</h3>
                        <p className="text-sm text-gray-500 mt-1">Use this key to authenticate API requests</p>
                        <div className="mt-2 flex items-center gap-2">
                          <code className="px-3 py-1 bg-gray-100 rounded text-gray-800 text-sm font-mono">
                            •••••••••••••••••••••••••••
                          </code>
                          <Button variant="outline" size="sm">Show</Button>
                          <Button variant="outline" size="sm">Copy</Button>
                        </div>
                      </div>
                      <Button variant="outline">Regenerate</Button>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">API Usage</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border rounded-lg bg-white">
                          <div className="text-2xl font-bold">2,451</div>
                          <div className="text-sm text-gray-500">Total Requests (30 days)</div>
                        </div>
                        <div className="p-4 border rounded-lg bg-white">
                          <div className="text-2xl font-bold">87%</div>
                          <div className="text-sm text-gray-500">Success Rate</div>
                        </div>
                        <div className="p-4 border rounded-lg bg-white">
                          <div className="text-2xl font-bold">120ms</div>
                          <div className="text-sm text-gray-500">Average Response Time</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">API Documentation</h3>
                        <Button variant="outline">
                          Open Docs
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500">
                        Refer to our comprehensive API documentation for endpoints, request and response formats, and best practices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="system" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>
                    Configure global system settings and defaults.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">General Settings</h3>
                      
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name</Label>
                          <Input id="companyName" defaultValue="Acme Corporation" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="dateFormat">Date Format</Label>
                          <select 
                            id="dateFormat" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crm-400"
                            defaultValue="MM/DD/YYYY"
                          >
                            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="timeFormat">Time Format</Label>
                          <select 
                            id="timeFormat" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crm-400"
                            defaultValue="12"
                          >
                            <option value="12">12-hour (AM/PM)</option>
                            <option value="24">24-hour</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="currencySymbol">Currency Symbol</Label>
                          <Input id="currencySymbol" defaultValue="$" />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Lead Settings</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="text-sm font-medium">Auto-assign new leads</div>
                            <div className="text-xs text-gray-500">
                              Automatically assign new leads to sales representatives
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="text-sm font-medium">Duplicate detection</div>
                            <div className="text-xs text-gray-500">
                              Alert when adding leads that might be duplicates
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="leadScoring">Lead Scoring Threshold</Label>
                          <Input id="leadScoring" type="number" defaultValue="50" />
                          <p className="text-xs text-gray-500">
                            Leads with scores above this threshold are considered high quality
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Database & Maintenance</h3>
                      
                      <div className="grid gap-4 grid-cols-2">
                        <Button variant="outline" className="flex items-center gap-1">
                          <Database className="h-4 w-4" />
                          <span>Backup Data</span>
                        </Button>
                        
                        <Button variant="outline" className="flex items-center gap-1">
                          <Wrench className="h-4 w-4" />
                          <span>System Diagnostics</span>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button className="bg-crm-600 hover:bg-crm-700">
                        Save System Settings
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Settings;

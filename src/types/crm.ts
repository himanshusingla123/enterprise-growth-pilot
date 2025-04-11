
// Core CRM types
export type Role = 'admin' | 'manager' | 'sales' | 'support';

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  department?: string;
  lastActive?: string;
};

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'won' | 'lost';

export type Lead = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: LeadStatus;
  source: string;
  assignedTo: string;
  value: number;
  createdAt: string;
  updatedAt: string;
  lastContactedAt?: string;
  notes?: string;
  tags?: string[];
};

export type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  leadId?: string;
  createdAt: string;
  updatedAt: string;
  lastContactedAt?: string;
};

export type Communication = {
  id: string;
  type: 'email' | 'call' | 'meeting' | 'note';
  leadId?: string;
  contactId?: string;
  userId: string;
  content: string;
  createdAt: string;
  scheduledFor?: string;
  completed: boolean;
};

export type Task = {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  assignedTo: string;
  relatedTo?: { type: 'lead' | 'contact'; id: string };
  status: 'pending' | 'in-progress' | 'completed' | 'deferred';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
};

export type DashboardStat = {
  label: string;
  value: number | string;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
};

export type ActivityItem = {
  id: string;
  type: 'lead_created' | 'lead_updated' | 'communication' | 'task_completed';
  user: string;
  description: string;
  timestamp: string;
  relatedTo?: { type: 'lead' | 'contact' | 'task'; id: string };
};

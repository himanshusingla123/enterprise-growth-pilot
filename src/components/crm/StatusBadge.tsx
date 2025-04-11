
import { cn } from '@/lib/utils';
import { LeadStatus } from '@/types/crm';

type StatusMap = {
  [key in LeadStatus]: {
    label: string;
    color: string;
  };
};

const statusMap: StatusMap = {
  new: {
    label: 'New',
    color: 'bg-blue-100 text-blue-800',
  },
  contacted: {
    label: 'Contacted',
    color: 'bg-purple-100 text-purple-800',
  },
  qualified: {
    label: 'Qualified',
    color: 'bg-teal-100 text-teal-800',
  },
  proposal: {
    label: 'Proposal',
    color: 'bg-amber-100 text-amber-800',
  },
  negotiation: {
    label: 'Negotiation',
    color: 'bg-orange-100 text-orange-800',
  },
  won: {
    label: 'Won',
    color: 'bg-green-100 text-green-800',
  },
  lost: {
    label: 'Lost',
    color: 'bg-red-100 text-red-800',
  },
};

interface StatusBadgeProps {
  status: LeadStatus;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const { label, color } = statusMap[status];
  
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
      color,
      className
    )}>
      {label}
    </span>
  );
};

export default StatusBadge;

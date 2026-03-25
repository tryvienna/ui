import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge, StatusIndicator, StatusIcon } from './status';

const meta = {
  title: 'Domain/Status',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BadgePill: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <StatusBadge status="todo" />
      <StatusBadge status="pending" />
      <StatusBadge status="in_progress" />
      <StatusBadge status="active" />
      <StatusBadge status="done" />
      <StatusBadge status="completed" />
      <StatusBadge status="blocked" />
      <StatusBadge status="cancelled" />
      <StatusBadge status="error" />
    </div>
  ),
};

export const BadgeDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <StatusBadge status="active" variant="dot" />
      <StatusBadge status="done" variant="dot" />
      <StatusBadge status="error" variant="dot" />
      <StatusBadge status="pending" variant="dot" />
    </div>
  ),
};

export const BadgeText: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <StatusBadge status="active" variant="text" />
      <StatusBadge status="done" variant="text" />
      <StatusBadge status="blocked" variant="text" />
    </div>
  ),
};

export const Indicators: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <StatusIndicator status="todo" /> <span className="text-sm">Todo</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusIndicator status="in_progress" /> <span className="text-sm">In Progress</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusIndicator status="done" /> <span className="text-sm">Done</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusIndicator status="blocked" /> <span className="text-sm">Blocked</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusIndicator status="cancelled" /> <span className="text-sm">Cancelled</span>
      </div>
    </div>
  ),
};

export const WorkstreamIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <StatusIcon status="ACTIVE" /> <span className="text-sm">Active</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusIcon status="PROCESSING" /> <span className="text-sm">Processing</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusIcon status="NEEDS_REVIEW" /> <span className="text-sm">Needs Review</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusIcon status="COMPLETED_UNVIEWED" /> <span className="text-sm">Completed</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusIcon status="NEEDS_MANUAL_VERIFICATION" />{' '}
        <span className="text-sm">Verification</span>
      </div>
    </div>
  ),
};

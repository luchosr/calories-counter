import type { Activity } from '../types';

type CaloryTrackerProps = {
  activities: Activity[];
};

export default function CaloryTracker({ activities }: CaloryTrackerProps) {
  return <div>CaloryTracker</div>;
}

export interface TrackerConfig {
  id: string;
  label: string;
  color: string; // Hex color for the marker
}

export const TRACKERS: TrackerConfig[] = [
  { id: 'car-1', label: 'car 1', color: '#FF6B6B' }, // Red
  { id: 'car-2', label: 'car 2', color: '#4ECDC4' }, // Teal
  { id: 'car-3', label: 'car 3', color: '#45B7D1' }, // Blue
  { id: 'car-4', label: 'car 4', color: '#FFA07A' }, // Orange
];

export const getTrackerById = (id: string): TrackerConfig | undefined => {
  return TRACKERS.find(tracker => tracker.id === id);
};

export const getTrackerColor = (id: string): string => {
  const tracker = getTrackerById(id);
  return tracker?.color || '#000000';
};

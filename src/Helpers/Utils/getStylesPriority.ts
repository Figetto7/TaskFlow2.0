export default function getStylesPriority(priority: 'low' | 'medium' | 'high' | "Choose a priority"): {  priorityText: string } {
  switch (priority) {
    case 'high':
      return { priorityText: 'var(--priority-high-text)' };
    case 'medium':
      return { priorityText: 'var(--priority-medium-text)' };
    case 'low':
      return { priorityText: 'var(--priority-low-text)' };
    default:
      return { priorityText: 'black' };
  }
}
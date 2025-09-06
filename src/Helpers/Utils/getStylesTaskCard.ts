export default function getStylesTaskCard(status: 'completed' | 'pending' | 'overdue'): { titleColor: string; subtitleColor: string } {
  switch (status) {
    case 'completed':
      return { titleColor: 'var(--completed-title)', subtitleColor: 'var(--completed-subtitle)' };
    case 'pending':
      return { titleColor: 'var(--pending-title)', subtitleColor: 'var(--pending-subtitle)' };
    case 'overdue':
      return { titleColor: 'var(--overdue-title)', subtitleColor: 'var(--overdue-subtitle)' };
    default:
      return { titleColor: 'black', subtitleColor: 'gray' };
  }
}
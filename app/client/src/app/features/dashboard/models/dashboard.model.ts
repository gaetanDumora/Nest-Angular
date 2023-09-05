export interface DashboardData {
  usersCreation: Record<string, any>;
  degrees: Record<string, any>;
  genders: Record<string, any>;
  workSituations: Record<string, any>;
}

export type ChartTypes = 'bar' | 'doughnut' | 'line';

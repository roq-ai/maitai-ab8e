const mapping: Record<string, string> = {
  employers: 'employer',
  invitations: 'invitation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

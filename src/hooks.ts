import { skipToken, useQuery } from '@tanstack/react-query';

import { getSearchData } from './service';

export function useSearch(query?: string) {
  return useQuery({
    queryKey: [{ scope: 'search', searchFor: query }],
    queryFn: query === undefined ? skipToken : () => getSearchData(query),
  });
}

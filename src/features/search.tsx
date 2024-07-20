'use client';

import SearchForm from '@/components/search-form';
import SearchList from '@/components/search-list/search-list';
import SearchListLoader from '@/components/search-list/search-list-loader';
import { useSearch } from '@/hooks';
import React from 'react';

function Search() {
  const [searchQuery, setSearchQuery] = React.useState<string | undefined>(
    undefined
  );
  const search = useSearch(searchQuery);

  function handleSubmit(query?: string) {
    if (query === undefined) {
      setSearchQuery('');
      return;
    }

    setSearchQuery(query);
  }

  return (
    <main>
      <div className="mb-5">
        <SearchForm onSubmit={handleSubmit} />
      </div>
      {search.status === 'pending' && search.isFetching ? (
        <SearchListLoader />
      ) : null}
      {search.status === 'success' ? (
        <SearchList>{search.data}</SearchList>
      ) : null}
    </main>
  );
}

export default Search;

'use client';

import { inputSchema } from '@/schemas';
import React from 'react';
import { Button, TextField } from 'reshaped';

type Props = {
  onSubmit: (query?: string) => void;
};

function SearchForm(props: Readonly<Props>) {
  const searchInputId = React.useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchValue = formData.get(searchInputId);

    props.onSubmit(
      searchValue ? String(inputSchema.parse(searchValue)) : undefined
    );
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <TextField
        className="w-full"
        id={searchInputId}
        name={searchInputId}
        placeholder="Search for..."
      />
      <Button type="submit">Search</Button>
    </form>
  );
}

export default SearchForm;

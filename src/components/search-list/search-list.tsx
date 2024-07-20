import type { SearchResult } from '@/types';
import React from 'react';
import { Card, Text } from 'reshaped';

import Anchor from '../anchor';
import Chip from '../chip';
import CategoryIcon from './category-icon';

type Props = {
  children: SearchResult;
};

function formatCategory(category: string) {
  return category.toLowerCase().replaceAll('_', ' ');
}

function SearchList(props: Readonly<Props>) {
  if (props.children.length === 0) {
    return <p>There are no results matching your query.</p>;
  }

  return (
    <ul>
      {props.children.map((item) => (
        <Card as="li" key={item.id} className="[&:not(:last-child)]:mb-3">
          <Anchor
            href={item.url}
            target="_blank"
            className="flex gap-5 items-center"
          >
            <CategoryIcon category={item.category} />
            <div className="flex flex-col gap-1 justify-center">
              <Text variant="body-1">{item.title}</Text>
              <Text className="mb-3" variant="body-3">
                {item.description}
              </Text>
              {<Chip>tag: {formatCategory(item.category)}</Chip>}
            </div>
          </Anchor>
        </Card>
      ))}
    </ul>
  );
}

export default SearchList;

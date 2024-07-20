import type { IconKind, SearchResult } from '@/types';
import { Icon } from 'reshaped';

import FeatherIcon from '../feather-icon';

type Category = SearchResult[number]['category'];

const categoryColorRecord: Record<Category, string> = {
  BLOG_POSTS: 'text-green-500',
  PLAYLISTS: 'text-blue-500',
  VIDEOS: 'text-red-500',
};

const categoryIconKindRecord: Record<Category, IconKind> = {
  BLOG_POSTS: 'file-text',
  PLAYLISTS: 'list',
  VIDEOS: 'video',
};

function CategoryIcon(props: { category: Category }) {
  return (
    <Icon
      className={categoryColorRecord[props.category]}
      svg={<FeatherIcon kind={categoryIconKindRecord[props.category]} />}
      size={6}
    />
  );
}

export default CategoryIcon;

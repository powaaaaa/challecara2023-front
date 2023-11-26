import type { ComponentPropsWithoutRef } from 'react';

import { cva } from 'class-variance-authority';

import type * as Types from '@/api/@types';

export type TagItem = {
  id: string;
  label: Types.Tag['name'];
  selected: boolean;
} & object;

export type Props = {
  tagsList: TagItem[];
  onClick: (event: React.MouseEvent<TagItem & HTMLButtonElement>) => void;
} & ComponentPropsWithoutRef<'button'>;

export const Tags: React.FC<Props> = ({ tagsList, onClick, ...props }) => {
  const TagStyle = cva(
    'flex px-3 justify-center items-center gap-2.5 rounded-xl cursor-pointer shadow-yb2',
    {
      variants: {
        selected: {
          false: 'bg-white text-black hover:bg-black-lighten-3',
          true: 'bg-main text-white hover:bg-accent',
        },
      },
    }
  );
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-4">
      {tagsList.map((tag) => (
        <button
          className={TagStyle({ selected: tag.selected })}
          key={tag.id}
          onClick={onClick}
          {...props}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
};

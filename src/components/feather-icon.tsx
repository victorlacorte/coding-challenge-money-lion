import type { IconKind } from '@/types';
import sprite from 'feather-icons/dist/feather-sprite.svg?url';

type Props = {
  kind: IconKind;
};

function FeatherIcon(props: Props) {
  return (
    <svg className="feather">
      <use href={`${sprite}#${props.kind}`} />
    </svg>
  );
}

export default FeatherIcon;

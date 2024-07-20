import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;

  /**
   * @default _self
   */
  target?: '_self' | '_blank';
};

function Anchor(props: Props) {
  return (
    <a
      href={props.href}
      rel="noopener noreferrer"
      target={props.target ?? '_blank'}
      className={props.className}
    >
      {props.children}
    </a>
  );
}

export default Anchor;

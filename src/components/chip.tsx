import React from 'react';
import { Card } from 'reshaped';

type Props = {
  children: React.ReactNode;
};

function Chip(props: Props) {
  return <Card className="badge mr-auto text-sm">{props.children}</Card>;
}

export default Chip;

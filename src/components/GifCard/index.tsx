import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { LAYOUT } from '../../styles';
import { media } from '../../styles/breakpoints';

interface PassProps {
  id: string;
  state: string;
  total: number;
}

type Props = PassProps;

const GifCard = ({ id, state, total }: Props) => {
  return (
    <div>{ total } { id }&nbsp; { state }&nbsp;</div>
  );
};

export default connect<null, PassProps>(null)(GifCard);

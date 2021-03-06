import React, { StatelessComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchGifs, toggleToFavorites } from '../../redux/gifs/actions';
import { Gif } from '../../redux/gifs/reducers';
import { COLORS } from '../../styles';
import { SecondaryButton } from '../../styles/mixins';
import GifCard from '../GifCard';

import '../../styles/styles.css'

import { Tabs } from '../../components/Tabs';
import TabClosed from '../../components/TabClosed';
import TabOpen from '../../components/TabOpen';

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  min-height: calc(100vh - 190px);
  padding-top: 10px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 30px 0px;
  background: ${COLORS.GREEN}
`;

const StyledButton = styled(SecondaryButton)`
  font-size: 16px;
  padding: 10px 20px;
  &:hover {
    background: ${COLORS.BLACK}
  }
`;

interface PassProps {
  searchQuery1: string;
  searchQuery2: string;
}

interface ReduxProps {
  gifs: Gif[];
  searchCount: number;
  searchTotalCount: number;
  searchOffset: number;
  loading: boolean;
  fetchGifs: (searchQuery1, searchQuery2) => void;
  toggleToFavorites: (id: string) => void;
}

type Props = PassProps & ReduxProps;

const SearchGrid = props => {

  const limit = 20;

  const handleClick = () => {
    const { fetchGifs, searchQuery1, searchQuery2 } = props;
    fetchGifs(searchQuery1, searchQuery2);
  };

  const showMore = () => {
    const { searchCount, searchTotalCount } = props;
    if (searchCount === 0) {
      return false;
    }
    if (searchCount === searchTotalCount) {
      return false;
    }
    return true;
  };

  const ComponentOne = () => {
    var One = "Mike";
    var Two = "Tyson";
  };

  const { gifs, loading } = props;

  const tabs = [
    {
      label: 'Opened', // Tab Title - String
      Component: TabOpen // Tab Body - JSX.Element
    },
    {
      label: 'Closed',
      Component: TabClosed
    }
  ]

  return (
    <>
      <div className="App">
        {gifs.length ?
          <Tabs tabs={tabs} />
          : null}

        {/* {props.message} */}
        {gifs.map((gif, i) => (
          <GifCard id={gif.id} key={gif.id} state={gif.state} total={gif.total} />
        ))}
      </div>

      {gifs.length ?
        <Footer>
          {showMore() &&
            <StyledButton onClick={handleClick}>
              {loading ? 'LOADING...' : 'SEE MORE'}
            </StyledButton>}
        </Footer> : null}
    </>
  );

};

const mapStateToProps = ({ gifs }) => {
  return {
    gifs: gifs.gifSearch,
    searchCount: gifs.searchCount,
    searchTotalCount: gifs.searchTotalCount,
    searchOffset: gifs.searchOffset,
    loading: gifs.loading,
  };
};

export default connect(mapStateToProps, { fetchGifs, toggleToFavorites })(SearchGrid);

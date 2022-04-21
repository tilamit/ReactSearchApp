import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { FaSearchengin } from 'react-icons/fa';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchGrid from '../../components/SearchGrid';
import SearchInput from '../../components/SearchInput';
import SearchInput2 from '../../components/SearchInput';
import { fetchGifs } from '../../redux/gifs/actions';
import { COLORS } from '../../styles';

type PassProps = {
  history: any;
};

type DispatchProps = {
  fetchGifs: (searchQuery: any, searchQuery2: any) => void;
};

type Props = PassProps & DispatchProps;

export const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  padding: 10px;
  background: ${COLORS.GREEN}
`;

export const SearchButton = styled.button`
  align-items: center;
  background: ${COLORS.GREEN}
  border: none;
  color: ${COLORS.WHITE}
  cursor: pointer;
  display: flex;
  font-size: 25px;
  justify-content: center;
  width: 50px;
`;

const SearchPage = ({ fetchGifs }: Props) => {
  let searchInput: any;
  let searchInput2: any;

  const [query, setQuery] = useState('');

  useEffect(() => {
    searchInput.focus();

    fetchGifs(searchInput.value, searchInput2.value);
    // @ts-ignore
    //setQuery(searchInput1.value);
    setQuery(searchInput2.value);

  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
   
    fetchGifs(searchInput.value, searchInput2.value);
    //setQuery(searchInput1.value);
    setQuery(searchInput2.value);
  };

  return (
    <>
      <SearchContainer data-cy="container" onSubmit={handleSubmit}>
        <SearchInput
          value={(input: any) => (searchInput = input)}
          placeholder="User"
          data-cy="input"
        />

        <SearchInput2
          value={(input: any) => (searchInput2 = input)}
          placeholder="Repo"
          data-cy="input"
        />
        <SearchButton data-cy="submit" type="submit">
          <FaSearchengin />
        </SearchButton>
      </SearchContainer>
      <SearchGrid searchQuery={query} />
    </>
  );
};

export default connect<DispatchProps>(null, { fetchGifs })(SearchPage);

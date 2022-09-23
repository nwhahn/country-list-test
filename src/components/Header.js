import { useContext } from 'react';
import styled from 'styled-components'
import StoreContext from '../store/StoreContext';
import SearchBar from './SearchBar';

const Wrapper = styled.header`
  
`;

const TextWrapper = styled.div`
  text-align: center;
  padding: 16px 0;
`;


const HeaderText = styled.h1`
  color: orange;
  font-size: 32px;
  margin-block-start: 0;
  margin-block-end: 8px;
`;
const SubtitleText = styled.h2`
  font-size: 16px;
  font-weight: 600;
`

const Header = () => {
  const { countries } = useContext(StoreContext)
  return <Wrapper>
    <TextWrapper>
      <HeaderText>World Countries Data</HeaderText>
      <SubtitleText>Currently, We have {countries?.length || 0} Countries</SubtitleText>
    </TextWrapper>
    <SearchBar />
  </Wrapper>
}

export default Header
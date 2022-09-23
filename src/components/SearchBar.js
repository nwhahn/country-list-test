import { useContext } from 'react';
import styled from 'styled-components'
import StoreContext from '../store/StoreContext';

const Wrapper = styled.div`
  background-color: white;
  padding: 32px 15%;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  border-width: 1px;
  padding: 4px 16px;
  font-size: 14px;
`;


const SearchBar = () => {
  const { setQuery } = useContext(StoreContext)
  const onChange = (_, val) => {
    setQuery(val)
  }
  return <Wrapper>
    <Input 
      type='text' 
      placeholder='Search countries by name, city and languages'
      onChange={e => onChange(e, e?.target?.value)}
    />
  </Wrapper>
}

export default SearchBar;
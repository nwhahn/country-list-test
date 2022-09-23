import { useEffect } from 'react';
import styled from 'styled-components'
import { CountryList, Header } from './components'

const Wrapper = styled.div`
`

function App() {
  useEffect(() => {

  }, [])
  return (
    <Wrapper className="App">
      <Header/>
      <CountryList />
    </Wrapper>
  );
}

export default App;

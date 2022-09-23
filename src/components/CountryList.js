import { useContext } from "react"
import StoreContext from "../store/StoreContext"
import styled from 'styled-components'
import CountryCard from "./CountryCard";

const ListWrapper = styled.div`
  display: flex;
  padding: 16px 32px;
  row-gap: 16px;
  column-gap: 32px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ListItemWrapper = styled.div`
  flex: 1;
  flex-basis: 20%;
  min-width: 300px;
  display: flex;
`;

const EmptyText = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const ErrorText = styled(EmptyText)`
  color: red;
`;



const CountryList = () => {
  const { countries, hasLoaded, hasError, error } = useContext(StoreContext)

  if(!hasLoaded) return <EmptyText>Loading ...</EmptyText>
  else if(hasError) return <ErrorText>{error || 'There was an error retrieving countries'}</ErrorText>
  else if(!countries?.length > 0) return <EmptyText>No Countries found</EmptyText>

  return <ListWrapper>
    {countries.map((item, i) => <ListItemWrapper key={item?.name || i}>
      <CountryCard {...item}/>
    </ListItemWrapper>)}
  </ListWrapper>
}

export default CountryList
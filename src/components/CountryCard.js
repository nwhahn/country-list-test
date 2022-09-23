import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 16px;
`;

const CountryName = styled.h3`
  color: orange;
  text-align: center;
`;

const StatisticsWrapper = styled.div`
  width: 100%;
  justify-content: flex-start;
`; 

const Statistic = styled.p`
  margin-block-start: 0;
  margin-block-end: 4px;
`;

const Label = styled.span`
  margin-right: 4px;
  font-weight: 700;
`;

const StyledImage = styled.img`
  height: 100px;
  max-width: 100%;
  padding: 2px;
  border-radius: 6px;
  box-shadow: 0px 2px 4px -1px #00000030;
`;

const CountryCard = ({
  name,
  capital,
  flag,
  languages = [],
  population
}) => {
  return <Wrapper title={name}>
    <StyledImage width={200} src={flag} alt={name} />
    <CountryName>{name}</CountryName>
    <StatisticsWrapper>
      {capital && <Statistic>
        <Label>Capital:</Label>
        {capital}
      </Statistic>}
      {languages?.length > 0 && <Statistic>
        <Label>Languages:</Label>
        {languages.join(', ')}
      </Statistic>}
      {population && <Statistic>
        <Label>Population:</Label>
        {population.toLocaleString()}
      </Statistic>}
    </StatisticsWrapper>
    
  </Wrapper>
}

export default CountryCard
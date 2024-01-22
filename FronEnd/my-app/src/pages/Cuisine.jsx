import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
// import data from '../data.json';

function Cuisine() {
  const { type } = useParams();

  const filteredData = data.filter((cuisine) => cuisine.type === type);

  return (
    <Grid>
      {/* {filteredData.map((e) => (
        <Card key={e.id}>
          <img src={e.imageUrl} alt="" />
          <h4>{e.name}</h4>
        </Card> */}
      {/* ))} */}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;

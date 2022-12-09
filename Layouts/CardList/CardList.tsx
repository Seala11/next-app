import Link from 'next/link';
import React from 'react';
import { Card, FlexContainer, StyledA } from './CardList.styled';

// const StyledLink = ({ href, name }) => (
//   <Link href={href} passHref legacyBehavior>
//     <StyledA>{name}</StyledA>
//   </Link>
// );

export default function CardList({ movies }) {
  return (
    <FlexContainer>
      {movies.results.map((movie) => (
        <Card key={movie.id}>{movie.original_title}</Card>
      ))}
    </FlexContainer>
  );
}

// export default function CardList() {
//     return (
//       <FlexContainer>
//         <Card>
//           <StyledLink href="/about" name="About Page &rarr;" />
//         </Card>
//       </FlexContainer>
//     );
//   }

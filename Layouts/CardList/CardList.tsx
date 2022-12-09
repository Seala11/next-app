import React from 'react';
import MovieItem from './Card';
import { FlexContainer} from './CardList.styled';

export default function CardList({ movies }) {
  console.log(movies);
  return (
    <FlexContainer>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie}/>
      ))}
    </FlexContainer>
  );
}

// const StyledLink = ({ href, name }) => (
//   <Link href={href} passHref legacyBehavior>
//     <StyledA>{name}</StyledA>
//   </Link>
// );

// export default function CardList() {
//     return (
//       <FlexContainer>
//         <Card>
//           <StyledLink href="/about" name="About Page &rarr;" />
//         </Card>
//       </FlexContainer>
//     );
//   }

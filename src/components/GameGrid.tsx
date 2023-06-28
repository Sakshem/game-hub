import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({selectedGenre, selectedPlatform} : Props) => {
  const {data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  // const skeletons = [1,2,3,4,5,6, 7, 8, 9, 10, 11, 12, 13, 14];

  const skeletons = new Array<number>(data.length);
  for (let i = 0; i < data.length; i++) {
    skeletons[i] = i+1;
  }
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid
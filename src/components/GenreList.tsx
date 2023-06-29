import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
const GenreList = ( {onSelectGenre, selectedGenre} : Props) => {
  const {data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />
  if (error) return null;
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)}/>
            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id == selectedGenre?.id ? 'bold': 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
}

export default GenreList
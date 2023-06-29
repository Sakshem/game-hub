import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface Props {
    game: Game
}
const GameCard = ({ game } : Props) => {
  return (
    <Card height='100%' variant='filled'>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
                <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <Emoji rating={game.rating_top}></Emoji>
        </CardBody>
    </Card>
  )
}

export default GameCard
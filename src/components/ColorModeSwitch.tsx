import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  console.log(colorMode);
  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text whiteSpace='nowrap'>{colorMode.charAt(0).toUpperCase() + colorMode.slice(1).toLowerCase()} mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
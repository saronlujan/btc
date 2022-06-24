import { useState } from 'react';
import { ChakraProvider, Flex, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react'


export function App() {

  const [state, setState] = useState({
    limit_min: 1000,
    limit_max: 2000,
    levels: 0,
    interval_percent: 0,
    interval_price: 0,
  });

  function onChangeLevels(value) {
    const interval_price = (state.limit_max - state.limit_min) / value;
    const interval_percent = (interval_price / state.limit_min) * 100;

    setState({...state, levels: value, interval_price: interval_price, interval_percent: interval_percent})
  }

  function onChangeIntervalPrice(value) {
    const levels = (state.limit_max - state.limit_min) / value;
    const interval_percent = ((state.limit_max - state.limit_min) / state.levels);

    setState({...state, interval_price: value, levels: levels, interval_percent: interval_percent})
  }

  return (
    <ChakraProvider>
        <Flex direction="column" justify="center" align="center" w="100%" h="100vh">
            <Flex w="600px" h="auto" bg="#fff" borderRadius="10px">
              <Stack w="100%" spacing="10px">
                <FormControl>
                  <FormLabel htmlFor='limit_min'>Limite Minimo:</FormLabel>
                  <Input id='limit_min' type='number' value={state.limit_min} onChange={(e) => setState({...state, limit_min: e.target.value})} />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='limit_max'>Limite Maximo:</FormLabel>
                  <Input id='limit_max' type='number' value={state.limit_max} onChange={(e) => setState({...state, limit_max: e.target.value})} />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='levels'>Niveis:</FormLabel>
                  <Input id='levels' type='number' value={state.levels} onChange={(e) => onChangeLevels(e.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='interval_percent'>% Intervalo:</FormLabel>
                  <Input id='interval_percent' type='number' value={state.interval_percent} disabled/>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='interval_price'>$ Intervalo:</FormLabel>
                  <Input id='interval_price' type='number'  value={state.interval_price} onChange={(e) => onChangeIntervalPrice(e.target.value)}/>
                </FormControl>
              </Stack>
            </Flex>
            <Flex direction="column" mt="50px">
              <Text>Limite Mínimo: <strong>{state.limit_min}</strong></Text>
              <Text>Limite Máximo: <strong>{state.limit_max}</strong></Text>
              <Text>Níveis: <strong>{state.levels}</strong></Text>
              <Text>% Intervalo: <strong>{state.interval_percent}</strong></Text>
              <Text>$ Intervalo: <strong>{state.interval_price}</strong></Text>
            </Flex>
        </Flex>
    </ChakraProvider>
  );
}
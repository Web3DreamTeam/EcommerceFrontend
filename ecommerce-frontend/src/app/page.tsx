import { Text, Flex, Stack, Input, InputRightElement, InputLeftElement, InputGroup, Icon } from "@chakra-ui/react"

import {FcSearch} from 'react-icons/fc'
import ProductCard from "./components/ProductCard"

export default function Home() {
  return (
   <>
    <Stack spacing={24}>
    <Flex mt={5} w={"100vw"} flexDirection={'column'}>
      <Stack spacing={8} textAlign={'center'}>
        <Text fontSize={36}>Welcome to Building Blocks Online Pharmacy.</Text>
        <Text fontSize={24}> At Building Blocks we leverage Verifiable Credentials to help you open purchase certified medical products securily</Text>
      </Stack>
    </Flex>
    <Flex w={"100%"} alignItems={'center'} flexDirection={'column'}>
      <Flex mb={10} flexDirection={'row'} justifyContent={'space-around'}>
        <InputGroup>
          <InputRightElement>
            <FcSearch/>
          </InputRightElement>
        <Input w={'100%'} placeholder='Search for products' />
      </InputGroup>
      </Flex>
      <Flex flexDirection={'row'}>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
      </Flex>
    </Flex>
    </Stack>
    </>
  )
}

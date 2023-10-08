import { Text, Flex, Stack, Input, InputRightElement, InputLeftElement, InputGroup, Icon, Image } from "@chakra-ui/react"

import {FcSearch} from 'react-icons/fc'
import ProductCard from "./components/ProductCard"
import Footer from "./components/common/Footer"

export default function Home() {
  return (
   <>
    <Stack spacing={24}>
    <Flex mt={5} w={"100vw"} flexDirection={'column'}>
      <Stack spacing={8} textAlign={'center'} alignItems={'center'}>
        <Image alignItems={'center'} w={'50%'} src='/CVS_Pharmacy_Logo.jpg'/>
        <Text fontSize={24}> At CVS we leverage Verifiable Credentials to help you open purchase certified medical products securily</Text>
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
         <ProductCard productImage="/tylenol.jpg"/>
         <ProductCard productImage="/bandaid.jpeg"/>
      </Flex>
    </Flex>
    </Stack>
    <Footer/>
    </>
  )
}

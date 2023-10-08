'use client'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ProductDetails from "../common/ProductDetails";
import { useState } from "react";

interface ProductCardProps {
    productImage:string;
}

const ProductCard = ({productImage}:ProductCardProps) => {

    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false); 

    const handleViewDetails = () => {
        setIsProductDetailsOpen(true); 
    }

    return (
        <>
        <ProductDetails isOpen={isProductDetailsOpen} onClose={() => setIsProductDetailsOpen(false)}></ProductDetails>
        <Card m={3}>
            <CardBody>
                <Image
                src={productImage}
                alt='oscillocosinum flue like symptoms medicine'
                width={250}
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Oscillocosinum</Heading>
                    <Text>
                        A great way to boost your immune system and keep the flue away!
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $25
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue' onClick={handleViewDetails}>
                    View Details
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
        </>
    ); 
}
export default ProductCard; 
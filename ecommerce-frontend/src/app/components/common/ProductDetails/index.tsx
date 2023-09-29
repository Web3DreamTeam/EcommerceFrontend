import { Button, Divider, Flex, FormControl, FormLabel, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";


interface ModalProps {
    isOpen: boolean,
    onClose: () => void; 
}

const ProductDetails = ({isOpen, onClose}:ModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                <Flex w='100%' justify='space-between'>
                    <Text fontWeight='bold'>Product Information</Text>
                    <Button onClick={onClose} variant='close'>Close</Button>
                    </Flex>
                    <Divider border='2px solid #FOBD3F'></Divider>
                </ModalHeader>
                <ModalBody justifyContent={'center'}>
                    <FormControl>
                        <Stack spacing={2}>
                            <Text textAlign={'center'}>Summary</Text>
                            <FormLabel fontWeight={'bold'}>GTIN</FormLabel>
                            <Text>OXassdnl327492347</Text>
                            <FormLabel fontWeight={'bold'}>SERIAL NUMBER</FormLabel>
                            <Text>0328423094240923472309</Text>
                            <FormLabel fontWeight={'bold'}>Lot Number</FormLabel>
                            <Text>36</Text>
                            <FormLabel fontWeight={'bold'}>Expiry Date</FormLabel>
                            <Text> December 2026</Text>
                            <Button mb={4} color="white" backgroundColor={"green.400"} variant={'solid'}>Buy Now</Button>
                        </Stack>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal>
    ); 
}

export default ProductDetails; 
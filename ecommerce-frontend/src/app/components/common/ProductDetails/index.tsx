import { Button, Divider, Flex, FormControl, FormLabel, Image, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import {purchaseProduct, saveReceipt} from '../../../utils/agentService'
import { CVS, didAccounts, purchaseAmount } from "@/app/utils/constants";
import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal";

interface ModalProps {
    isOpen: boolean,
    onClose: () => void; 
}

const ProductDetails = ({isOpen, onClose}:ModalProps) => {

    const [receipt, setReceipt] = useState(undefined); 
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 

    const handleBuyNow = async () => {
        setIsLoading(true);
        const receipt = await purchaseProduct(didAccounts[0],purchaseAmount); 
        if(receipt) {
            setReceipt(receipt); 
        }
        setIsLoading(false); 

        //save it for CVS
        const response = await saveReceipt(receipt,CVS); 
        if(response.status === 200) {
            setIsConfirmationModalOpen(true);
        } else {
            console.log(response); 
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ConfirmationModal isOpen={isConfirmationModalOpen} onClose={() => setIsConfirmationModalOpen(false)} receipt={receipt}/>
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
                            <Image
                                src='/medicine-image.png'
                                alt='oscillocosinum flue like symptoms medicine'
                                width={200}
                                borderRadius='lg'
                                alignSelf={'center'}
                            />
                            <FormLabel fontWeight={'bold'}>GTIN</FormLabel>
                            <Text>OXassdnl327492347</Text>
                            <FormLabel fontWeight={'bold'}>SERIAL NUMBER</FormLabel>
                            <Text>0328423094240923472309</Text>
                            <FormLabel fontWeight={'bold'}>Lot Number</FormLabel>
                            <Text>36</Text>
                            <FormLabel fontWeight={'bold'}>Expiry Date</FormLabel>
                            <Text> December 2026</Text>
                            <Button isLoading={isLoading} isDisabled={!!receipt} onClick={handleBuyNow} mb={4} colorScheme="green" variant={ receipt ? 'outline' : 'solid'}>Buy Now</Button>
                        </Stack>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal>
    ); 
}

export default ProductDetails; 
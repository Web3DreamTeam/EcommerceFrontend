import { saveReceipt } from "@/app/utils/agentService";
import { didAccounts } from "@/app/utils/constants";
import { Button, Divider, Flex, FormControl, FormLabel, Icon, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import {BiSolidCheckCircle} from 'react-icons/bi';
import {CiSaveDown2} from 'react-icons/ci'

interface ModalProps {
    isOpen: boolean,
    onClose: () => void; 
    receipt:any; 
}



const ConfirmationModal = ({isOpen, onClose, receipt}:ModalProps) => {

    const [isSaved, setIsSaved] = useState(false); 

    const handleSaveReceipt = async () => {
        const response = await saveReceipt(receipt,didAccounts[0]); 
        if(response.status === 200) {
            setIsSaved(true);
        }
    } 

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                <Flex w='100%' justify='space-between'>
                    <Button onClick={onClose} ml={'90%'} variant='close'>Close</Button>
                    </Flex>
                    <Divider border='2px solid #FOBD3F'></Divider>
                </ModalHeader>
                <ModalBody justifyContent={'center'}>
                    <FormControl>
                        <Stack spacing={2}>
                            <Flex flexDirection={'column'} alignItems={'center'}>
                                <Text mb={5} >Thank you for your purchase!</Text>
                                {!isSaved ? <Icon boxSize={100} color={'green.400'} as={BiSolidCheckCircle}></Icon> :   
                                <Icon as={CiSaveDown2} boxSize={100} color={'green'}></Icon>
                                }
                            </Flex>
                            <Button m={4} isDisabled={isSaved} onClick={handleSaveReceipt} mb={4} colorScheme="green" variant={ isSaved ? 'outline' : 'solid'}>{isSaved ? 'Receipt Saved' :'Save Receipt'}</Button>
                        </Stack>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
    
}
export default ConfirmationModal; 
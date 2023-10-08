'use client'
import {Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";


const Footer = () => {

    return (
        <Flex w={'100%'} boxShadow={'xl'} height={"10vh"} justifyContent={'space-between'} alignItems={'center'}>
                <Link href="/"><Image ml={5} src="/cvs-logo.svg" alt="Logo"></Image></Link>
                <Flex flexDirection={'row'} justifyContent={'space-around'} alignItems={'center'}>
                    <Text m={4}> Contact</Text>
                    <Text m={4}> Privacy</Text>
                    <Text m={4}> Terms of Use</Text>
                </Flex>     
        </Flex>
    ); 
}

export default Footer; 
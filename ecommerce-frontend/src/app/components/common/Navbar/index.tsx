'use client'
import React from "react";
import {Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { didAccounts } from "@/app/utils/constants";

const Navbar = () => {

    return (
        <Flex w={'100%'} boxShadow={'xl'} height={"10vh"}>
        <Flex w={'100%'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Flex alignItems={'center'} justifyContent={'space-around'}>
                <Link href="/"><Image ml={5} height={"8vh"} src="/logo.jpg" alt="Logo"></Image></Link>
                <Text ml={'65vw'} color={'messenger.600'}>{didAccounts[0]}</Text>
            </Flex>
        </Flex>
    </Flex>
    ); 
}

export default Navbar; 
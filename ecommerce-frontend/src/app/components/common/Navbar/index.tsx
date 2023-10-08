'use client'
import React, { useEffect, useState } from "react";
import {Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import UserModal from "./UserModal";
import LoginModal from "./LoginModal";
import { BiLogIn, BiUserCircle } from "react-icons/bi";
import { useDIDContext } from "@/app/context";

const Navbar = () => {

    const {did} = useDIDContext(); 
    const [isUserModalOpen, setIsUserModalopen] = useState(false); 
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); 

    useEffect(() => {
        console.log(did);
    },[did])

    return (
        <Flex w={'100%'} boxShadow={'xl'} height={"10vh"} justifyContent={'space-between'} alignItems={'center'}>
        <UserModal isOpen={isUserModalOpen} onClose={() => setIsUserModalopen(false)}/>
        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}/>
                <Link href="/"><Image ml={5} src="/cvs-logo.svg" alt="Logo"></Image></Link>
                {
                    !did ? 
                    <Button mr={5} leftIcon={<BiLogIn/>} onClick={() => setIsLoginModalOpen(true)} color={'messenger.600'}>Login</Button> 
                : 
                    <Button mr={5} leftIcon={<BiUserCircle/>} onClick={() => setIsUserModalopen(true)} color={'messenger.600'}>Profile</Button>
                }
        </Flex>
    ); 
}

export default Navbar; 
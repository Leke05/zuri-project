import React from 'react'
import {Box, Button, Heading,  Image, Flex, Text} from '@chakra-ui/react'
import {BsTwitter} from 'react-icons/bs'

const Profile = () => {
  return (
    <Box minW={'80vw'} bg={"#FFFFFF"}  alignItems={"center"}  flexDir={{base: "column", md: "row", lg: "row"}} m={"auto"}>

     <Image src={"./images/picture1.png"} boxSize={"100px"} borderRadius={"20px"} m={ "auto"} my={"20px"}/>
        <Heading fontSize={'12pxs'} textAlign={"center"} mb={"20px"}>@Jonathan</Heading>
     <Box w={"85%"}  m={"auto"}>
        <Box display={'flex'} flexDir={"column"} gap={5}>
        <Button leftIcon={<BsTwitter/>}  bg={"#E6E8EC"}><a target="_blank" href="https://twitter.com/_Jonathan_0199" rel="noopener noreferrer" >Twitter</a></Button>
        <Button bg={"#E6E8EC"}><a target="_blank" href="https://training.zuri.team/" rel="noopener noreferrer" >Zuri Team</a></Button>
        <Button bg={"#E6E8EC"}><a target="_blank" href="http://books.zuri.team" rel="noopener noreferrer" >Zuri Books</a></Button>
        <Button bg={"#E6E8EC"}><a target="_blank" href="http://books.zuri.team/python" rel="noopener noreferrer" >Python Books</a></Button>
        <Button bg={"#E6E8EC"}><a target="_blank" href="https://background.zuri.team" rel="noopener noreferrer" >Background Coder</a></Button>
        <Button bg={"#E6E8EC"}><a target="_blank" href="https://books.zuri.team/design-rules" rel="noopener noreferrer" >Design Books</a></Button>
        </Box>
        <Image src={"./images/Footer.png"} m={ "auto"}/>
    </Box>

    <hr style={{backgroundColor: "#FFFFFF", color: "#FFFFFF"}}/>

    <Flex justify={"space-between"} flexDir={{base: "column", md: "row", lg: "row"}} gap={{base: "20px", md: "1px", lg: "1px"}} m={"auto"} w={"85%"} mb={{base: "10px", md: "1px", lg: "1px"}} mt={"40px"}>
        <Image src={"./images/Vector.png"} w={"150px"}/>
        <Text>HNG Intership 9 Frontend Task</Text>
        <Image src={"./images/I4G.png"}  w={"150px"}/>
    </Flex>

    </Box>
  )
}

export default Profile 

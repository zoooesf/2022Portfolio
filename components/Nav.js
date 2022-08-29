import { Flex, Heading, MenuButton } from 'theme-ui'

const Nav = () => {
    return(
        <Flex sx={{width:"100%", justifyContent:"space-between"}}>
            <Heading as="h1">Zoe Ferguson</Heading>
            <MenuButton/>
        </Flex>
        
    )
}
export default Nav
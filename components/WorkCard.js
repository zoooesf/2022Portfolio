import { Flex, Heading, Box, Image, Text } from 'theme-ui'

const WorkCard = () => {
    return(

                <Box sx={{variant:"card",
                        width:"15%",
                        padding:".5%",
                        backgroundImage:"url(https://picsum.photos/200/300)",
                        backgroundPosition:"center",
                        backgroundRepeat:'no-repeat',
                        // backgroundAttachment:"fixed",
            }}>
                    <Heading>Title</Heading>
                    <Text>
                        AKG Shelter came to my partner and I looking for full redesign and rebrand of their previous site. We created a custom WordPress theme that would allow for easy navigation, including away from the site incase a woman needed to escape it quickly.
                    </Text>
                </Box>
        
    )
}
export default WorkCard
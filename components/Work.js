import { Flex, Heading, Box, Image, Text } from 'theme-ui'
import WorkCard from './WorkCard'

const Work = () => {
    return(
        <Flex sx={{width:"100%", flexDirection:"column"}}>
            <Heading as="h2" sx={{
                textAlign:"end",
                
            }}>Work</Heading>
            <Flex 
                sx={{justifyContent:"space-evenly",
                    width:"100%"
        }}>

            <WorkCard/>
            
            </Flex>
            
        </Flex>
        
    )
}
export default Work
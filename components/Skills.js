import { Flex, Heading, Box } from 'theme-ui'

const Skills = () => {
    return(
        <Flex sx={{width:"100%", flexDirection:"column"}}>
            <Heading as="h2" sx={{
                textAlign:"end",
                
            }}>SKILLS</Heading>
            <Flex 
                sx={{justifyContent:"space-evenly",
                    width:"100%"
        }}>
                <Box sx={{variant:"card",
                        width:"30%",
                        padding:"3.5%"
            }}>
                    <Heading>Software</Heading>
                    <ul>
                        <li>Vercel</li>
                        <li>GitHub</li>
                        <li>GitLab</li>
                        <li>SourceTree</li>
                        <li>VS Code</li>
                        <li></li>
                        <li></li>
                    </ul>
                </Box>
                <Box sx={{variant:"card",
                        width:"30%",
                        padding:"3.5%"
            }}>
                    <Heading>Languages/Libraries</Heading>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Vue</li>
                        <li>Next.js</li>
                        <li>Three.js</li>
                        <li>Theme UI</li>
                        <li></li>
                    </ul>
                </Box>
                <Box sx={{variant:"card",
                        width:"30%",
                        padding:"3.5%"
            }}>
                    <Heading>Tools</Heading>
                    <ul>
                        <li>Contentful</li>
                        <li>Shopify</li>
                        <li>Wordpress</li>
                        <li>Firebase</li>
                        <li></li>
                    </ul>
                </Box>
            </Flex>
            
        </Flex>
        
    )
}
export default Skills
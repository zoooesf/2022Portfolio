import { Flex, Heading, Box, Text, Link } from 'theme-ui'

const Resume = () => {
    return(
        <Flex sx={{width:"100%", flexDirection:"column"}}>
            <Heading as="h2" sx={{
                textAlign:"end",
                
            }}>RESUME</Heading>
            <Link href="/img/resume.pdf">Download</Link>
            <Flex 
                sx={{justifyContent:"space-evenly",
                    width:"100%"
        }}>
                <Box sx={{variant:"card",
                        width:"30%",
                        padding:"3.5%"
            }}>
                    <Box sx={{
                        display:'flex',
                        flexDirection:"column",
                        marginBottom:"5%"
                    }}>
                        <Heading as="h3">Jr. Web Developer</Heading>
                        <Text>Globacore</Text>
                        <Text>December 2020 - Present</Text>
                    </Box>
                    <Text>
                        work as part of a team creating interactive experiences for both virtual
                        and in person events. We primarily use react and next.js to develop
                        these experiences. The majority of the work I do is front-end based
                        however I have recently started delving more into the back-end. I enjoy
                        learning and continuously expanding my knowledge base. The diverse
                        projects as well as R&D opportunities provided to me at Globacore have
                        facilitated this continuous growth. 
                    </Text>
                </Box>
                <Box sx={{variant:"card",
                        width:"30%",
                        padding:"3.5%"
                }}>
                    <Box sx={{
                        display:'flex',
                        flexDirection:"column",
                        marginBottom:"5%"
                    }}>
                        <Heading as="h3">Digital Service Squad Member (Contract)</Heading>
                        <Text>Digital Main Street</Text>
                        <Text>September 2020-December 2020</Text>
                    </Box>
                    <Text>
                        I work with Clarington Board of Trade and the Business Advisory Centre
                        of Durham in partnership with Digital Main Street to assist businesses
                        accessing the grants and programs of Digital Main Street. I also assist
                        businesses with e-commerce consultation to ensure they get the most
                        out of the program. 
                    </Text>
                </Box>
                <Box sx={{variant:"card",
                        width:"30%",
                        padding:"3.5%"
                }}>
                    <Box sx={{
                        display:'flex',
                        flexDirection:"column",
                        marginBottom:"5%"
                    }}>
                        <Heading as="h3">Online Specialist/Sales Coordinator for Corporate Markets</Heading>
                        <Text>Swissmar</Text>
                        <Text>September 2017 - January 2020</Text>
                    </Box>
                    <Text>
                        I managed the Borner and Swissmar Shopify stores as well as the
                        Amazon Seller Central accounts for both Borner and Swissmar. I also
                        mananged the GoogleAds account for both companies. 
                    </Text>
                </Box>
                
            </Flex>
            
        </Flex>
        
    )
}
export default Resume
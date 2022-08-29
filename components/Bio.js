import { Flex, Link, Text } from 'theme-ui'

const Bio = () => {
    return(
        <Flex sx={{variant:"card",width:"40%",}}>
            <Text>
            I love design as well as a good challenge. In my professional life, I bring these passions together to create beautiful websites that function with ease, are mobile responsive and are optimized for SEO (Search Engine Optimization) and accessibility. I have extensive experience working in e-commerce, this allows me to create websites that not only will be user friendly but will allow for the greatest return on investment.
            
            I would love to discuss my experience as well as your projects with you more in-depth. Please <Link href="#contact">drop me a line</Link> and I will get back to you as soon as possible. In the mean-time please feel free to check out my <Link href="https://www.linkedin.com/in/z-ferguson/" target="_blank">LinkedIn</Link> and <Link href="img/resume.pdf" target="_blank">Resume</Link>.
            </Text>
        </Flex>
        
    )
}
export default Bio
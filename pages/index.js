import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Bio from '../components/Bio'
import { Box, Flex } from 'theme-ui'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Resume from '../components/Resume'

export default function Home() {
  return (
    <Flex sx={{width:"100%", flexDirection:"column", alignItems:"center"}}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Zoe Ferguson | Web Designer | Front-End Developer</title>
        <meta name="description" content="Zoe Ferguson, web design and development portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Nav />
    <Bio/>
    <Skills/>
    <Work/>
    <Resume/>
    </Flex>
  )
}

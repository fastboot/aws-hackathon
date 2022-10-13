import React from 'react'
import { SolutionDiv, Name, Experience } from './styles'
import { NavLink as Link } from 'react-router-dom'

function Home() {
    return (
        <React.Fragment>
            <SolutionDiv
                fromcolor = '#4776E6'
                tocolor = '#8E54E9'
            >
                <Name>
                    Pharmacovigilance
                    <Link style={{ "textDecoration": "none" }} to = '/pharmacovigilance' ><Experience>Experience Now</Experience></Link>
                </Name>
            </SolutionDiv>
            <SolutionDiv
                fromcolor = '#FF512F'
                tocolor = '#DD2476'
            >
                <Name>
                    Clinical Keyword Disambigution
                    <Link style={{ "textDecoration": "none" }} to = '/clinical-keyword-disambigution' ><Experience>Experience Now</Experience></Link>
                </Name>
            </SolutionDiv>
        </React.Fragment>
    )
}

export default Home
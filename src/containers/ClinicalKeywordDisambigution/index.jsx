import React, { useState } from 'react'
import axios from 'axios'
import { NavLink as Link } from 'react-router-dom'
import { Description, ResponseDescription, PageWrapper, Name, Experience, Warning } from './styles'

function ClinicalKeywordDisambigution() {

    const [description, setDescription] = useState('')
    const [keyword, setKeyword] = useState('')
    const [isDone, setIsDone] = useState(false);
    const [expandedKeywordDescription, setExpandedKeywordDescription] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const getResponseText = async () => {
        setIsLoading(true);
        await axios.post("https://au8vnarn4m.execute-api.us-west-2.amazonaws.com/dev/predict", {
                "text": description,
                keyword,
                "module": "clinical_disambiguation"
        })
        .then((res) => {
            const response = JSON.parse(res.data.body)
            const highlighted = description.replace(keyword, () => `<span style="color: green; font-weight: bold;">${response.predicted_sense} </span>` )
            const highlightedDescription = description.replace(keyword, () => `<span style="color: purple; font-weight: bold;">${keyword} </span>` )
            setDescription(highlightedDescription);
            setExpandedKeywordDescription(highlighted);
        })
        .catch((err) => {
            console.log('i am here')
            console.log(err);
        })
        .finally(() => {
            setIsLoading(false)
            setIsDone(true);
        })
    }

    return (
        <React.Fragment>
            <PageWrapper
                fromcolor = '#FF512F'
                tocolor = '#DD2476'
            >
                <Warning><span>&#9888;&nbsp;</span> We recommend keeping the keyword in uppercase in description and keyword search box.</Warning>
                <Name>Description</Name>
                { !isDone && (<Description height="150px" onInput={e => setDescription(e.target.value)} />)}
                { isDone && 
                    <ResponseDescription>
                    <div
                        dangerouslySetInnerHTML={{__html: 
                        description}}>
                    </div>
                    </ResponseDescription>
                } 
                <Name>Keyword to search for</Name>
                <Description height="50px" onInput={e => setKeyword(e.target.value)} />
                <Experience onClick={getResponseText}>See the magic</Experience>
                {!isLoading && isDone && (<ResponseDescription>
                    <div
                        dangerouslySetInnerHTML={{__html: 
                        expandedKeywordDescription}}>
                    </div>
                </ResponseDescription>)}
                <Link style={{ "textDecoration": "none" }} to = '/aws-hackathon'><Experience>Go Back To Home</Experience></Link>
            </PageWrapper>
        </React.Fragment>
      )
}

export default ClinicalKeywordDisambigution

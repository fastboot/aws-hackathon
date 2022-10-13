import React, { useState } from 'react'
import axios from 'axios'
import { NavLink as Link } from 'react-router-dom'
import { Description, ResponseDescription, PageWrapper, Name, Experience } from './styles'

function ClinicalKeywordDisambigution() {

    const [description, setDescription] = useState('')
    const [keyword, setKeyword] = useState('')
    const [isDone, setIsDone] = useState(false);
    const [expandedKeywordDescription, setExpandedKeywordDescription] = useState('')
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
            setExpandedKeywordDescription(description.replace(keyword, response.predicted_sense));
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
                <Name>Description</Name>
                <Description height="150px" onInput={e => setDescription(e.target.value)} />
                <Name>Keyword to search for</Name>
                <Description height="50px" onInput={e => setKeyword(e.target.value)} />
                <Experience onClick={getResponseText}>See the magic</Experience>
                {!isLoading && isDone && (<ResponseDescription>{expandedKeywordDescription}</ResponseDescription>)}
                <Link style={{ "textDecoration": "none" }} to = '/'><Experience>Go Back To Home</Experience></Link>
            </PageWrapper>
        </React.Fragment>
      )
}

export default ClinicalKeywordDisambigution

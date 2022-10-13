import React, { useState } from 'react'
import axios from 'axios'
import { NavLink as Link } from 'react-router-dom'
import { Description, ResponseDescription, PageWrapper, Name, Experience } from './styles'

function PharmaCovigilance() {

    const [text, setText] = useState('')
    const [transcript, setTranscript] = useState('')
    const [predictedLabel, setPredictedLabel] = useState('')
    const [link, setLink] = useState('')
    const [isNotAdverse, setIsNotAdverse] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false);

    const getResponseText = async () => {
        setIsLoading(true);
        await axios.post("https://au8vnarn4m.execute-api.us-west-2.amazonaws.com/dev/predict", {
                text,
                transcript,
                "module": "adverse_event_clf"
        })
        .then((res) => {
            const response = JSON.parse(res.data.body)
            setPredictedLabel(response.predicted_label)
            setLink(response.object_url)
        })
        .catch((err) => {
            console.log('i am here')
            console.log(err);
        })
        .finally(() => {
            setIsLoading(false)
            setIsDone(true)
        })
    }

    return (
        <React.Fragment>
            <PageWrapper
                fromcolor = '#4776E6'
                tocolor = '#8E54E9'
            >
                <Name>Text</Name>
                <Description height="150px" onInput={e => setText(e.target.value)}/>
                <Name>Transcript</Name>
                <Description height="150px" onInput={e => setTranscript(e.target.value)}/>
                <Experience onClick={getResponseText}>See the magic</Experience>
                {isDone && (<ResponseDescription>
                    {predictedLabel}
                    { predictedLabel === 'adverse_event' && ( <h3><a href = {link}>Download your form</a></h3>)}
                </ResponseDescription>
                )}
                <Link style={{ "textDecoration": "none" }}to = '/aws-hackathon'><Experience>Go Back To Home</Experience></Link>
            </PageWrapper>
        </React.Fragment>
      )
}

export default PharmaCovigilance

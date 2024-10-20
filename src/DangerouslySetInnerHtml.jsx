import React from 'react'
import DOMPurify from 'dompurify'

const DangerouslySetInnerHtml = () => {

    // const data = `<h3>Welcome in the dangerouslyInnerHtml concept</h3>
    //         <p> The immediate effect of using innerHTML versus dangerouslySetInnerHTML is identical -- the DOM node will update with the injected HTML. </p>
    //         `;

    const data = `<h3>Welcome in the dangerouslyInnerHtml concept</h3>
            <p> The immediate effect of using innerHTML versus dangerouslySetInnerHTML is identical -- the DOM node will update with the injected HTML. </p>
            <img src="???" onerror="alert('xss')"/>`;

            // ways to do XSS
            // 1. <img src="???" onerror="alert('xss')"/>
            // 2. <img src="???" onerror="location.replace('https://www.google.com')"/> it weill redirect to the googl page
            // 3. 

  return (
    <>
    <div>--------------DangerouslySetInnerHtml----------------------</div>
    <h2>Hi Devesh Upadhay</h2>
    <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(data)}}></div>
    </>
  )
}

export default DangerouslySetInnerHtml
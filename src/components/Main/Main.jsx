import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
    const enterClick = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSent();
        }
    }

  return (
      <div className='main'>
          <div className="nav">
              <p>Gemini</p>
              <img src={assets.user_icon} alt="" />
          </div>
          <div className="main-container">
              
              {!showResult ? 
                  <>
                  <div className="greet">
                  <p><span>Hello, User.</span></p>
                  <p>How can I help you today?</p>
              </div>
              <div className="cards">
                  <div className="card" onClick={() => onSent("Suggest beautiful places to see on an upcoming road trip")}>
                      <p>Suggest beautiful places to see on an upcoming road trip</p>
                      <img src={assets.compass_icon} alt="" />
                  </div>
                  <div className="card" onClick={() => onSent("Briefly summarize this concept: urban planning")}>
                      <p>Briefly summarize this concept: urban planning</p>
                      <img src={assets.bulb_icon} alt="" />
                  </div>
                  <div className="card" onClick={() => onSent("Brainstorm team bonding activities for your work retreat")}>
                      <p>Brainstorm team bonding activities for your work retreat</p>
                      <img src={assets.message_icon} alt="" />
                  </div>
                  <div className="card" onClick={() => onSent("How Improve the readability of the code?")}>
                      <p>How Improve the readability of the code?</p>
                      <img src={assets.code_icon} alt="" />
                  </div>
                  
              </div></>
                  :
                  <div className='result'>
                      <div className="result-title">
                          <p>{recentPrompt}</p>
                          <img src={assets.user_icon} alt="" />
                      </div>
                      <div className="result-data">
                          <img src={assets.gemini_icon} alt="" />
                          {loading
                              ?
                              <div className='loader'>
                                  <hr />
                                  <hr />
                                  <hr />
                              </div>
                              :
                              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                          
                      </div>
                  
                  </div>}

              
              <div className="main-bottom">
                  <div className="search-box">
                      <input onChange={(e) => setInput(e.target.value)} onKeyDown={enterClick} value={input} type="text" placeholder='Enter a prompt here' />
                      <div>
                          <img src={assets.gallery_icon} alt="" />
                          <img src={assets.mic_icon} alt="" />
                          { input? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null }
                      </div>
                  </div>
                  <p className='bottom-info'>
                      Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                  </p>
              </div>
          </div>
    </div>
  )
}

export default Main
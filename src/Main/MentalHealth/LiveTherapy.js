import React from 'react'

const LiveTherapy = () => {
  return (
    <div>
        <p className="text-4xl px-10 pb-5 pt-5">Live Therapy Session</p>

        <iframe
        src="https://whereby.com/video-chat-brocode"
        title='video chat'
        allow="camera; microphone; fullscreen; speaker; display-capture"
        className="w-full h-[86vh] ease-in-out"
        >
        </iframe>
    </div>
  )
}

export default LiveTherapy
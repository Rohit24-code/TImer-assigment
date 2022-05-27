import React, { useEffect, useState } from 'react'


const Counter = (props) => {

  const [time, setTime] = useState(props.start)
  const [end, setEnd] = useState(props.end)

  useEffect(() => {
    let id = setInterval(() => {

      if(time>=end){
        clearInterval(id)
        setTime(0)
        setEnd(0)
      }
      else{
        setTime((time) => time+1)
      }
    }, 500);

    return () => {
      clearInterval(id)
    }
  }, [time,end])


  return (
    <div>
      Counter:{time}

    </div>
  )
}

export default Counter

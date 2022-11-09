import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { getCode } from "./utils";


export default function App() {
  const [algorithm, setAlgorithm] = useState<string>("開始→")
  const [statement, setStatement] = useState<Array<{move: number, time: number}>>([{move: 0, time: 1}])
  const [time, setTime] = useState<number>(1)
  const [code, setCode] = useState<String>("")

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime: number = Number(event.target.value)
    if (newTime > 0) {
      setTime(newTime)
    } else {
      window.alert("自然数を入力して下さい。")
    }
  }

  const handleClickGo = () => {
    const go :string = "直進→"
    setAlgorithm(algorithm + go)
    let newStatement = statement
    newStatement.push({
      move: 1,
      time: time
    })
    setStatement(newStatement)
    console.log(statement)
  }

  const handleClickBack = () => {
    const back :string = "後退→"
    setAlgorithm(algorithm + back)
    let newStatement = statement
    newStatement.push({
      move: 2,
      time: time
    })
    setStatement(newStatement)
    console.log(statement)
  }

  const handleClickRight = () => {
    const right :string = "右旋回→"
    setAlgorithm(algorithm + right)
    let newStatement = statement
    newStatement.push({
      move: 3,
      time: time
    })
    setStatement(newStatement)
    console.log(statement)
  }

  const handleClickLeft = () => {
    const left :string = "左旋回→"
    setAlgorithm(algorithm + left)
    let newStatement = statement
    newStatement.push({
      move: 4,
      time: time
    })
    setStatement(newStatement)
    console.log(statement)
  }

  const handleClickStop = () => {
    const left :string = "停止→"
    setAlgorithm(algorithm + left)
    let newStatement = statement
    newStatement.push({
      move: 0,
      time: time
    })
    setStatement(newStatement)
    console.log(statement)
  }

  const handleClickComplete = () => {
    const complete: string = "完了"
    setAlgorithm(algorithm + complete)
    let newCode: string = ""
    for (let index in statement) {
      const arg = {
        move: statement[index].move,
        time: statement[index].time
      }
      newCode = newCode + getCode(arg)
    }
    setCode(newCode)
    console.log("code", newCode)
  }

  return (
    <Box component="div">
      <Box>
        <Typography variant="h4">アルゴリズム</Typography>
        <Typography variant="body1">{algorithm}</Typography>
      </Box>
      <Box>
        <TextField label="動かす時間(秒)" type="number" variant="standard" placeholder={time.toString()} onChange={handleTimeChange}/>
      </Box>
      <Box>
        <Button variant="text" onClick={handleClickGo}>直進</Button>
        <Button variant="text" onClick={handleClickBack}>後退</Button>
        <Button variant="text" onClick={handleClickRight}>右旋回</Button>
        <Button variant="text" onClick={handleClickLeft}>左旋回</Button>
        <Button variant="text" onClick={handleClickStop}>停止</Button>
      </Box>
      <Box>
        {code ? (
          <>{code.split('\n').map(t => (<span>{t}<br /></span>))}</>
        ) : (
          <Button variant="contained" onClick={handleClickComplete}>完了</Button>
        )}
      </Box>
    </Box>
  )
}
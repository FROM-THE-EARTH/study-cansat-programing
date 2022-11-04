type Statement = {
  move: number
  time: number
}

function getStopCode(time: number): string{
  return("move: stop, time: " + time.toString() + "\n")
}

function getGoCode(time: number): string{
  return("move: go, time: " + time.toString() + "\n")
}

function getBackCode(time: number): string{
  return("move: back, time: " + time.toString() + "\n")
}

function getRightCode(time: number): string{
  return("move: right, time: " + time.toString() + "\n")
}

function getLeftCode(time: number): string{
  return("move: left, time: " + time.toString() + "\n")
}

export function getCode( {move, time}: Statement ): string{
  let code: string = ""
  switch (move) {
    case 0:
      code = getStopCode(time)
      break
    case 1:
      code = getGoCode(time)
      break
    case 2:
      code = getBackCode(time)
      break
    case 3:
      code = getRightCode(time)
      break
    case 4:
      code = getLeftCode(time)
      break
  }
  return (code)
}
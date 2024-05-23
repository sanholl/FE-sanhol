import { useState, useEffect } from 'react';
import './App.css';
import { generateRandomNumber } from './random';
import Logs from './Logs';

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [answer, setAnswer] = useState('');
  const [logs, setLogs] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  
  useEffect(() => {
    console.log(randomNumber)
  }, [randomNumber]);

  const handleAnswerChanged = (event) => {
    setAnswer(event.target.value);
  }
  const handleSubmit = () => {
    const answers = answer.split('').map(Number);
    // const answers = Array.from(answer, Number);

    if(answers.some(number => isNaN(number))) {
      return alert('숫자만 입력해주세요.');
    }

    if(answers.length !== 4) {
      return alert('4자리 숫자만 입력해주세요.');
    }

    const isDupulicate = answers.some(number => {
      // [1, 2, 3, 4]
      // -> 앞에서 탐색했을때 index 0
      // <- 뒤에서부터 탐색했을때 index 0
      // [1, 1, 2, 4]
      // -> 앞에서 탐색했을때 index 0
      // <- 뒤에서부터 탐색했을때 index 1
      // 중복의 경우 앞과 뒤에서 탐색했을때 index가 다르다는 점을 활용

      // answers.indexOf(number) // 앞에서부터 배열을 탐색
      // answers.lastIndexOf(number) // 뒤에서부터 배열을 탐색
      return answers.indexOf(number) !== answers.lastIndexOf(number);
    })

    if(isDupulicate) {
      return alert('입력 값에 중복이 있어요.');
    }

    const { strike,ball } = randomNumber.reduce((prev, cur, index) =>{
      // 같은 자리에 같은 수가 존재하면 스트라이크
      if(answers[index] === cur) {
        return {
          ...prev,
          // strike: prev.strike,
          // ball: prev.ball
          strike: prev.strike + 1
        }
      }

      // 다른 자리에 수가 존재하면 볼
      if(answers.includes(cur)) {
        return {
          ...prev,
          ball: prev.ball + 1
        }
      }

      return prev;
    },{
      strike: 0,
      ball: 0
    })

    if(strike === 4) {
      alert('정답입니다.');
      setIsCorrect(true);
      setLogs([...logs, `${answer} (축하합니다. 정답입니다.)`]);
      return;
    }

    setLogs([ ...logs, `${answer} (strike: ${strike}, ball: ${ball})` ])
  }
  const handleRetry = () => {
    setRandomNumber(generateRandomNumber());
    setAnswer('');
    setLogs([]);
    setIsCorrect(false);
  }

  return (
    <div className="App">
      <h1>숫자 야구 게임</h1>
      <header>{isCorrect ? `정답: ${answer}` : '----' }</header>
      <section>
        <input type="text" value={answer} onChange={handleAnswerChanged} disabled={isCorrect}/>
        {
          isCorrect ? (
            <button onClick={handleRetry}>다시하기</button>
          ) : (
            <button onClick={handleSubmit}>맞춰보기</button>
          )
        }
      </section>
      {
        <Logs logs={logs} />
      }
    </div>
  );
}

export default App;

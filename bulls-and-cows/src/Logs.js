// div, span, ol, li  소문자로 작성하게 되면 react에서 Dom 태그로 처리
// custom 컴포넌트 작성시에는 대문자로 작성
const Logs = ({ logs }) => {
  return (
    <>
      <h2>기록</h2>
      <ol>
        {logs.map((log, index) => {
          return <li key={`${log}_${index}`}>{log}</li>;
        })}
      </ol>
    </>
  );
};

export default Logs;

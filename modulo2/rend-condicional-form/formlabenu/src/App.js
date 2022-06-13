import styled from "styled-components";
import Questions1 from './components/questions1';

const All = styled.div`
  border: 1px solid rgb(250, 200, 300);
  width: 90%;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: rgb(150, 200, 200);
  word-wrap: break-word;
  text-align: center;
  align-items: center;
  display: column;
`;

function App() {
  return (
    <div>
      <All>
        <p>Fomulário LabeForms</p>
        <input value="nome"></input>
          <div>
          {Questions1}
          </div>        
      </All>
    </div>
  );
}

export default App;

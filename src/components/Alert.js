import { Alert } from "antd";
import "antd/dist/antd.css";

function showAlert({ control, index }) {
  const message = [
    "Cadastro efetuado com sucesso!",
    "Não foi possível efetuar o cadastro!",
  ];

  const type = [
    "success", 
    "error"
  ];

  return (
    <div>
      {
      control ? (
        <Alert message={`${message[index]}`} type={`${type[index]}`} closable />
      ) : (
        ""
      )}
    </div>
  );
}

export default showAlert;

import { Alert } from "antd";

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
        <Alert message={`${message[index]}`} type={`${type[index]}`} closable style={{ width: '50%', margin: '2em 0 0 0' }} />
      ) : (
        ""
      )}
    </div>
  );
}

export default showAlert;

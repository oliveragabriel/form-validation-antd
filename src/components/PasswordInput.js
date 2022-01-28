import { Form, Input } from "antd";
import "antd/dist/antd.css";

function PasswordInput() {
  return (
    <Form.Item
      label="Senha"
      name="password"
      rules={[
        { required: true, message: "O campo Senha é obrigatório!" },
        () => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve();
            }
            if (value.length < 8) {
              return Promise.reject(
                new Error(
                  "Uma Senha segura precisa de no mínimo de 8 caracteres!"
                )
              );
            }
            if (
              value.includes("1") === false &&
              value.includes("2") === false &&
              value.includes("3") === false &&
              value.includes("4") === false &&
              value.includes("5") === false &&
              value.includes("6") === false &&
              value.includes("7") === false &&
              value.includes("8") === false &&
              value.includes("9") === false &&
              value.includes("0") === false
            ) {
              return Promise.reject(
                new Error(
                  "Uma Senha segura precisa conter ao menos um número!"
                )
              );
            }
              return Promise.resolve();
          },
        }),
      ]}
    >
      <Input.Password placeholder="" style={{ width: '50%' }} />
    </Form.Item>
  );
}

export default PasswordInput;

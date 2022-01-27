import { Form, Input } from "antd";
import "antd/dist/antd.css";

function CpfInput() {
  return (
      <Form.Item
        label=""
        name="cpf"
        rules={[
          { required: true, message: "O campo CPF é obrigatório!" },
          { max: 14, message: "Quantidade máxima de caracteres é 14!" },
          () => ({
            validator(_, value) {
              if (value.includes(".") || value.includes("-")) {
                return Promise.reject(new Error('Digite apenas números, sem pontos ou traços!'));
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <Input 
          placeholder="CPF"
        />
      </Form.Item>
  );
}

export default CpfInput;

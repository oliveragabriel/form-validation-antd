import { Form, Input } from "antd";
import "antd/dist/antd.css";

function EmailInput() {
  return (
      <Form.Item
        label=""
        name="email"
        rules={[
          { required: true, message: "O campo E-mail é obrigatório!" },
          () => ({
            validator(_, value) {
              if (value.length < 4) {
                return Promise.reject(new Error('Um e-mail válido precisa no mínimo de 4 caracteres'));
              }
              if (value.includes("@") === false) {
                return Promise.reject(new Error('Um e-mail válido precisa conter: @'));
              }
              if (value.includes(".") === false) {
                return Promise.reject(new Error('Um e-mail válido precisa conter: .'));
              }
              if (value.length >= 4 && value.includes(".") && value.includes("@")) {
                return Promise.resolve();
              }
            },
          }),
        ]}
      >
        <Input 
          placeholder="E-mail (exemplo@exemplo.com)"
        />
      </Form.Item>
  );
}

export default EmailInput;

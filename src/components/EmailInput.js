import { Form, Input } from "antd";
import { MailOutlined } from '@ant-design/icons';

function EmailInput() {
  return (
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          { required: true, message: "O campo E-mail é obrigatório!" },
          () => ({
            validator(_, value) {
              if (!value) {
                return Promise.resolve();
              }
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
          placeholder="exemplo@exemplo.com"
          addonAfter={<MailOutlined />}
          style={{ width: '50%' }}
        />
      </Form.Item>
  );
}

export default EmailInput;

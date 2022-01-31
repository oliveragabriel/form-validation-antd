import { Form, Input } from "antd";

function ConfirmPasswordInput() {
  return (
    <Form.Item
      label="Confirmar Senha"
      name="confirmPassword"
      rules={[
        { required: true, message: "O campo Confirmar Senha é obrigatório!" },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            if (value.length >= getFieldValue('password').length  && getFieldValue('password') !== value) {
              return Promise.reject(new Error('Os campos Senha e Confirmar Senha não estão iguais!'));
            }
            return Promise.resolve();
          },
        })  
      ]}
    >
      <Input.Password placeholder="" style={{ width: '50%' }} />
    </Form.Item>
  );
}

export default ConfirmPasswordInput;

import { Form, Input } from "antd";
import { IdcardOutlined } from '@ant-design/icons';

function CpfInput() {
  return (
      <Form.Item
        label="CPF"
        name="cpf"
        rules={[
          { required: true, message: "O campo CPF é obrigatório!" },
          { max: 14, message: "Quantidade máxima de caracteres é 14!" },
          () => ({
            validator(_, value) {
              if (!value) {
                return Promise.resolve();
              }
              if (value.includes(".") || value.includes("-")) {
                return Promise.reject(new Error('Digite apenas números, sem pontos ou traços!'));
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <Input 
          placeholder=""
          addonAfter={<IdcardOutlined />}
          style={{ width: '50%' }}
        />
      </Form.Item>
  );
}

export default CpfInput;

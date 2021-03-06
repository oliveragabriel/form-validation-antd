import { Form, Input } from "antd";
import { IdcardOutlined } from '@ant-design/icons';

function RgInput() {
  return (
      <Form.Item
        label="RG"
        name="rg"
        rules={[
          { required: true, message: "O campo RG é obrigatório!" },
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

export default RgInput;

import { Form, Input } from "antd";
import "antd/dist/antd.css";

function RgInput() {
  return (
      <Form.Item
        label=""
        name="rg"
        rules={[
          { required: true, message: "O campo RG é obrigatório!" },
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
          placeholder="RG"
        />
      </Form.Item>
  );
}

export default RgInput;

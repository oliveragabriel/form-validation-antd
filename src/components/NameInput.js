import { Form, Input } from "antd";
import "antd/dist/antd.css";

function NameInput() {
  return (
      <Form.Item
        label=""
        name="username"
        rules={[
          { required: true, message: "O campo Nome é obrigatório!" },
        ]}
      >
        <Input 
          placeholder="Nome Completo"
        />
      </Form.Item>
  );
}

export default NameInput;

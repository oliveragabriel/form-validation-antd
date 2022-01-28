import { Form, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

function NameInput() {
  return (
      <Form.Item
        label="Nome Completo"
        name="username"
        rules={[
          { required: true, message: "O campo Nome é obrigatório!" },
        ]}
      >
        <Input 
          placeholder=""
          addonAfter={<UserOutlined />}
          style={{ width: '50%' }}
        />
      </Form.Item>
  );
}

export default NameInput;

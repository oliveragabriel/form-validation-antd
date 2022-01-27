import { Form, Button } from "antd";
import "antd/dist/antd.css";
import NameInput from "./components/NameInput";
import CpfInput from "./components/CpfInput";
import RgInput from "./components/RgInput";
import EmailInput from "./components/EmailInput";

function App() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <NameInput />
      <CpfInput />
      <RgInput />
      <EmailInput />
      <Button type="primary" htmlType="submit">
        Entrar
      </Button>
    </Form>
  );
}

export default App;

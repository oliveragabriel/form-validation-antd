import { useState } from "react";
import { Layout, Form, Button } from "antd";
import "antd/dist/antd.css";
import Alert from "./components/Alert";
import NameInput from "./components/NameInput";
import CpfInput from "./components/CpfInput";
import RgInput from "./components/RgInput";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import ConfirmPasswordInput from "./components/ConfirmPasswordInput";
import BirthDate from "./components/BirthDate";

function App() {

  const { Header, Content, Footer } = Layout;

  const [index, setIndex] = useState(null);
  const [control, setControl] = useState(false);
  const [pessoa, setPessoa] = useState({});
  console.log(pessoa)

  const [form] = Form.useForm();

  const submitForm = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setPessoa(values)
    setControl(true);
    setIndex(0);
    submitForm(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setControl(true);
    setIndex(1);
  };

  return (
    <Layout>
      <Header></Header>
      <Content style={{ padding: '0 50px' }}>
        <Form
          name="basic"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Alert control={control} index={index} />
          <NameInput />
          <CpfInput />
          <RgInput />
          <BirthDate />
          <EmailInput />
          <PasswordInput />
          <ConfirmPasswordInput />
          <Button type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </Form>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;

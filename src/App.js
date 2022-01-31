import { useCallback, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setPerson, setAlert } from "./features/counterSlice";

import { Layout, Form, Button } from "antd";
import 'antd/dist/antd.min.css';

import Alert from "./components/Alert";
import NameInput from "./components/NameInput";
import CpfInput from "./components/CpfInput";
import RgInput from "./components/RgInput";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import ConfirmPasswordInput from "./components/ConfirmPasswordInput";
import BirthDate from "./components/BirthDate";
import Table from "./components/Table";

function App() {
  const { Header, Content, Footer } = Layout;

  const {pessoa, control, index} = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  useEffect(() => {
    console.log(pessoa)
  }, [pessoa]);

  const onFinish = useCallback(
    (values) => {
      console.log("Success:", values);
      dispatch(setPerson(values));
      dispatch(setAlert({ control: true, index: 0}));
      form.resetFields();
    },
    [form, dispatch]
  );

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    dispatch(setAlert({ control: true, index: 1}));
  };

  return (
    <Layout>
      <Header></Header>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "0 50px",
        }}
      >
        <Alert control={control} index={index} />
        <Form
          name="basic"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            margin: "2em 0 2em 0",
            border: "1px lightgrey solid",
            borderRadius: "3px",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          <NameInput />
          <CpfInput />
          <RgInput />
          <BirthDate />
          <EmailInput />
          <PasswordInput />
          <ConfirmPasswordInput />
          <Button type="primary" htmlType="submit" style={{ width: "30%" }}>
            Cadastrar
          </Button>
        </Form>
        <Table />
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;

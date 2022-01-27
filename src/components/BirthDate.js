import { Form, DatePicker } from "antd";
import "antd/dist/antd.css";
import moment from 'moment';

function BirthDate() {

  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

  return (
    <Form.Item
      label="Data de Nascimento"
      name="birthDate"
      rules={[
        { required: true, message: "O campo Data de Nascimento é obrigatório!" },
      ]}
      initialValue={moment("01/01/2022", dateFormatList[0])}
    >
      <DatePicker placeholder="Data de Nascimento" format={dateFormatList} />
    </Form.Item>
  );
}

export default BirthDate;

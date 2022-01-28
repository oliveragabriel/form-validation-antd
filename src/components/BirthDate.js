import { Form, DatePicker } from "antd";
import "antd/dist/antd.css";
import moment from 'moment';

function BirthDate() {

  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

  return (
    <Form.Item
      label="Data de Nascimento"
      name="birth"
      rules={[
        { required: true, message: "O campo Data de Nascimento é obrigatório!" },
      ]}
    >
      <DatePicker 
        placeholder="Selecione uma data" 
        format={dateFormatList} 
        initialValue={moment("01/01/2022", dateFormatList[0])}
        style={{ width: '50%' }}
      />
    </Form.Item>
  );
}

export default BirthDate;

import { useCallback } from "react";
import { Table } from "antd";
import { useSelector } from 'react-redux';

function UserTable() {
  const columns = [
    {
      title: "Nome",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "CPF",
      dataIndex: "cpf",
      key: "cpf",
    },
    {
      title: "RG",
      dataIndex: "rg",
      key: "rg",
    },
    {
      title: "Data de Nascimento",
      dataIndex: "birth",
      key: "birth",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Senha",
      dataIndex: "password",
      key: "password",
    },
  ];

  const data = useSelector((state) => state.counter.pessoa);

  // const pessoa = {
  //   username: data.username,
  //   cpf: data.cpf,
  //   rg: data.rg,
  //   email: data.email,
  //   password: data.password
  // }

  useCallback(() => {
    console.log(data);
  }, [data]);
  

  return <Table columns={columns} dataSource={data} style={{ width: '50%' }} />;
}

export default UserTable;

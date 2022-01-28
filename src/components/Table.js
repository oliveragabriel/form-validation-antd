import { Table, Space } from "antd";
import "antd/dist/antd.css";

function UserTable({ pessoa }) {
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
    // {
    //   title: 'Ações',
    //   key: 'action',
    //   render: (pessoa) => (
    //     <Space size="middle">
    //       <button>Editar</button>
    //       <button>Deletar</button>
    //     </Space>
    //   ),
    // },
  ];

  const data = [
    {
      username: pessoa.username,
      cpf: pessoa.cpf,
      rg: pessoa.rg,
      birth: pessoa.birth,
      email: pessoa.email,
      password: pessoa.password,
    },
  ];

  return <Table columns={columns} dataSource={data} style={{ width: '50%' }} />;
}

export default UserTable;

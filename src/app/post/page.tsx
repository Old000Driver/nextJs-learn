"use client";
import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  Table,
  Space,
  Popconfirm,
  Card,
  Divider,
  Modal,
  Form,
} from "antd";
import type { TableProps } from "antd";
import { addData, getData, updateData, deleteData } from "../../api/searchData";
import { DataType } from "@/types/data";

const App = () => {
  const [form] = Form.useForm();

  const [searchText, setSearchText] = useState<string>("");
  // 定义 dataList 为 dataType[] 类型
  const [dataList, setDataList] = useState<DataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingData, setEditingData] = useState<DataType | null>(null);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "内容",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>编辑</a>
          <Popconfirm
            title="确定要删除吗？"
            onConfirm={() => handleDelete(record.id)}
          >
            <a>删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const fetchTableData = async () => {
    try {
      const res = await getData();
      console.log(res);
      const dataWithKeys = res;
      setDataList(dataWithKeys);
    } catch (error) {
      console.error('获取数据失败:', error);
      // 可以在这里添加错误处理，比如显示错误提示
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  // useEffect(() => {
  //   if (!isModalOpen) {
  //     setEditingData(null);
  //     form.resetFields();
  //   }
  // }, [isModalOpen]);

  const handleSearch = () => {
    if (searchText) {
      getData({ pagesize: 5, pageNum: 1, query: searchText }).then((res) => {
        const filteredData = res;
        setDataList(filteredData);
      });
    } else {
      fetchTableData();
    }
  };

  const handleReset = () => {
    setSearchText("");
    setDataList([]);
  };

  const handleEdit = (record: DataType) => {
    setEditingData(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setIsModalOpen(true);
    setEditingData(null);
    form.resetFields();
  };

  const handleDelete = (id: string) => {
    deleteData(id).then(() => {
      fetchTableData();
    });
  };

  const handleModalOk = () => {
    form.validateFields().then(values => {
      if (editingData) {
        // 处理编辑
        updateData({ ...values, id: editingData.id }).then(() => {
          fetchTableData();
        });
      } else {
        // 处理添加
        addData(values).then(() => {
          fetchTableData();
        });
      }
      setIsModalOpen(false);
    });
  };

  const handleModalCancel = () => {
    form.resetFields();
    setEditingData(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <Card>
        {/* 搜索栏部分 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Input
              placeholder="搜索"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button onClick={handleSearch}>搜索</Button>
            <Button onClick={handleReset}>重置</Button>
          </div>
          <Button type="primary" onClick={handleAdd}>
            添加
          </Button>
        </div>

        <Divider style={{ margin: "24px 0" }} />

        {/* 表格部分 */}
        <Table
          columns={columns}
          dataSource={dataList}
          pagination={{ pageSize: 5 }}
        />

        {/* 添加 Modal */}
        <Modal
          title={editingData ? "编辑" : "添加"}
          open={isModalOpen}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
          // afterOpenChange={() => form.resetFields()}
          // afterClose={() => form.resetFields()}
          destroyOnClose
        >
          <Form
            form={form}
            layout="vertical"
            initialValues={editingData || {}}
            preserve={false}
          >
            <Form.Item
              name="title"
              label="标题"
              rules={[{ required: true, message: "请输入标题" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="content"
              label="内容"
              rules={[{ required: true, message: "请输入内容" }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </div>
  );
};

export default App;

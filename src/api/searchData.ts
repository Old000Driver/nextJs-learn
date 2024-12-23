// axios 获取data
import axios from "axios";
import type { DataType, searchParams } from "@/types/data";

// Interface params

export async function getData(params?: searchParams): Promise<DataType[]> {
  const response = await axios.get("/service/articles", {
    params,
  });
  return response.data.data as DataType[];
}

// 添加数据
export async function addData(data: DataType): Promise<DataType> {
  const response = await axios.post("/service/articles", data);
  return response.data.data;
}

// 删除数据
export async function deleteData(id: string): Promise<DataType> {
  const response = await axios.delete(`/service/articles/${id}`);
  return response.data;
}

// 修改数据
export async function updateData(data: DataType): Promise<DataType> {
  const response = await axios.patch(`/service/articles/${data.id}`, data);
  return response.data;
}

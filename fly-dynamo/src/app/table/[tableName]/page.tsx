import {
  GetCommand,
  PutCommand,
  UpdateCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
import { dynamodbDoc } from "@fly-dynamo/config/fetcher/aws/dynamoDb/dynamoDb.config";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

const scanTable = async (tableName: string) => {
  const command = new ScanCommand({
    TableName: tableName,
    Limit: 50,
  });

  const result = await dynamodbDoc.send(command);
  return result;
};

const getItem = async (tableName: string) => {
  const command = new GetCommand({
    TableName: tableName,
    Key: {
      id: "1",
    },
  });
  const result = await dynamodbDoc.send(command);
  return result;
};

const putItem = async (tableName: string) => {
  const command = new PutCommand({
    TableName: tableName,
    Item: {
      id: "1",
      name: "Yan",
    },
  });
  const result = await dynamodbDoc.send(command);
  return result;
};

export default async function TablePage({
  params,
}: {
  params: { tableName: string };
}) {
  // list all tables
  if (!params.tableName) {
    redirect("/table");
  }

  const res = await scanTable(params.tableName);

  console.log(res);
  // if (Object.keys(Attributes!).length) {
  //   return <div>something</div>;
  // }
  return <> nothing</>;
}

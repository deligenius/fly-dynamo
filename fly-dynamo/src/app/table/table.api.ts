import {
  UpdateCommand,
  GetCommand,
  PutCommand,
  ScanCommand,
  
} from "@aws-sdk/lib-dynamodb";
import { dynamodbDoc } from "@fly-dynamo/config/fetcher/aws/dynamoDb/dynamoDb.config";

import {
  GetItemCommand,
  DescribeTableCommand
} from "@aws-sdk/client-dynamodb";


export const getTableMetadata = async (tableName: string) => {
  const command = new DescribeTableCommand({
    TableName: tableName,
  });

  const result = await dynamodbDoc.send(command);
  return result;
};


export const scanTable = async (tableName: string) => {
  const command = new ScanCommand({
    TableName: tableName,
    Limit: 50,
  });

  const result = await dynamodbDoc.send(command);
  return result;
};

export const updateItem = async (tableName: string) => {
  const command = new UpdateCommand({
    TableName: tableName,
    Key: {
      id: "1",
    },
    UpdateExpression: "set #set = :set",
    ExpressionAttributeNames: {
      "#set": "set",
    },
    ExpressionAttributeValues: {
      ":set": new Set(["a", "b", "c", "d", "e"]),
    },
  });

  const result = await dynamodbDoc.send(command);
  return result;
};

export const getItem = async (tableName: string) => {
  const command = new GetCommand({
    TableName: tableName,
    Key: {
      id: "1",
    },
  });
  const result = await dynamodbDoc.send(command);
  return result;
};

export const getRawItem = async (tableName: string) => {
  const command = new GetItemCommand({
    TableName: tableName,
    Key: {
      id: { S: "1" },
    },
  });
  const result = await dynamodbDoc.send(command);
  return result;
};

export const putItem = async (tableName: string) => {
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

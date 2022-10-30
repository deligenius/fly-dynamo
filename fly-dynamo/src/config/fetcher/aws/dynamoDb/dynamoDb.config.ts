import { DynamoDBClient, DynamoDB } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  DynamoDBDocument,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: "us-west-2",
  endpoint: "http://localhost:8002",
});

export const dynamodbDoc = DynamoDBDocument.from(client, {});

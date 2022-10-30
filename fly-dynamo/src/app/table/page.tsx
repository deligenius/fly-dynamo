import { ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { dynamodbDoc } from "@fly-dynamo/config/fetcher/aws/dynamoDb/dynamoDb.config";
import Link from "next/link";

const getTables = async () => {
  const command = new ListTablesCommand({});
  return dynamodbDoc.send(command);
};

export default async function TablePage() {
  // list all tables
  const { TableNames } = await getTables();

  return (
    <>
      {TableNames?.map((tableName) => (
        <div key={tableName}>
          <Link href={`/table/${tableName}`}>{tableName}</Link>
        </div>
      ))}
    </>
  );
}

import {
  GetCommand,
  PutCommand,
  UpdateCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
import { dynamodbDoc } from "@fly-dynamo/config/fetcher/aws/dynamoDb/dynamoDb.config";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getTableMetadata, scanTable } from "../table.api";
import { JsonView } from "./JsonView.client";
import "./prism.css"

interface TableKeys {
  hashKey: string;
  rangeKey?: string;
}

const getTableInfo = async (tableName: string) => {
  const [scanRes, describeRes] = await Promise.all([
    scanTable(tableName), getTableMetadata(tableName)
  ])

  const tableKeys = describeRes.Table!.KeySchema!.reduce((accu, item)=> {
    if (item.KeyType === "HASH") {
      accu.hashKey = item.AttributeName!
    } else if (item.KeyType === "RANGE") {
      accu.rangeKey = item.AttributeName!
    }
    return accu
  }, {} as TableKeys)

  return {
    tableKeys,
    items: scanRes.Items
  }
}



export default async function TablePage({
  params,
}: {
  params: { tableName: string };
}) {
  // list all tables
  if (!params.tableName) {
    redirect("/table");
  }

  const {items, tableKeys} = await getTableInfo(params.tableName);
  
  if(!items?.length){
    return <div>No items available</div>
  }

  return (
    <>
      {items?.map((item, index) => (
        <div key={item.id ?? index}>
          <span>HashKey{item[tableKeys?.hashKey]}</span>
          <JsonView item={item ?? {}} />
        </div>
        
      ))}
    </>
  );
}

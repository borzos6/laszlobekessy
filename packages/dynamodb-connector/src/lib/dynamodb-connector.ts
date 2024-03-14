import {
  DynamoDBClient,
  PutItemCommand,
  PutItemInput,
  ScanCommand,
  ScanInput,
  UpdateItemCommand,
  UpdateItemInput,
} from '@aws-sdk/client-dynamodb';
import { DynamoDBConnectorConfig } from './dynamodb-connector.d';

class DynamoDBConnector {
  private config: DynamoDBConnectorConfig;
  private db: DynamoDBClient;

  constructor(config: DynamoDBConnectorConfig) {
    this.config = config;
    this.db = new DynamoDBClient({
      region: this.config.region,
    });
  }

  /**
   * Put an item to the DB
   */
  public async putItem(item: object) {
    // Build the command object
    const putItemCommand = new PutItemCommand({
      TableName: this.config.tableName,
      Item: item,
    } as PutItemInput);

    try {
      return await this.db.send(putItemCommand);
    } catch (error) {
      console.error('Error adding item:', error);
      throw error;
    }
  }

  /**
   * Get all items from the DB based on a key and value provided
   */
  public async getItemByStringKey(key: string, value: string) {
    // Build the command object
    const scanCommand = new ScanCommand({
      TableName: this.config.tableName,
      ScanIndexForward: true,
      FilterExpression: `#k = :v`,
      ExpressionAttributeNames: {
        '#k': key,
      },
      ExpressionAttributeValues: {
        ':v': { S: value },
      },
    } as ScanInput);

    try {
      return (((await this.db.send(scanCommand)).Items || [])[0] ||
        {}) as object;
    } catch (error) {
      console.error('Error retrieving items:', error);
      throw error;
    }
  }

  /**
   * Update an item in the DB by a given key
   */
  public async updateItemByKey(
    key: string,
    value: string,
    updateExpression: string,
    expressionAttributeValues: object,
    expressionAttributeNames: object
  ) {
    // Build the command object
    const updateItemCommand = new UpdateItemCommand({
      TableName: this.config.tableName,
      Key: {
        [key]: { S: value },
      },
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionAttributeValues,
      ExpressionAttributeNames: expressionAttributeNames,
    } as UpdateItemInput);

    try {
      return await this.db.send(updateItemCommand);
    } catch (error) {
      console.error('Error updating item:', error);
      throw error;
    }
  }

  public async scan(command: ScanInput) {
    // Build the command object
    command.TableName = this.config.tableName;
    const scanCommand = new ScanCommand(command);

    try {
      return (((await this.db.send(scanCommand)).Items || [])[0] ||
        {}) as object;
    } catch (error) {
      console.error('Error retrieving items:', error);
      throw error;
    }
  }
}

export { DynamoDBConnector };

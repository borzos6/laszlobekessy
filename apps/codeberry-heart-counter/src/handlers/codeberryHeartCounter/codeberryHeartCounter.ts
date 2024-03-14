import { DynamoDBConnector } from '@laszlobekessy/dynamodb-connector';
import { CodeBerryHeartCounterDBTableLayout } from './codeberryHeartCounter.d';

class CodeBerryHeartCounter {
  private dynamoDBConnector: DynamoDBConnector;

  constructor() {
    // Initialize the DB class
    this.dynamoDBConnector = new DynamoDBConnector({
      region: process.env['AWS_REGION'] || 'eu-central-1',
      tableName:
        process.env['AWS_DYNAMODB_TABLE_NAME'] || 'CodeberryHeartCounter',
    });
  }

  public async getCount() {
    // Get the count
    const heartCount = (await this.dynamoDBConnector.getItemByStringKey(
      'Name',
      'HeartCount'
    )) as CodeBerryHeartCounterDBTableLayout;

    // Return the count
    return heartCount.Value.N || '0';
  }

  public async addOne() {
    // Get the count
    const heartCount = (await this.dynamoDBConnector.getItemByStringKey(
      'Name',
      'HeartCount'
    )) as CodeBerryHeartCounterDBTableLayout;

    // Increment the count
    const newCount = (parseInt(heartCount.Value.N) || 0) + 1;

    // Updating the item
    const result = await this.dynamoDBConnector.updateItemByKey(
      'Name',
      'HeartCount',
      'SET #Value = :newValue, #LastUpdated = :newLastUpdated',
      {
        ':newValue': { N: newCount.toFixed(0) },
        ':newLastUpdated': { N: Math.floor(Date.now() / 1000).toString() },
      },
      {
        '#Value': 'Value',
        '#LastUpdated': 'LastUpdated',
      }
    );
  }
}

export { CodeBerryHeartCounter };

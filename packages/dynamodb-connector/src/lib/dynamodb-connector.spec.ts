import { DynamoDBConnector } from './dynamodb-connector';
import { DynamoDBConnectorConfig } from './dynamodb-connector.d';
import {
  DynamoDBClient,
  PutItemCommand,
  PutItemInput,
} from '@aws-sdk/client-dynamodb';

// Mock the DynamoDBClient class
jest.mock('@aws-sdk/client-dynamodb', () => {
  return {
    DynamoDBClient: jest.fn().mockImplementation(() => {
      return {
        send: jest.fn().mockImplementation(() => {
          return {
            promise: jest.fn().mockResolvedValue('Success'),
          };
        }),
      };
    }),
    PutItemCommand: jest.fn(),
  };
});

// ===================== DynamoDBConnector ===================== //
const testConnectorConfig: DynamoDBConnectorConfig = {
  region: 'eu-west-8',
  tableName: 'TestingDynamoTable',
};

const testClientConfig: object = {
  region: 'eu-west-8',
};

describe('DynamoDBConnector', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock function calls between tests
  });

  it('should create an instance of DynamoDBConnector', () => {
    const dynamoDBConnector = new DynamoDBConnector(testConnectorConfig);
    expect(dynamoDBConnector).toBeInstanceOf(DynamoDBConnector);
  });

  it('should connect to DynamoDb with the provided configuration', async () => {
    new DynamoDBConnector(testConnectorConfig);
    expect(DynamoDBClient).toHaveBeenCalledWith(testClientConfig);
  });
});

// ===================== DynamoDBConnector.putItem ===================== //
describe('DynamoDBConnector.putItem', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock function calls between tests
  });

  // Create an instance of DynamoDBConnector
  const dynamoDBConnector = new DynamoDBConnector(testConnectorConfig);

  it('should put an item to DynamoDB and succeed', async () => {
    // Good test item
    const testItem = {
      ID: { S: 'test_id' },
      NumericValue: { N: `${1234}` },
      StringValue: { S: 'string' },
    };

    const response = await dynamoDBConnector.putItem(testItem);

    expect(PutItemCommand).toHaveBeenCalledWith({
      TableName: testConnectorConfig.tableName,
      Item: testItem,
    } as PutItemInput);

    expect(response).toBeDefined();
  });
});

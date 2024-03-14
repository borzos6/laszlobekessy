import {
  SecretsManagerClient,
  GetSecretValueCommand,
  UpdateSecretCommand,
} from '@aws-sdk/client-secrets-manager';
import { SecretsManagerConnectorConfig } from './secrets-manager-connector.d';

class SecretsManagerConnector {
  private config: SecretsManagerConnectorConfig;
  private client: SecretsManagerClient;

  constructor(config: SecretsManagerConnectorConfig) {
    this.config = config;
    this.client = new SecretsManagerClient({ region: this.config.region });
  }

  public async getSecrets(overrideWithEnvVars = true) {
    // Get Secrets from AWS Secrets Manager
    try {
      const response = await this.client.send(
        new GetSecretValueCommand({
          SecretId: this.config.secretId,
        })
      );

      if (response) {
        const secrets = JSON.parse(response.SecretString || '{}');
        if (overrideWithEnvVars) {
          return this.overrideSecretsWithEnvVars(secrets);
        } else {
          return secrets;
        }
      } else {
        throw new Error(
          `Could not get secrets from AWS Secrets Manager ${this.config.secretId} / ${this.config.region}.`
        );
      }
    } catch (error) {
      console.error(
        `Could not get secrets from AWS Secrets Manager ${this.config.secretId} / ${this.config.region}.`
      );
      console.error(error);
      throw error;
    }
  }

  public async updateSecrets(secrets: { [key: string]: string | undefined }) {
    // Update Secrets in AWS Secrets Manager
    try {
      const currentSecrets = await this.getSecrets(false);
      const newSecrets = { ...currentSecrets, ...secrets };

      const response = await this.client.send(
        new UpdateSecretCommand({
          SecretId: this.config.secretId,
          SecretString: JSON.stringify(newSecrets),
        })
      );

      if (response) {
        return newSecrets;
      } else {
        throw new Error(
          `Could not update secrets in AWS Secrets Manager ${this.config.secretId} / ${this.config.region}.`
        );
      }
    } catch (error) {
      console.error(
        `Could not update secrets in AWS Secrets Manager ${this.config.secretId} / ${this.config.region}.`
      );
      console.error(error);
      throw error;
    }
  }

  public async overrideSecretsWithEnvVars(secrets: {
    [key: string]: string | undefined;
  }) {
    // Override Secrets with Environment Variables
    const secretsWithEnvVars: { [key: string]: string | undefined } = {
      ...secrets,
    };
    Object.keys(secretsWithEnvVars).forEach((key) => {
      if (process.env[key]) {
        secretsWithEnvVars[key] = process.env[key];
      }
    });
    return secretsWithEnvVars;
  }
}

export { SecretsManagerConnector };

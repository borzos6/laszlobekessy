# Laszlobekessy Monorepo

## Tech
This monorepo is run by [Nx](https://nx.dev). It uses AWS & GitHub for deployment and the IaC driver is terraform.

# Contents
## Infrastructure
- `infrastructure/aws-common`: Common infrastructure for my personal AWS account
- `infrastructure/aws-security`: Security-related infrastructure for my personal AWS account
- `infrastructure/aws-blueprint-github-s3-cloudfront`: Blueprint for GitHub Actions + AWS S3 + Cloudfront static website deployment

## Packages
- `packages/dynamodb-connector`: AWS DynamoDB connector
- `packages/secrets-manager-connector`: AWS Secrets Manager connector

## Apps
- `apps/laszlo-bekessy-me`: Intro & portfolio website running under [https://laszlo.bekessy.me](https://laszlo.bekessy.me).
- `apps/codeberryschool.com`: The postmortem website hosted on [https://codeberryschool.com](https://codeberryschool.com)
- `apps/codeberry-heart-counter`: Serverless lambda function to count the clicks on the heart icon on the postmortem CodeBerry website


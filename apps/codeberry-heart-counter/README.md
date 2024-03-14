# CodeBerry Heart Counter

## Development

- This is a serverless application designed to work on AWS Lambda
- You need to have AWS configured on your machine with enough access to all resources (typically as config files in your `.aws` folder)

## Deployment

- Production: `STAGE=production npx nx run codeberry-heart-counter:deploy`
- Development: `npx nx run codeberry-heart-counter:deploy` (the default command uses `STAGE=development`)

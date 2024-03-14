import { CodeBerryHeartCounter } from './codeberryHeartCounter';

// Create the codeberryHeartCounter instance
const codeberryHeartCounter = new CodeBerryHeartCounter();

// Create the getCount
export const getCount = async () => {
  let success = false;
  let heartCount = '0';

  try {
    heartCount = await codeberryHeartCounter.getCount();
    success = true;
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: success ? 200 : 500,
    body: success ? JSON.stringify({ heartCount }) : 'An error occured.',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': false,
    },
  };
};

// Create the addOne
export const addOne = async () => {
  let success = false;
  let heartCount = '0';

  try {
    await codeberryHeartCounter.addOne();
    heartCount = await codeberryHeartCounter.getCount();
    success = true;
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: success ? 200 : 500,
    body: success ? JSON.stringify({ heartCount }) : 'An error occured.',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': false,
    },
  };
};

// import { ApiClient, DefaultApi } from 'finnhub';

// const apiKey = process.env.EXPO_PUBLIC_FINNHUB_KEY

// const api_key = ApiClient.instance.authentications['api_key'];
// api_key.apiKey = apiKey
// const finnhubClient = new DefaultApi()

// export const getMarketNews = async () => {
//   try {
//     const data = await new Promise((resolve, reject) => {
//       finnhubClient.marketNews('general', {}, (error, data, response) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(data);
//         }
//       });
//     });

//     console.log('data: ', data)

//     return data;
//   } catch (error) {
//     console.error("Error fetching market news:", error);
//     throw error;
//   }
// };

// services/finnhub.js
const apiKey = process.env.EXPO_PUBLIC_FINNHUB_KEY;

export const getMarketNews = async () => {
  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/news?category=general&token=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch market news");
    }

    const data = await response.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.error("Error fetching market news:", error);
    throw error;
  }
};
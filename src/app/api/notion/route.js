const url = 'https://api.notion.com/v1/databases/9ec494c843d84f788f72c00b9602af85'

import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const fetchDataNotion = (async () => {
  const databaseId = '9ec494c843d84f788f72c00b9602af85';
  const response = await notion.databases.retrieve({ 
    database_id: databaseId ,
    dat
    
  });
  console.log(response);
})();

// export const fetchDataFromNotion = async () => {
//   const config = {
//     method: 'GET',
//     maxBodyLength: Infinity,
//     url: url,
//     headers: { 
//       'Authorization': `Bearer secret_H8XtaGmxiX0vIpCZ9pg2Gj5RiIOQaVrcahTDQFtk8t3`, 
//       'Notion-Version': '2021-08-16', 
//       'Content-Type': 'application/json'
//     },
//     data: {
//       "filter": {
//         "property": "Disponibilidad",
//         "status": {
//           "equals": "En stock"
//         }
//       }
//     }
//   }
//   try {
//     const response = await axios.request(config);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };



 
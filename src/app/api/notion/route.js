import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.post(
      'https://api.notion.com/v1/databases/9ec494c843d84f788f72c00b9602af85/query',
      {},
      {
        headers: {'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
        'Notion-Version': '2021-08-16',
        'Content-Type': 'application/json'
      }
      }
    );
    
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Notion' });
  }
}

// Obtengo los datos de notion en data 

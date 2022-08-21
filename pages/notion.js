import {useEffect} from 'react'
const { Client } = require('@notionhq/client');

export default function notion() {
    useEffect(() => {

        const notion = new Client({ auth: 'secret_PjemlSHhJEFV6jk3lFzlXbdFTjKOmHErPYV1mNGateN' });
        
        (async () => {
          const databaseId = 'ce7aa8853cae49dcbc450970ff7167e3';
          const response = await notion.databases.retrieve({ database_id: databaseId });
          console.log(response);
        })();
    }, [])
    
  return (
    <div>notion</div>
  )
}

import { Client } from '@notionhq/client';

const client = new Client({
    auth: process.env.PROJECT_PASSWORD,
});

const projectDatabase = async() => {
    const myPosts = await client.databases.query({
        database_id: `${process.env.PROJECT_APIKEY}`,
    });
    return myPosts;
}

const projectPage = async(id: string) => {
    const myPost = await client.pages.retrieve({
        page_id: id,
    });
    return myPost;
}

const projectBlocks = async(id: string) => {
    const myBlocks = await client.blocks.children.list({
        block_id: id
    });
    return myBlocks;
}

export {
  projectDatabase,
  projectPage,
  projectBlocks
}
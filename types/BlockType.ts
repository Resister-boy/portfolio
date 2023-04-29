export type BlocksType = {
  blocks: BlockType[];
}

export type BlockType = {
  role: string;
  value: {
    alive: boolean;
    id: string;
    properties: {
      title: string[];
    };
    type: string;
  }
}
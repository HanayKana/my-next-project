export type News = {
  id: string;
  title: string;
  //ategoryというオブジェクトにnameというオブジェクトが入っているような
  // 入れ子構造になっている！
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

export type Category = {
  name: string;
};

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  users: Array<User>;
  post: Post;
  posts: Array<Post>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  posts: Array<Post>;
};


export type UserPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<PostWhereUniqueInput>;
  after?: Maybe<PostWhereUniqueInput>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
  slug: Scalars['String'];
  author: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  createPost: Post;
};


export type MutationCreateUserArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  slug: Scalars['String'];
  authorId: Scalars['ID'];
};

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'slug'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    ) }
  )> }
);

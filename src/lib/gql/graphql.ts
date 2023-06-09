/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  getTokenByCode?: Maybe<Scalars['String']>;
  verifyIdToken?: Maybe<Scalars['String']>;
};


export type MutationGetTokenByCodeArgs = {
  code: Scalars['String'];
};


export type MutationVerifyIdTokenArgs = {
  idToken: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  greetings?: Maybe<Scalars['String']>;
};

export type GetTokenByCodeMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetTokenByCodeMutation = { __typename?: 'Mutation', getTokenByCode?: string | null };

export type VerifyIdTokenMutationVariables = Exact<{
  idToken: Scalars['String'];
}>;


export type VerifyIdTokenMutation = { __typename?: 'Mutation', verifyIdToken?: string | null };


export const GetTokenByCodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GetTokenByCode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTokenByCode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]} as unknown as DocumentNode<GetTokenByCodeMutation, GetTokenByCodeMutationVariables>;
export const VerifyIdTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyIdToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyIdToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}}}]}]}}]} as unknown as DocumentNode<VerifyIdTokenMutation, VerifyIdTokenMutationVariables>;
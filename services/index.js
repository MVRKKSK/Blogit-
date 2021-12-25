import React from 'react'
import { request , gql } from 'graphql-request'

const graphQLApi = process.env.GRAPHQL_API_ENDPOINT;

export const GetPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              exercpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
      
    `
    const result = await request(graphQLApi , query);
    return result.postsConnection.edges
}


export const getRecentPosts = async () =>{
  const query = gql`
  query GetPostDetails () {
    posts(
      orderBy: createdAt_ASC
      last: 3
    )
    {
      title
      featuredImage{
        url
      }
      createdAt
      slug
    }
  }
  `
  const result = await request(graphQLApi , query);
  return result.posts
}

export const getSimilarposts = async () => {
  const query = gql `
  query GetPostDetails ($slug: string! , $categories: [string!]){
    posts(
      where: { slug_not: $slug , AND: { categories_some: {slug_in : $categories} }}
      last: 3
    )
    {
      title
      featuredImage{
        url
      }
      createdAt
      slug
    }
  }
  `
  const result = await request(graphQLApi , query);
  return result.posts
}
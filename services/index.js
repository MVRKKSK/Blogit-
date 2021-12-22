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

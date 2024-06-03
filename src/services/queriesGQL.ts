import { gql } from "@apollo/client";

export const pinnedProjects = gql`{
  user(login:"${process.env.USER}"){
    pinnedItems(first: 6, types: REPOSITORY){
      nodes {
        ... on Repository {
          name
          id
          licenseInfo{
            name
          }
          openGraphImageUrl
          homepageUrl
        	primaryLanguage{
            name
            color
          }
          languages(first: 3){
            nodes{
              name
              color
            }
          }
          shortDescriptionHTML
          url
          usesCustomOpenGraphImage
        }
      }
    }
  }
}`
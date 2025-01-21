import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "1qmwrewk", 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",  
  useCdn: true,                                                     
  apiVersion: "2023-01-01",                                        
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
});

export default client;

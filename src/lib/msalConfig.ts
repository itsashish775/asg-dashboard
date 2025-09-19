export const msalConfig = {
  auth: {
    clientId: "a1ed932c-0192-41a4-b0a9-aec2e881e6d0", // Azure App Registration (Frontend)
    authority:
      "https://login.microsoftonline.com/2725e1ce-3acc-4dd7-b7ad-4ee2441de24f",
    redirectUri: "http://localhost:3001", // must match Azure App Registration
  },
  cache: {
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["api://c92a5959-e4e4-438d-8b88-11954bc469e0/access_as_user"],
};

// export const msalConfig = {
//   auth: {
//     clientId: "04688275-97b0-4419-a1e0-b965fb044b1e", // Azure App Registration (Frontend)
//     authority:
//       "https://login.microsoftonline.com/7ddcd412-aa67-423e-b6d7-8a90efbeeeb9",
//     redirectUri: "http://localhost:3000", // must match Azure App Registration
//   },
//   cache: {
//     storeAuthStateInCookie: false,
//   },
// };

// export const loginRequest = {
//   scopes: ["api://66e932af-08ec-4af5-a943-b3fe7a3bbe38/access_as_user"],
// };

// {
//   clientId: "c92a5959-e4e4-438d-8b88-11954bc469e0";
//   scopes: ["api://c92a5959-e4e4-438d-8b88-11954bc469e0/access_as_user"]
//   secretId:"07adc539-4b8b-486b-a8c5-509f2689b78d"

// }

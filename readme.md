# GraphQL API with Node

<p align="left">
    <img src="https://img.shields.io/badge/node-v20.9.0-green?logo=node.js&labelColor=black" alt="Node.js version">
    <img src="https://img.shields.io/badge/tsnode-v2.0.0-darkblue?logo=tsnode&labelColor=black" alt="TS Node version">
    <img src="https://img.shields.io/badge/typescript-v5.7.3-blue?logo=typescript&labelColor=black" alt="TypeScript version">
    <img src="https://img.shields.io/badge/graphql-v16.10.0-white?logo=graphql&labelColor=black" alt="GraphQL version">
    <img src="https://img.shields.io/badge/apolloserver-v3.13.0-white?logo=apolloserver&labelColor=blue" alt="Apollo Server version">
</p>

## Description
This project is a simple GraphQL API built with TypeScript and TypeGraphQL, using Apollo Server to handle GraphQL requests. The API allows creating and listing appointments, as well as resolving related fields like the customer.

## Technologies Used
- **TypeScript**: A superset of JavaScript that adds static typing.
- **TypeGraphQL**: A framework for building GraphQL APIs with TypeScript in an intuitive way.
- **Apollo Server**: A GraphQL server that simplifies API creation and management.
- **Reflect Metadata**: Used for metaprogramming, required for TypeGraphQL.
- **Class Validator**: A library for class and input validation.

## Structure
```
api-with-graphql/
│-- src/
│   ├── dtos/
│   │   ├── inputs/
│   │   │   ├── create-appointment-input.ts
│   │   ├── models/
│   │   │   ├── appointment-model.ts
│   │   │   ├── customer-model.ts
│   ├── resolvers/
│   │   ├── appointments-resolver.ts
│   ├── server.ts
│-- package.json
│-- tsconfig.json
│-- schema.gql (automatically generated)
```

## Installation and Usage
### 1. Clone the Repository
```sh
git clone <REPOSITORY_URL>
cd api-with-graphql
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Development Server
```sh
npm run dev
```

The server will start, and the GraphQL API will be available in the console with a link to access the Apollo Server Playground.

## Endpoints
### Fetch Appointments
```graphql
query {
  appointments {
    startsAt
    endsAt
  }
}
```

### Create a New Appointment
```graphql
mutation {
  createAppointment(data: { startsAt: "2024-02-08T12:00:00.000Z", endsAt: "2024-02-08T13:00:00.000Z" }) {
    startsAt
    endsAt
  }
}
```

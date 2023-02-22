<p align="center">
  <img src="https://github.com/Gapur/react-query-todo-example/blob/main/src/assets/logo.png" />
</p>

# React Query Todo Example

Fetching and manipulating data without using a global state was something out of the ordinary. React Query gives us this opportunity. It has two main functions useQuery and useMutation.

## Introduction to React Query

React Query is one of the best libraries for fetching, caching, synchronizing, and updating asynchronous data in your React app. It's super easy to use, zero-config and helps you solve state management issues and control your app's data before it controls you.

React Query has 3 main concepts:

    - Queries
    - Mutations
    - Query Invalidation

First, I want to show you a simple example of using React Query to get data, and then we'll discuss each concept using the example code.

```js

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

// this creates the client
const queryClient = new QueryClient();

export default function App() {
  return (
    // make the client available everywhere
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

function Users() {
  // this fetches users data from the server
  const { isLoading, error, data } = useQuery('users', fetchUsers);
  // in the fetching state
  if (isLoading) {
    return <span>Loading...</span>;
  }
  // in the isError state
  if (error) {
    return <span>{`An error has occurred: ${error.message}`}</span>;
  }
  // in the isSuccess state and we got users data
  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{`${data.name} ${data.lastName}`}</li>
      ))}
    </ul>
  );
}
```

## What are mutations?

When we want to create/update/delete data on the server, we call it mutations. So mutations are such a side effect on the server. To achieve this in React Query, we will use the `useMutation` hook.

```js
function NewUser() {
  const { isLoading, isSuccess, error, mutate } = useMutation(createUser);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>{`An error has occurred: ${error.message}`}</span>;
  }

  return (
    <div>
      {isSuccess && <span>User added successfully</span>}

      <button onClick={() => mutate({ name: 'Gapur', lastName: 'Kassym' })}>
        Create User
      </button>
    </div>
  );
}
```

In the example above, our `useMutation` requires a single `createUser` parameter. This is the function to create a new user.

The `useMutation` returns:

    - isLoading - in performing state
    - isSuccess - if the mutation was successful
    - error - the mutation is in the `isError` state and you can get it through the `error` property
    - mutate - a function you can call with variables to cause a mutation

# React Query Todo Example

<p align="center">
  <img width="600"src="https://github.com/Gapur/react-query-todo-example/blob/main/src/assets/example.gif">
</p>

## How to contribute?

1. Fork this repo
2. Clone your fork
3. Code 🤓
4. Test your changes
5. Submit a PR!

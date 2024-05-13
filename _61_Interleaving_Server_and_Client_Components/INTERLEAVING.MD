# Interleaving

## case 1 :  server component invoked inside another server component

- inside `interleaving/page.tsx`
import `ServerComponent1` :

- inside `ServerComponent1` invoke `ServerComponent2`

- output : no error

## case 2:  client component invoked inside another client component

- inside `interleaving/page.tsx`
import `ClientComponent1` :

- inside `ClientComponent1` invoke `ClientComponent2`

- output : no error

## case 3:  client component invoked inside server component

- inside `interleaving/page.tsx`
import `ServerComponent1` :

- inside `ServerComponent1` invoke `ClientComponent1`

- output : no error

## case 4:  server component invoked inside client component

- inside `interleaving/page.tsx`
import `ClientComponent1` :

- inside `ClientComponent1` invoke `ServerComponent1`

- output : error occurs
- any component that is nested inside a `client component`
  automatically become a `client component`
- importing a `server component` inside a `client component`
  is a pattern not supported in `nextjs`

## work around

- pass `server component` as `props` to `client component`
- use `react children props` to create a `slot` in your `client component`

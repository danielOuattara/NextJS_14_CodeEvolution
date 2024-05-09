import "server-only";

export function serverSideFunction() {
  console.log(
    `
    - use multiple libraries
    - use environment variables
    - interact with a database
    - process confidential information
    - etc...
    `,
  );

  return "Server Result";
}

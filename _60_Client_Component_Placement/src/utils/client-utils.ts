import "client-only";

export function clientSideFunction() {
  console.log(
    `
    - use window object
    - use localStorage
    - etc...
    `,
  );

  return "Client Result";
}

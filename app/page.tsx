import Comments from "./Comments";

const fetchDescription = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Product information ready for SEO"), 100)
  );

export default async function Home() {
  const description = (await fetchDescription()) as string;

  return (
    <>
      <header>Header</header>

      <h2>Product Description</h2>
      <p>{description}</p>

      <h2>Comments</h2>
      {/* @ts-expect-error Async Server Component */}
      <Comments />
      <footer>Footer</footer>
    </>
  );
}

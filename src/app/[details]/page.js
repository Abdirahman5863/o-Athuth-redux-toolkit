import { fetchdetails } from "@/actions";

export default async function Details({params}) {
console.log(params)
const result = await fetchdetails(params.details)
console.log(result)
  return (
    <main>
      <h1>{result.title}</h1>
      <div>
        <img src={result.thumbnail} alt={result.title}/>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6 m-0 p-10">
        {result.images.map((image) => (
          <img src={image} alt={result.title}/>
        ))}
      </div>
      <div>
        <p>{result.price}</p>
      </div>

      <div>
        <p>{result.description}</p>
      </div>
    </main>
  );
}
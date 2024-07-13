import { fetchdetails } from "@/actions";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default async function Details({params}) {
console.log(params)
const result = await fetchdetails(params.details)
console.log(result)
  return (
 <main>
   <Card>
    <CardContent>
    <CardTitle>{result.title}</CardTitle>
      <div>
        <img src={result.thumbnail} alt={result.title}/>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6 m-0 p-10">
        {result.images.map((image) => (
          <div key={image}>
          <img src={image} alt={result.title}/>
      </div>  ))}
      </div>
      <div>
        <p>{result.price}</p>
      </div>

      <CardDescription>
        {result.description}
      </CardDescription>
    </CardContent>
   </Card>
    </main>
  );
}
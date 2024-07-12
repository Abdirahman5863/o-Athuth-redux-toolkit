import Image from "next/image";

import { Fetchsofa } from "@/actions";
import Productcard from "@/components/product-card";

export default async function Home() {
  const items = await Fetchsofa()

  return (
    <main>
      <h1>Shopping cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-0 p-10">
      {
 items && items.data  && items.data.length >  0 ? items.data.map((item) => <div key={item.id}>
          <Productcard item={item}/>
          </div>)
          
        : null} 
      </div>
     
    </main>
  );
}

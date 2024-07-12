"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
export default function Productcard({item}) {
    const router = useRouter()
    return (
        <Card>
<CardContent>
    <div>
        <img src={item.thumbnail} alt={item.title}/>
        
    </div>
    <div className="p-6">
        <CardTitle>{item.title}</CardTitle>

    <div className="flex justify-between gap-2 items-center mt-6 ">
        < p>{item.price}/</p>
            <div>
        <Button className="bg-black text-white hover:text-black" onClick={() => router.push(`/${item.id}`) }>Details</Button>
    </div>
    </div>
    </div>
    
</CardContent>
        </Card>
    );
}
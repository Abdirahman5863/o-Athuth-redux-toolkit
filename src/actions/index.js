export async function Fetchsofa() {
  try {
    const apiResponse = await fetch('https://dummyjson.com/products',{
        method: "GET",
        cache: "no-store",
    });
    const data = await apiResponse.json();

    return{
        success: true, 
        data:data?.products
    }
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "error ocurred",
    };
  }
}
export async function fetchdetails(currentId) {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/products/${currentId}`,{
        method: "GET",
        cache: "no-store",
    });
    const data = await apiResponse.json();
   return data
  
  }
  catch (e) {
    console.log(e);
    return {
      success: false,
      message: "error ocurred",
    };
  }
}
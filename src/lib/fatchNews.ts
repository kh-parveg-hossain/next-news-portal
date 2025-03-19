

export const fatchNews = async (category : string ="",search:string="") => {

 try {
    const response = await fetch(`https://news-api-next-js-main.vercel.app/api/news?category=${category}&search=${search}`, {
        cache: 'no-store', // Ensures fresh data on every request
      });
    
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }
    
            const data = await response.json();
            return data
    
      
    
 } catch (error) {
    console.log(error)
 }
} 
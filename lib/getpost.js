export default async function getpost(id){
    const result=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return result.json()
}
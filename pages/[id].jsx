import React, { use } from 'react'
import {useRouter} from 'next/router'
const Page = (blog) => {
    // console.log(blog)
    const router=useRouter()
  return (
    <div onClick={()=>router.back()} style={{width:'50%',padding:'30px',border:'1px solid grey',textAlign:'center',margin:'auto'}}>
        <h4>{blog.blog.title}</h4>
        <p>{blog.blog.body}</p>
        <div style={{display:'flex',justifyContent:'center'}}>
        {
           blog.blog.tags.map((el)=>(
                <div key={el} style={{padding:'5px' ,border:'1px solid red',textAlign:'center',margin:'10px',borderRadius:'4px'}}>{el}</div>
            ))
        }
        </div>
    </div>
  )
}

export async function getStaticPaths() {
    let  res=await fetch(`http://localhost:4000/blogs`)
    let data=await res.json()
    
    return {
      paths: data.map((el)=>({ params: { id: `${el.id}` } })),
      fallback: false, 
    }
  }

  export async function getStaticProps(context) {
    const {params:{id}}=context
    // console.log(context)
    let  res=await fetch(`http://localhost:4000/blogs/${id}`)
    let data=await res.json()
    return {
      props: {
        blog:data
      },
    }
  }

export default Page
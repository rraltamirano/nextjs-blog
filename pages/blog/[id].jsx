import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';

function primerPost({data}) {
  return (
    <Layout>
        <h1>{data.id} - {data.title}</h1>
        <p>{data.body}</p>
        {/* <Link href='/'>
            <a>Volver al inicio</a>
        </Link>
        <Image
            src='/img/1.jpg'
            width={600}
            height={600}
            alt="mi imagen con Image"
        ></Image> */}
    </Layout>
  )
}

export default primerPost

// con esto se generara todos los archivos jsx para cada uno de los 'post' 
export async function getStaticPaths() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map(({id}) => ({params: {id:`${id}`}}));

    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error);  
  }
}

export async function getStaticProps({params}) {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id);
    const data = await res.json();

    return {
      props: {
        data
      }
    }

  } catch (error) {
    console.log(error);
  }
}
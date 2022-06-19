import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

function index({data}) {
  return (
    <Layout title='Main Blog' description='blog main descripcion'>
        <h1>Lista de pots</h1>
        {
          data.map(({id, title, body}) => (
            <div key={id}>
              <h3>
                <Link href={`/blog/${id}`}>
                  <a>{id} - {title}</a>
                </Link>
              </h3>
              <p>{body}</p>
            </div>
          ))
        }
    </Layout>
  )
}

export default index

// metodo usado en nextjs para la generacion de datos para paginas estaticas esto se ejecuta en el servidor 
export async function getStaticProps() {
  try {
    const rest = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await rest.json();

    return {
      props: {
        data
      }
    }

  } catch (error) {
    console.log(error);
  }
}
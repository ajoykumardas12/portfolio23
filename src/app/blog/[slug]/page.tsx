export default function BlogPost({ params }: { params: { slug: string } }){
    return <section>
        <h1>
            {params.slug}
        </h1>
    </section>
}
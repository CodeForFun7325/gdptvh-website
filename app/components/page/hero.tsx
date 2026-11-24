export default function Hero() { 
  return (
    <section className="flex flex-col gap-4 py-20 px-4 bg-background-light">
      <div aria-label="Hero Text" className="flex flex-col gap-4 in-w-[300px] max-w-[500px]"> 
        <span className="text-brand font-bold">Seattle • Buddhist Youth Community</span>

        <h1 className="text-display font-bold">
          A Place to Grow, Belong, and Give Back.
        </h1>

        <p> 
          A caring community for young people to build lasting friendship, practice
          Buddhist values, developer leadership, and serve our community together.
        </p>
      </div>

      <div aria-label="Hero Buttons" className="flex gap-4">
        
      </div>

    </section>
  );
}
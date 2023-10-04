const { DATABASE_URL } = process.env;
console.log(DATABASE_URL);

export default function Home() {
  return (
    <div>

      <h1 className="text-2xl text-green-500">HII Next.js</h1>
    </div>
  )
}

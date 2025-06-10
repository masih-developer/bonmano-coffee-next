export default function page() {
  return (
    <main>
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="rounded-lg bg-white p-4">
              <h2 className="text-lg font-bold">Card 1</h2>
              <p>This is the content of card 1.</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <div className="rounded-lg bg-white p-4">
              <h2 className="bg-red-100 text-lg font-bold">Card 2</h2>
              <p>This is the content of card 2.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

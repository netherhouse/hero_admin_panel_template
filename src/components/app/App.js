import HeroesList from "../heroesList/HeroesList";
import HeroesAddForm from "../heroesAddForm/HeroesAddForm";
import HeroesFilters from "../heroesFilters/HeroesFilters";
import { put } from "@vercel/blob";

import "./app.scss";

const App = () => {
  let counter = 0;
  const vercelUpdate = async () => {
    const { url } = await put("articles/blob.txt", `Hello World! ${counter}`, {
      access: "public",
    });
    counter++;
    console.log(url);
  };
  const vercelUpdate2 = async () => {
    const { url } = await put(
      "articles/blob.txt",
      JSON.stringify({
        a: 1,
        b: 2,
        c: 3,
      }),
      {
        access: "public",
      }
    );
    console.log(url);
  };
  const vercelUpdate3 = async () => {
    const { url } = await put(
      "articles2/blob.txt",
      JSON.stringify({
        a: 1,
        b: 2,
        c: 3,
      }),
      {
        access: "public",
      }
    );
    console.log(url);
  };

  return (
    <main className="app">
      <div className="content">
        <HeroesList />
        <div className="content__interactive">
          <HeroesAddForm />
          <HeroesFilters />
          <button onClick={vercelUpdate()}>update1</button>
          <button onClick={vercelUpdate2()}>update2</button>
          <button onClick={vercelUpdate3()}>update3</button>
        </div>
      </div>
    </main>
  );
};

export default App;

const fetchImg = async () => {
  const { signal } = new AbortController();
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    signal,
    // cache: "no-store",
  });
  return res.json();
};
export default async function page() {
  const obj1 = await fetchImg();
  const obj2 = await fetchImg();
  const obj3 = await fetchImg();

  console.log("🔔");
  return (
    <div>
      <img src={obj1.message} alt="" />
      <img src={obj2.message} alt="" />
      <img src={obj3.message} alt="" />
    </div>
  );
}

const fetchImg = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      tags: ["dog"],
    },
  });
  return res.json();
};
export default async function page() {
  const obj = await fetchImg();
  console.log("🔔 obj:", obj);

  return (
    <>
      <img src={obj.message} alt="" />
    </>
  );
}

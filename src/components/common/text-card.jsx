// eslint-disable-next-line react/prop-types
const TextCard = ({ title, description, bgColor }) => (
    <section className={`p-3 font-albert-sans `} style={{backgroundColor:bgColor}} >
      <h2 className="lg:text-2xl text-lg font-bold mb-2">{title}</h2>
      <p className="text-[#464646] lg:text-lg text-sm ">{description}</p>
    </section>
  );
  
  export default TextCard;
  
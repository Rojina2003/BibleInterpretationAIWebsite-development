// eslint-disable-next-line react/prop-types
const TextCard = ({ title, description, bgColor }) => (
    <section className={`p-3 font-albert-sans `} style={{backgroundColor:bgColor}} >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-[#464646] text-lg ">{description}</p>
    </section>
  );
  
  export default TextCard;
  